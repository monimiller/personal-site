---
title: Build an open data lake architecture with dbt Cloud and Starburst Galaxy
description: >
  Three or so moons ago, I had the pleasure of demonstrating to you the notorious pair that is Starburst and dbt. We posted the dbt Core and Starburst Galaxy tutorial, and it was awesome to see people get excited about using the two technologies together to make life even better for the golden trio that is data engineers, analytics engineers, and data analysts. Starburst gives you the ability to join data from different data stores like data warehouses, data lakes, object storage, which means you can leverage all the goodness of dbt within one single repository making it more efficient to build, test, and document data pipelines.
pubDate: "2023-05-05"
authors: ["monica-miller"]
categories: ["dbt", "Trino", "Starburst"]
heroImage: "../../orange-blobs-1.jpg"
draft: true
# canonicalUrl: "https://www.starburst.io/blog/build-an-open-data-lake-architecture-with-dbt-cloud-and-starburst-galaxy/"
---

Three or so moons ago, I had the pleasure of demonstrating to you the notorious pair that is Starburst and dbt. We posted the [dbt Core and Starburst Galaxy tutorial](https://www.starburst.io/blog/build-a-data-lakehouse-reporting-structure-with-dbt-and-starburst-galaxy/), and it was awesome to see people get excited about using the two technologies together to make life even better for the golden trio that is [data engineers](https://www.starburst.io/learn/data-fundamentals/data-engineering/), analytics engineers, and data analysts. Starburst gives you the ability to join data from different data stores like [data warehouses](https://www.starburst.io/learn/data-fundamentals/what-is-data-warehouse/), [data lakes](https://www.starburst.io/learn/data-fundamentals/data-lake/), [object storage](https://www.starburst.io/learn/data-fundamentals/cloud-object-storage-vs-hdfs/), which means you can leverage all the goodness of dbt within one single repository making it more efficient to build, test, and document [data pipelines](https://www.starburst.io/learn/data-fundamentals/data-pipeline/).

Last week, we were able to name an even more iconic duo, no more waiting.

![](https://www.starburst.io/wp-content/uploads/2023/05/duo.png)

Starburst and dbt Labs [announced that the dbt Cloud integration](https://www.starburst.io/blog/build-and-run-scalable-transformation-pipelines-using-dbt-cloud-starburst/) is now available for Starburst Galaxy, Starburst Enterprise, and Trino.  So, there’s no better time to revisit that tutorial and publish another one using both dbt Cloud and Starburst Galaxy.

## **Why does this matter?**

Both dbt and Starburst strongly believe in the sanctity of open source software, as demonstrated by their commitment and investment into each respective open source community.  If your business is vibing well with open source technologies, that’s awesome. However, that doesn’t mean it may be the best choice for every organization. While some businesses may not have the resources to operate open source, that doesn’t mean they shouldn’t be able to implement top tier technologies in their own data architecture.  This new integration empowers data practitioners to make architectural choices that are best for their ecosystem, and to flexibility to decide where they want to fall on the build versus buy spectrum.

## **Open data lake architecture**

Many use Starburst to federate multiple data sources together, so you don’t have to do migration work to then work with data in a singular dbt repository.  The other popular use case is to utilize Starburst and dbt together to build out an open data lake architecture, which is what will be showcased in the tutorial. In this scenario, Starburst is acting as the data lake analytics platform that is combining data from multiple sources within the data lake and then dbt is transforming that data to make it easier to consume for analytics, reporting, and any other business need.

![](https://www.starburst.io/wp-content/uploads/2023/05/architecture-1.png)

In this example, we’re going to build a reporting structure in our data lake by using Starburst Galaxy to read the data in the land layer, then clean and optimize that data in the structure layer. The last step is to join and aggregate the data from all three sources together into a single table that is cleaned and ready to be utilized by a data consumer.

Some dbt projects like to use Staging, Intermediate, and Aggregate as their reporting structure layers, so that’s what’s utilized in the tutorial.

- Land = Staging
- Structure = Intermediate
- Consume = Aggregate

## **Where in the world is the data?**

We have our three data sources:

- **The AWS COVID-19 data lake** – utilizing low cost cloud object storage, this is where our confirmed case count for each day is stored.
- **Snowflake public COVID19 database** – we have vaccination data in snowflake that is then being utilized as lookup information to compare to our case count.
- **TPC-H standard datasets** – our business has predetermined the regions and countries they want to see through these tables, so this will hold our location information.

Here’s the lineage graph for the models you will create. Each source, highlighted in green and prefaced by the data location they originate from, will be built upon to create our three [data lakehouse](https://www.starburst.io/learn/data-fundamentals/data-lakehouse/) layers within S3 using Iceberg. You should notice an almost identical structure between the ideal architecture diagram displayed above and the resulting [data lineage](https://www.starburst.io/learn/data-fundamentals/data-lineage/) graph that displays the models throughout each layer of the reporting structure. Then, the final output results in aggregations at both the nation granularity level and the region granularity level. You can then get tricky within Starburst Galaxy and only let your data consumers see the aggregations using role-based access control and access-based access control.

## ![](https://www.starburst.io/wp-content/uploads/2023/05/Screenshot-2023-05-05-at-10.11.05-AM.png)

## **What you’ll need**

- A [Starburst Galaxy account](https://galaxy.starburst.io/login). This is the easiest way to get up and running with Trino to see the power of trino + dbt.
- [AWS account credentials](https://aws.amazon.com/free/?trk=78b916d7-7c94-4cab-98d9-0ce5e648dd5f&sc_channel=ps&s_kwcid=AL!4422!3!438195700988!p!!g!!aws%20account&ef_id=CjwKCAjw-rOaBhA9EiwAUkLV4n1w2sHgB3eVU2KABaLYLU5rub27xX8G1PaTLKsVSWnJCqNGTYpHUxoCzTYQAvD_BwE:G:s&s_kwcid=AL!4422!3!438195700988!p!!g!!aws%20account&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all). AWS will act as a source and a target catalog in this example.
- A [dbt Cloud account](https://www.getdbt.com/signup/). This is the easiest way to get up and running with dbt.
- Any [snowflake](https://signup.snowflake.com/) login. They have a 30 day free account. _Note: You can still run this tutorial without having a snowflake account. Those jobs will fail, but just skip over anything that’s snowflake related. Then in the final tables, remove any logic for the vaccinated population. If you want the code, reach out to_ [monicamiller@starburstdata.com](mailto:monicamiller@starburstdata.com).

The [github repository](https://github.com/monimiller/dbt-galaxy-covid-demo) has all the models pre-built for you. Therefore, it should be super quick to play around once you get connected to dbt Cloud.

## **Try it for yourself**

I’ve logged into Starburst Galaxy and completed all the [necessary setup infrastructure steps](https://github.com/monimiller/dbt-galaxy-covid-demo/blob/main/INFRA_SETUP.MD) so that I am now ready to connect to dbt Cloud.  First thing’s first, you need to set up a project.

**Project name:** dbt-galaxy

**Choose a connection:** Starburst

![](https://www.starburst.io/wp-content/uploads/2023/05/Screenshot-2023-05-05-at-10.15.12-AM.png)

At step 3, **Configure your environment**, navigate back to the cluster you created in Starburst Galaxy. Click the **Connection info** button, and then select dbt as the client of choice. You should see connection information that looks something like this.

![](https://www.starburst.io/wp-content/uploads/2023/05/Screenshot-2023-05-05-at-10.15.56-AM.png)

Download the information and bring it back to dbt Cloud.  Put in the appropriate host and port from the connection info. Then, put in your username for Starburst Galaxy, but also attach the role you want to use (shown as User in the connection info). Enter your Galaxy password.

**Catalog:** dbt_aws_tgt – _name of the target AWS catalog in Galaxy_

**Schema:** dbt_mmiller – _default schema for your models, add an identifier for yourself_

**Target Name:** default – _won’t come up in this scenario_

**Threads:** 6 – _default value_

_![](https://www.starburst.io/wp-content/uploads/2023/05/Screenshot-2023-05-05-at-10.17.53-AM.png)_

Next, test the connection to make sure everything is configured properly.

![](https://www.starburst.io/wp-content/uploads/2023/05/Screenshot-2023-05-05-at-10.18.42-AM.png)

Create a fork of the [tutorial repository](https://github.com/monimiller/dbt-galaxy-covid-demo). Then, select this fork as your repository in dbt Cloud. I’m connected to dbt Cloud through GitHub, so my repositories automatically popped up. Search and select your fork.

![](https://www.starburst.io/wp-content/uploads/2023/05/Screenshot-2023-05-05-at-10.19.13-AM.png)

Now that your project is set up, you should see the repository imported into dbt. You should be able to run everything without making any edits, but if you want to edit any of the models, create a new branch.

![](https://www.starburst.io/wp-content/uploads/2023/05/Screenshot-2023-05-05-at-10.21.37-AM.png)

Run the following commands on your main branch in the command line below:
