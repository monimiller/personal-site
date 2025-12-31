---
title: "ETL vs Interactive Queries: The Case for Both"
description: >
  This is Part 1 of a 2-part blog about how Trino can support both interactive and batch use cases.  In Part 1, we will explore the case for why an organization needs both interactive and batch capabilities and why Starburst is the simplest way to run both using the same platform.  In Part 2, we will go through a detailed tutorial of how to set up a batch job using Trino and Starburst Galaxy.
pubDate: "2023-05-05"
authors: ["monica-miller"]
categories: ["Starburst", "Data Pipelines", "Analytics"]
heroImage: "../../orange-blobs-1.jpg"
draft: true
canonicalUrl: "https://www.starburst.io/blog/etl-vs-interactive-queries-the-case-for-both/"
---

TL/DR – Data engineers are wizards and witches. Creating [ETL pipelines](https://www.starburst.io/learn/data-fundamentals/etl-elt/#ETL) is a long and sometimes unnecessary process when answering business questions that can be solved in other ways. Interactive (or ad-hoc) queries are awesome, especially for specific self-service insights. Instead of fighting to pick between the two, as the American funk band, War, points out: “Why can’t we be friends?”

![ETL vs Interactive Queries, why can't we be friends?](https://www.starburst.io/wp-content/uploads/2022/05/ETL-vs-Interactive-Queries.png)

Professor McGonagall, teacher of Transfiguration at Hogwarts Witchcraft and Wizardry, educates her students on the branch of magic that alters the form or appearance of an object. While I never got my official Hogwarts Letter, I sincerely reject the notion that any practice of data wrangling does not qualify as pure magic, nay – Transfiguration, in its own right.  The ability to alter the form or appearance of data into the answer of meaningful business revelations is a skill that perhaps separates the data engineering muggles apart from the witches and wizards.

[via GIPHY](https://giphy.com/gifs/BoxOfficetr-harry-potter-harrypotter-potterhead-kDWbmeiUFMx6EOfQti)

Traditionally, ETL (extract, transform, load) is accepted as the blueprint for implementing any sort of data transformation logic within a typical data warehousing architecture, but it is becoming an over-utilized strategy as the modern data stack evolves and new technology is developed.  Interactive or ad-hoc query engines have recently proven worthy of contributing quick insight that ETL cannot provide. However, to completely overhaul one’s data technology stack in replacement of the other does not necessarily make sense as ETL can provide value that interactive queries can’t, and vice versa. In a world that is so categorical, why not embrace these differences by adopting both on the same platform? _**Why can’t \[ETL and Interactive Query Engines\] be friends?**_

## What is ETL?

[ETL](https://www.starburst.io/learn/data-fundamentals/etl-elt/) is a three-phase data integration process to extract data from multiple sources, transform the data into consistent and meaningful information, and then load the information into the intended target. Due to an established ecosystem of tools and data engineering practices, ETL pipelines are frequently relied upon to provide an automatic and reliable way to move data from disparate locations into the theoretical single source of truth, most often a data warehouse. With the emergence of cloud-based data environments, the similar practice of ELT (extract, load, transform) has also gained popularity to first move raw data into an object store, such as a data lake, and then enable further transformations downstream to eventually produce the desired output.

## ETL Pipeline Creation Lifecycle

The hero origin story—_or villain origin story depending on the particular request_—of an ETL pipeline commonly begins with an inquiry from a data scientist, data analyst, or any other data consumer. The consumer submits a request to the data engineering team, which goes to the backlog, where its fate is left up to chance on whether it gets worked next week, next month, or never (death by backlog). Let’s speculate that we have an underworked data engineering team (ha!) and a fabulous product owner running the backlog so the work gets started within 2-3 days.  Still assuming our data warehousing architecture is in play, a data engineer then must haggle a DBA to get the new target table created in both a development and production environment.

For those playing along at home, that’s two requests and two backlogs with two SLAs thus far. Sometimes, the data engineer can start development work as the table is being created; but, in many scenarios, this strategy creates unnecessary rework and should be avoided. Eventually, an ETL pipeline is built to move the data from the source to the target, automation testing and data validation is completed, and the original business ask is fulfilled weeks, if not months, later. The entire process potentially starts over after a week or two has passed, and the data consumer realizes that the business insight delivered actually wasn’t the question they initially wanted answered, even though they swore it was in multiple meetings.

[via GIPHY](https://giphy.com/gifs/how-i-met-your-mother-cbs-LMUOHJCNPvN4I)

## Interactive Query Engine Intervention

As an alternative to the ETL method, data consumers can self-service some of the answers to these business questions through an interactive query engine like Starburst Galaxy, which is a cloud-native service built on Trino. Instead of waiting for the data to land in the target fully transformed, a data consumer can write a SQL query that pulls in data directly from multiple sources at once. The best feature of an interactive query engine is exactly what you think it is, the interactivity capability. Let’s say a query is created, results are discovered, and it turns out the consumer wants to add more information to make the business insight more descriptive. This simply means an edit in the interactive query will have the newly updated result in minutes, which is a notable difference from the weeks it would take if the reliance for insight was strictly coming from ETL pipelines. Trino is built for speed and has [optimized performance](https://trino.io/docs/current/optimizer/cost-based-optimizations.html) for even copious amounts of data. Being based on ANSI SQL, Trino can be quickly adopted to utilize the robust ecosystem of connectors.

## When to Use ETL vs an Interactive Query Engine

There is no silver bullet to define clear guidelines of when each data manipulation technique is the right choice. The best suggestion is to learn the tradeoffs, understand the data, and _know when to hold ’em or when to fold ’em._

#### Speed:

_Time to insight_, which defines the time taken until actionable insight is achieved from the source data, can differ greatly depending on the data manipulation method of choice. I’ve already lamented about my personal and painful qualms with the extended weeks or months required for the turnaround on a data pipeline.  This is vastly different from the faster time to insight range of minutes to hours that an interactive query engine can start providing value.  If an ETL pipeline needs altering, this process still requires a substantial amount of resourcing since testing will be required for each integrated application in the pipeline. A SQL query change for an interactive query can be implemented with much less time and effort required.

With the nature of interactive query engines pulling results from multiple different sources, query response time is also a considering factor. Potentially, the resulting completion time of a query run for interactive analytics may be slightly longer than a data warehouse that is built for aggregation **\*if\*** that data warehouse is optimized correctly. However, that assumption is heavily reliant on the _if_ statement as data warehouses that are not optimized efficiently can create their own host of issues with query response time and may actually end up slower in comparison since Trino has implemented many cost-based optimizations, specifically to utilize the pushdown model and offload processing effort to the storage system.

#### Automation vs Exploration:

ETL relies on running jobs in sequential order, and there are many batch orchestration tools (such as Airflow and Dagster to name a few) that provide workflow integration to create a completely automated process.  In addition to the automatic nature, these jobs can also be scheduled through the workflow manager and are seen as a dependable option to move data within the defined batch window.  Interactive queries are by nature _interactive_ and are invaluable for exploratory analytics on unfamiliar data sets or problems, which means they require hands on keyboard action.  However, Trino and Starburst do allow users to easily schedule these queries using the tools mentioned above, which allows users to transition between interactive and batch with minimal effort.

#### Cost:

The infrastructure required to support either an on-premise or a cloud-based data warehouse requires a pretty penny of payment.  As companies fill up their data warehouse with tables for one-time usage, the data usually gets forgotten but the accompanying used storage does not.  After a couple of years of this habit, more storage is required and more cost is accrued than is necessary.

Meanwhile, Trino is based on the concept of separation of storage and compute, engages in autoscale clustering, and incorporates many more cost-based optimizations to reduce expenses. The utilization of an interactive query engine for specific self-service tasks can prevent data warehouses from the unnecessary storage of unused data.

Another big cost contributing factor is developer efficiency and agility. Development of an ETL pipeline requires the integration of multiple technologies to create one workflow, whereas interactive query engines utilize ANSI SQL, which many data consumers are already familiar with. It is much easier to focus on making your join statement more efficient by adding a `WITH` clause as opposed to debugging corrupted pipeline jobs that arise from infrastructure problems.

#### Trustworthiness:

Historically, the biggest trade-off between batch processing and interactive query analytics has been the battle of speed against query failure recovery.  Trino was developed to be fast, so the original decision was intentionally made to exclude fault tolerance in order to lower the potential latency, creating an all-or-nothing architecture. However, the failure of any Trino subtask would result in overall query failure, which made long-running queries tricky to properly manage at scale without the proper knowledge. While ETL pipelines also face their own set of failures, the stakes are usually low as this data manipulation method is constructed to split the load between three different stages and jobs usually finish upon rerun.  ETL pipelines also typically build in data quality checks, whereas an interactive query engine does not have that same ability.  Despite these tradeoffs, Trino-based interactive queries are resilient and boast a surprisingly low overall failure rate assuming the clusters are configured properly.

On the other hand, some siloed data organizations build ETL pipelines on top of ETL pipelines as an intended shortcut, contributing to slower SLA’s and awful debugging challenges (ETLception). If an extract job pulls zero records, that is usually only found after the pipeline fails on the final data quality steps. However, the team may or may not have access to the source’s source, and troubleshooting quickly becomes a nightmare. With interactive query engine integration, each team can pull the data they need from the source and easily perform data manipulation to use the data for their own needs.

## Introducing Query Failure Recovery

In a world so accustomed to the trade-off dilemma of choosing this or that, so much so that a [TikTok trend](https://knowyourmeme.com/memes/this-or-that-challenge) took off exploiting that very concept, every decision seems consequentially irreversible.  But just like the creators of Reese’s Peanut Butter Cups (probably) thought, why can’t we combine the best of both worlds?

[via GIPHY](https://giphy.com/gifs/why-not-both-dont-we-have-3ohfFhG5VDtDTzQv2o)

[Project Tardigrade](https://trino.io/blog/2022/05/05/tardigrade-launch.html) is a dedicated project within Trino which seeks to increase optionality and stop the pigeonholing of multiple use cases requiring entirely different systems. While each scenario’s need will vary, the addition of query failure recovery at both the task and the query level opens up more possibilities for integrating Trino with ETL. Ideally, the implementation of query failure recovery will increase ETL pipeline predictability, reduce cost, and help add some guardrails to avoid historically traditional pitfalls that were previously associated with Trino and ETL collaboration. Now, a data analyst can run exploratory analytical queries to identify new meaningful insights using the interactive query engine, and the steps to make this process repeatable and reliable for daily dashboarding have significantly decreased.

If you are interested in seeing for yourself and have a few minutes to spare, I invite you to try [Starburst Galaxy](https://www.starburst.io/platform/starburst-galaxy/) to play around with both interactive and batch clusters. Check out my video below which demonstrates how to navigate between your clusters interchangeably. Do some querying, transfigure some data, and pat yourself on the back since you are one step closer to the magical world than the rest of the muggles.
