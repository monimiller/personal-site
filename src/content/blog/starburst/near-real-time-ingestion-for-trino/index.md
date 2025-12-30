---
title: Near Real-Time Ingestion For Trino
description: >
  Build a data ingestion solution to Iceberg tables using Starburst Galaxy together with Apache Flink and AWS Glue
pubDate: "2022-08-04"
authors: ["monica-miller"] # TODO Eric Hwang, Brian Zhan
categories: ["Trino", "Starburst"] # Analytics EngineerData ArchitectData EngineerHow-To GuidesQuery FederationStarburst GalaxyTrino
heroImage: "../../orange-blobs-1.jpg"
draft: true
canonicalUrl: "https://www.starburst.io/blog/near-real-time-ingestion-for-trino/"
---

It is quite popular in today’s data climate for modern data architectures to have some sort of batch processing system to move data into a [data lake](https://www.starburst.io/learn/data-fundamentals/data-lake/) at an hourly or daily cadence.  This is considered an adequate process for lots of analytics needs that do not require immediate updates, like drilling into revenue or user trends.  However, the ability to analyze near real-time data opens up the world to more latency-sensitive use cases that can accelerate anomaly detection and decision making, such as:

- **Delivering data to end users:** Take as an example a social media company that wants to provide live reports for their content creators. Content creators would be able to rapidly improve their content based on the instantaneous feedback of social engagement.

- **Operationalizing intelligence decisions**: Take as an example a food delivery company identifying demand spikes as they occur and allocating additional delivery resources to ensure on-time deliveries.

Today, people often face challenges with real-time data because of the lack of flexibility in common setups. When a software engineer deploys a real-time stream processing application, they typically need to pre-allocate infrastructure and resources to run this operation continuously, which takes time to configure and maintain. If they then want to modify the streaming data operation, they would have to re-configure this system as well as perform some possible data migration steps. For example, if you write a streaming application to compute advertiser per country breakdowns, and you later want to analyze advertiser per country per age group breakdowns, then you’d need to reconfigure the system with the new aggregation groups and figure out how to handle (if at all) your previously processed data.

A common pattern is for real-time data to be loaded in raw formats which are typically inefficient to query, such as JSON or CSV, and are almost always row-oriented. Furthermore, to maintain low latency bounds, real-time data often needs to be flushed out from IO buffers frequently to allow the data to be quickly accessed. However, this will often generate many small files. Both of these factors will make it expensive to perform computations on such data at scale.

Through this blog and the [GitHub repository](https://github.com/starburstdata/galaxy-kafka-loader-example/blob/main/README.md), we hope to show you how to navigate these barriers in order to enable near real-time use cases by streaming data into a data lake, using a widely known language (SQL), and efficient file formats. The beauty of this approach is that it gives end-users a scalable solution to query their data lake and discover the flexible possibilities provided by near real-time analytics. To help you get started faster, we showcase how utilize a fully managed [Trino](https://www.starburst.io/learn/trino/) service (Starburst Galaxy), so that you don’t have to start from scratch.

## **Architectural Overview: Kafka, AWS, Iceberg, Galaxy**

This technology stack uses Apache Flink hosted by Amazon Kinesis Data Analytics to continuously consume data from a Kafka JSON data source and transactionally write to an AWS Glue table in [Iceberg](https://www.starburst.io/learn/data-fundamentals/apache-iceberg/) format on an S3 data lake. The messages landed in S3 can then be queried using Trino (provided by Starburst Galaxy), essentially allowing you to query your data in near real-time.

![](https://www.starburst.io/wp-content/uploads/2022/08/nrt-analytics-Main-6-1.png)

### System Design Architectural Highlights:

### 1\. The Flink platform provides the ability to consume streaming data with Exactly Once guarantees

The Flink framework provides a [checkpointing system](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/checkpointing/) which guarantees robust execution. If any failure occurs, the streaming fault-tolerance system uses State Snapshots to provide [Exactly Once guarantees](https://nightlies.apache.org/flink/flink-docs-master/docs/learn-flink/fault_tolerance/#exactly-once-guarantees).

### 2\. The Iceberg table serves as the only schema definition for the ingestion process

In various alternative architectures, the schema is often stored in multiple systems, requiring these disparate systems to be kept in sync with each other. Here, the continuously running Flink job parses the JSON data source directly following the Iceberg table schema definition. This means future schema changes can be facilitated through just one source of truth.

### 3\. Trino (hosted via Starburst Galaxy)

Serves as the data lake analytics engine which empowers live querying of near real-time data for the purpose of interactive and batch analytics at scale.

### We chose the technology stack for the following reasons:

### • Apache Iceberg

Modern data formats like Iceberg provide high performance data access, while still providing transactional data operations out of the box. The transactional aspect allows for operations such as data compaction (rewriting smaller files into larger files) to be run behind the scenes without requiring coordination with the read workloads.

### • Flink

The popular stream processing framework is natively supported by AWS, and provides convenient and durable semantics for writing Iceberg tables at scale.

### • AWS Ecosystem

Amazon Kinesis Data Analytics provides managed Apache Flink, AWS Glue acts as metastore, and S3 serves as the object storage for the data lake.

### • Starburst Galaxy

A best-in-class fully-managed query engine for data lake analytics.

## **Tutorial with Managed Services**

#### **Prerequisites and Helpful Hints**

The information provided in this blog post is to supplement the step-by-step instructions found in the github repository, specifically the [README.md](https://github.com/starburstdata/galaxy-kafka-loader-example/blob/main/README.md). For more detailed information, visit this repository. Trino works best with case-insensitive identifiers, so all the SQL columns and tables should be lowercase by convention. The recommended practice is to use lower snake case (ex: “hello_world” or “order_id”).

For the sake of this technical tutorial, you will be using the Sample Kafka Publisher, a simple data generation tool provided in the repository, to publish messages to your Kafka topic.  Within the tutorial instructions, we will assume that you do not already have a topic available and will walk you through the steps to create a topic quickly using [Confluent Cloud](https://www.confluent.io/confluent-cloud/) (which has a free tier).

The tutorial will demonstrate both running the loader Flink job via local execution as well as in a more substantial state via production-like deployment. The local execution mode is valuable to exercise for building the project as well as for verifying the configuration and functionality of the components. To completely experience the benefits of this tutorial, it is advised to complete the local execution first and then move on to the production deployment.  However, if you would like to skip straight to the production configuration, the Flink jar is available to download in the [github repository](https://github.com/starburstdata/galaxy-kafka-loader-example/releases/tag/v0.0.1). Please be advised that the tutorial has instructions based on a wide permission set in order to enable users to quickly test out this solution. We recommend that these permissions be narrowed if this solution is to be applied outside of a development environment.

#### **Create Starburst Galaxy Data Lake**

Select your region and perform the necessary tasks to configure your AWS S3 data lake and grant Starburst Galaxy access to that data lake. It is strongly recommended that for the purpose of this tutorial, you configure all AWS services in the same region, ideally in the same region as your data source. This will help minimize any AWS cross region network charges.

_AWS_

1. Create an AWS [S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) to host your data lake data.
2. Create an [AWS Glue database](https://docs.aws.amazon.com/glue/latest/dg/start-data-catalog.html) to host the data lake table schemas.
3. Create an AWS User of type ‘Access key – Programmatic Access’ and add the `AmazonS3FullAccess` and `AWSGlueConsoleFullAccess` existing policies to it. Save your Access Key ID and Secret Access Key.

_Starburst Galaxy_![](https://www.starburst.io/wp-content/uploads/2022/08/galaxy-catalog.gif)

1. Create and [configure](https://docs.starburst.io/starburst-galaxy/catalogs/s3.html) the S3 Catalog so that Starburst Galaxy can access the data lake.
2. [Create](https://docs.starburst.io/starburst-galaxy/clusters/index.html) a new Cluster in your region and mount the S3 Catalog.
3. Create the Iceberg table that matches your JSON payload structure from the query provided in the [github repository](https://github.com/starburstdata/galaxy-kafka-loader-example/blob/main/README.md). This table will be used to store the ingested data from your Kafka topic.

![](https://www.starburst.io/wp-content/uploads/2022/08/create-table-gif.gif)

#### **Create the Kafka Topic and Generate Kafka Credentials**

![](https://www.starburst.io/wp-content/uploads/2022/08/Screen-Shot-2022-08-03-at-6.31.49-PM.png)

1. If needed, create a new Confluent Cloud Kafka environment and cluster to host your tutorial Kafka topic.
2. Add a topic to your Kafka cluster as the source for data ingestion. It is optional to add a second topic to your Kafka cluster as a dead letter queue that can be used to store any errored Kafka messages. For the purpose of a tutorial, use only one partition and create the topic by hitting the “Create with defaults” button.
3. Generate API key credentials with “Global Access”. Download and save the file which contains your `KAFKA_LOADER_API_KEY`, `KAFKA_LOADER_API_SECRET`, `KAFKA_LOADER_BOOSTRAP_SERVER`.

#### **Store the Credentials in AWS SecretsManager**

Create a new secret in AWS SecretsManager to store the Kafka API access credentials by selecting the “Other type of secret” secret type. Make sure to create the secret in the same region as the rest of your work. For more information on properly configuring the secret, visit the [github repository](https://github.com/starburstdata/galaxy-kafka-loader-example/blob/main/README.md#store-kafka-api-credentials-in-aws-secretsmanager).

#### **Local Execution**

_Build the Job_

To build the Loader you will need a Java 11 runtime environment, so make sure you have Java 11 installed on your Operating System.

1. Clone the [repository](https://github.com/starburstdata/galaxy-kafka-loader-example).
2. Perform a clean install in the project root directory. The output Flink job JAR will be available at the following path: _./target/galaxy-ka\_\_fka-loader-example-1-SNAPSHOT.jar_._![](https://www.starburst.io/wp-content/uploads/2022/08/loadergif.gif)_
3. Add or update your local [AWS default credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) so that your local context is properly configured to reach your AWS environment. The necessary credentials are whatever the loader needs to run, which would be `AmazonS3FullAccess`, `AWSGlueConsoleFullAccess`, `SecretsManagerReadWrite`.

_Launch the Loader_

Launch the loader locally by replacing all the default values according to your own environment setup. The [README instructions](https://github.com/starburstdata/galaxy-kafka-loader-example/blob/main/README.md#running-the-loader-locally) give an example of a typical loader configuration.

![](https://www.starburst.io/wp-content/uploads/2022/08/loaderlaunchgif.gif)

_Run the Sample Kafka Publisher_

The Sample Kafka Publisher was created to generate sample data. Each time the tool is run, exactly one new row will be inserted into your Kafka topic. If the loader is running, it should be able to process this new message. The default Flink flush time is one minute, so it may take up to that time for the data to appear in your Starburst Galaxy data lake. After waiting for the appropriate default time, use Starburst Galaxy to select from the table to see the sample records in Starburst Galaxy.

![](https://www.starburst.io/wp-content/uploads/2022/08/example.gif)

#### **Production Execution**

Before proceeding with the production execution, validate that you have terminated the local loader. The local loader uses the same Kafka client ID and thus may conflict with the production loader.

_Launch Flink job with AWS Kinesis Data Analytics_

1. Create a new S3 bucket to store the Flink job JAR. This is how AWS Kinesis Data Analytics will reference it.
2. Create a streaming application in AWS Kinesis Data Analytics with Apache Flink version 1.13. For this streaming application, select the “Create/update IAM role” option if you do not already have a role set up for this tutorial. Note that you will be adding additional credentials to this default generated role. For this tutorial, select the “Development” template, but you may want to change the defaults for your production environment.
3. Update the newly created IAM role and add the following policies: SecretsManagerReadWrite, AmazonS3FullAccess, AWSGlueConsoleFullAccess.
4. Configure the aforementioned streaming application by replacing all the default values according to your own environment setup. The [README instructions](https://github.com/starburstdata/galaxy-kafka-loader-example/blob/main/README.md#launch-flink-job-with-aws-kinesis-data-analytics) give an example of a typical configuration.
5. Once the streaming application is properly configured and updated, hit the “Run” button in the top right corner.
6. After the status of the streaming application changes to “Running”, execute the Sample Kafka Publisher to insert data. After about a minute, you should see your data appear in your Starburst Galaxy data lake.

![](https://www.starburst.io/wp-content/uploads/2022/08/finalgif.gif)

## **Maintaining a Healthy Ingestion System**

Focusing solely on the primary setup for a new system and failing to consider the longevity of the architecture may potentially result in future errors. We have compiled important considerations for both Maintenance and Schema Evolution.

### **Maintenance**

Effective and efficient near real-time analytics is a force-multiplier, enabling faster time to insight and driving quick decision making.  However, there is some ongoing periodic maintenance that must be performed to upkeep the health of the system.

#### **Compaction**

Real-time streaming ingestion tends to flush out data frequently to minimize data query latency. However, this typically results in many small files on the underlying storage system. Small files increase the IO cost of scanning the data and dramatically reduce overall query efficiency. Iceberg format allows for transparent asynchronous compactions, which rewrite the many small files into fewer larger ones, and these compactions must happen periodically to retain healthy analytic query performance. The following Starburst Galaxy SQL query demonstrates how this compaction could be run:

```sql
ALTER TABLE <GALAXY_DESTINATION_TABLE_NAME>
    EXECUTE OPTIMIZE
    WHERE CAST(<TIMESTAMP_PARTITIONING_COLUMN> AS DATE) >= CAST(now() - <SQL_TIME_INTERVAL> AS DATE);

-- Daily Example:
ALTER TABLE test_table
   EXECUTE OPTIMIZE
   WHERE CAST(timestamp AS DATE) >= CAST(now() - INTERVAL '2' DAY AS DATE);
```

[view raw](https://gist.github.com/monimiller/46520418acaa215e7e61aa1abaad48e5/raw/4cbe8c74cf533dd4a7da8ec5a2691d08adf22a66/compaction.md) [compaction.md](https://gist.github.com/monimiller/46520418acaa215e7e61aa1abaad48e5#file-compaction-md) hosted with ❤ by [GitHub](https://github.com/)

#### **Snapshot Expiration**

The Iceberg storage format creates a new snapshot, or table version, for each write to the table.  These snapshots are retained indefinitely and accumulate over time. In order to limit the size of the system metadata, it is recommended to periodically run the expire snapshots command to remove any old snapshots that will not be used anymore.

```sql
ALTER TABLE <GALAXY_DESTINATION_TABLE_NAME>
   EXECUTE expire_snapshots(retention_threshold => '7d');

-- Daily Example:
ALTER TABLE test_table
   EXECUTE expire_snapshots(retention_threshold => '7d');
```

[view raw](https://gist.github.com/monimiller/8dd285f911c32eb574c5ccc5cb18c6aa/raw/ee0100a5142cfba80ffe97308e59a0592eae9a91/snapshot.md) [snapshot.md](https://gist.github.com/monimiller/8dd285f911c32eb574c5ccc5cb18c6aa#file-snapshot-md) hosted with ❤ by [GitHub](https://github.com/)

#### **Retention**

Data Governance and Compliance are critical aspects for any ingestion system, since data is continuously flowing in.  A common practice in the industry is for each table to have a data retention period pre-established based on the semantic nature of the data stream. This helps to comply with regulatory requirements as well as limit total storage size.  The following Starburst Galaxy SQL query demonstrates how such a retention operation could be run:

```sql
DELETE FROM <GALAXY_DESTINATION_TABLE_NAME>
    WHERE <TIMESTAMP_PARTITIONING_COLUMN> < date_trunc('day', now() AT TIME ZONE <TIMEZONE> - <SQL_TIME_INTERVAL>);

-- Daily Example:
DELETE FROM test_table
    WHERE timestamp < date_trunc('day', now() AT TIME ZONE 'UTC' - INTERVAL '30' DAY);
```

[view raw](https://gist.github.com/monimiller/06c16601ca4e355b46f8d76f1738314a/raw/baf457f2fb7eb0beb81bc0320c36566d089de123/retention.md) [retention.md](https://gist.github.com/monimiller/06c16601ca4e355b46f8d76f1738314a#file-retention-md) hosted with ❤ by [GitHub](https://github.com/)

#### **Data Quality**

A common issue is to have malformed messages accidentally inserted into the ingest pipeline. A typical best-practice is to add a Dead Letter Queue (DLQ) topic to enable the Flink job to push out any messages that fail to parse. This allows the ingestion process to continue without halting in the presence of bad messages. If a dead letter queue topic is not configured, any incoming messages that fail to parse will halt the loading process. Another best practice is to specifically create validations around the incoming data value of the messages.  Some examples include sampling account_id fields every ten minutes to validate the data flowing in is valid or setting up heartbeat tests to ensure data is continuously flowing in or an alert is triggered. Because of the nature of the streaming environment, forgoing these continuous checks and failing to catch time sensitive errors can result in disastrous results such as losing data forever.

### **Schema Evolution**

Data schema is almost never finalized from the outset, and a fully fledged production streaming ingest system must be able to adapt to new schema changes. To simplify this process as much as possible, the Apache Flink job has been developed to use the Iceberg table schema as the schema’s single system of record, which will mitigate any need to replicate the schema to any other systems.

**1\. Adding a column to an Iceberg table**

If a new column is required, this column can easily be added through the following SQL command in Starburst Galaxy.

```sql
ALTER TABLE <GALAXY_DESTINATION_TABLE_NAME>
    ADD COLUMN <NEW_COLUMN_NAME> <NEW_COLUMN_TYPE>;

-- Example:
ALTER TABLE test_table
    ADD COLUMN new_column VARCHAR;
```

[view raw](https://gist.github.com/monimiller/d2a9a7ea356f0c13d4e6ec1dc9829893/raw/7f758f2d2e65f92c5ccda3f6a70d88fa8eec37b4/add_column_iceberg.md) [add_column_iceberg.md](https://gist.github.com/monimiller/d2a9a7ea356f0c13d4e6ec1dc9829893#file-add_column_iceberg-md) hosted with ❤ by [GitHub](https://github.com/)

In order for the changes to take effect, the Kinesis Data Analytics Streaming Application must be restarted, either through pressing the button to ‘“Stop”, waiting for the application to end, and then pressing the button to “Run”. A faster method is to click the “Configure” button, and then the “Save changes” button at the bottom of the configurations page – forcing the Flink job to restart. Either restart option will cause the job to detect the new schema changes and begin operating with that configuration.

Any previously loaded rows before this column addition will be automatically assigned NULL values for this column. New records will be parsed appropriately, and any records missing this field will be assumed to have a NULL value.

**2\. Removing a column from an Iceberg table**

If a column is required to be removed, this column can easily be dropped through the following SQL command in Starburst Galaxy.

```sql
ALTER TABLE <GALAXY_DESTINATION_TABLE_NAME>
    DROP COLUMN <NEW_COLUMN_NAME>;

-- Example:
ALTER TABLE test_table
    DROP COLUMN new_column;

```

[view raw](https://gist.github.com/monimiller/bf913a986a87949405b07e426371f807/raw/cf3eb276daa83f671452de50dfaf3a727969f452/remove_column_iceberg.md) [remove_column_iceberg.md](https://gist.github.com/monimiller/bf913a986a87949405b07e426371f807#file-remove_column_iceberg-md) hosted with ❤ by [GitHub](https://github.com/)

In order for the changes to take effect, the Kinesis Data Analytics Streaming Application must be restarted, either through pressing the button to “Stop”, waiting for the application to end, and then pressing the button to “Run”. A faster method is to click the “Configure” button, and then the “Save changes” button at the bottom of the configurations page – forcing the Flink job to restart. Either restart option will identify the new schema changes and display them within the table. Once the loader restarts, the dropped column will no longer be written.

**3\. Scaling up the loader**

If the loader is ever unable to keep up with the ingested data volume, you can always add more parallelism.  Navigate to the corresponding Kinesis Data Analytics streaming application, click “Configure”, and then change the “Parallelism” number to something larger, and then click “Save changes” at the bottom of the configuration page.  This will force the loader Flink job to stop and restart with more concurrent tasks. It is important to note that **the Flink job cannot have parallelism greater than the number of Kafka topic partitions**. If you want to set the parallelism greater, you will have to first increase the number of Kafka topic partitions.

## **Final Thoughts**

We hope that this tutorial will demonstrate an example architecture that provides an efficient and thoughtful solution to some of the common challenges faced with near real-time analytics systems. Many systems strictly focus on the present configuration; however, Iceberg’s built-in capabilities provide simple mechanisms to ensure the health of the system even after the implementation of new schema changes. Visit the [github repository](https://github.com/starburstdata/galaxy-kafka-loader-example/blob/main/README.md) for more information to test out this ingestion process yourself.

### Schedule a call with an expert

[Book time](https://www.starburst.io/contact/)
