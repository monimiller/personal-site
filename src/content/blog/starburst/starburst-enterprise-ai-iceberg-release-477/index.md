---
title: Starburst Enterprise Connects AI and Iceberg Functionality
description: Starburst Enterprise release announcement showcasing new features in the 477-e LTS, including MCP, AI Agents, and Iceberg enhancements.
pubDate: 2025-12-03
authors:
  - monica-miller
categories:
  - Starburst
heroImage: ../../orange-blobs-1.jpg
draft: true
canonicalUrl: https://www.starburst.io/blog/starburst-enterprise-ai-iceberg-release-477/
---

Today, we are excited to announce [Starburst Enterprise 477-e LTS](https://docs.starburst.io/latest/index.html). This release advances our commitment to supporting the foundations of AI, extends our ongoing leadership on Iceberg, and makes it easier than ever to manage your data sources through enhancements to catalog management.

Collectively, 477-e introduces significant improvements in the following areas: 

-   Support for Model Context Protocol (MCP). 
-   Additional availability for the Starburst AI Agent (GA).
-   Enhancements and improved availability for Starburst’s AI Functions (GA).
-   Improvements to Starburst’s native Iceberg support, including performance enhancements and data management iterations 
-   Release of the Starburst Data Catalog, providing our best metadata management, particularly when compared to the Hive Metastore (HMS). 
-   Improvements to Starburst Enterprise catalog management in the form of our dynamic catalog and catalog explorer. 

## Starburst AI takes its next step

Starburst continues to deepen and enrich its status as the [ideal single foundation for AI workloads](https://www.starburst.io/blog/three-truths-enterprise-ai/). In this release, there have been three core enhancements involving MCP, the Starburst AI Agent, and AI functions. 

Let’s explore each of these features individually. As with all aspects of Starburst, data governance remains a key focus across all AI features and enhancements. 

### Starburst + MCP

[Model Context Protocol (MCP)](https://en.wikipedia.org/wiki/Model_Context_Protocol) allows AI agents to leverage software capabilities autonomously through the use of [MCP servers](https://docs.starburst.io/latest/starburst-ai/mcp-server.html). Starburst now supports AI use cases via MCP, opening a robust set of solutions and further strengthening an organization’s AI data capabilities. 

#### What is MCP?

Model Context Protocol (MCP) is an open industry standard first developed by [Anthropic](https://www.anthropic.com/). It lets [AI agents](https://www.starburst.io/blog/how-ai-agents-consume-data-products/) securely interact with external systems. An AI agent runs through an MCP client, which can connect to multiple MCP servers. Starburst provides the MCP server, so MCP-compatible agents can connect directly to Starburst Galaxy, including: 

-   [Claude Desktop / Claude Cloud](https://www.starburst.io/blog/how-ai-agents-consume-data-products/)
-   [ChatGPT Enterprise](https://chatgpt.com/en-CA/business/enterprise?utm_source=google&utm_medium=paidsearch_brand&utm_campaign=GOOG_B_SEM_GBR_Core_ENT_BAU_ACQ_PER_BRD_ALL_NAMER_CA_EN_110725&utm_term=chat%20gpt%20enterprise&utm_content=187258784339&utm_ad=779531084087&utm_match=b&gad_source=1&gad_campaignid=23139122100&gbraid=0AAAAA-I0E5eJa-8G8tbZ80Os6QeaaGtwv&gclid=Cj0KCQiAubrJBhCbARIsAHIdxD_wpOsQaBIjn5joozOLOlfDw_DS03jV3zVZr1xSUUHI_XS93W-V82MaAqLWEALw_wcB)
-   [Libre Chat](https://www.librechat.ai/) 

This allows users to ask [high-context questions](https://www.starburst.io/blog/ai-data-strategy/) that are answered using governed, real enterprise data.    

#### How MCP supports agentic AI 

Many people will already be familiar with [Agentic AI](https://www.starburst.io/info/agentic-workforce/), the use of AI to autonomously reason, plan, and execute tasks to solve a user problem.  This often takes on the form of an [autonomous AI Agent](https://www.starburst.io/blog/agentic-ai-workforce/). 

MCP is related to Agentic AI but differs in degree. Whereas an AI agent executes primarily in a 1:1 relationship–one task to one agent–MCP servers are able to execute multiple tasks from multiple agents in parallel. 

In some ways, this makes MCP similar to an [API](https://en.wikipedia.org/wiki/API). It exposes a set of capabilities that an AI agent can use, much like calling endpoints.

#### Starburst MCP Capabilities

[Starburst Enterprise now includes a built-in MCP server](https://docs.starburst.io/latest/starburst-ai/mcp-server.html) that lets AI agents issue secure, read-only SQL queries against your Starburst cluster. The MCP server exposes a simple, authenticated HTTP endpoint (/mcp) where agents send a SQL string and receive structured JSON results in return. This JSON output includes column metadata and rows, allowing agents to reason over data without needing a custom integration. 

The rollout of our MCP capabilities is being handled in a phased approach. In phase one, queries are read-only and capped by a configurable result-size limit, which keeps agent workloads predictable and safe. Authentication uses the same methods as your Starburst deployment, including OAuth2 scopes and headers, so governance remains consistent for both human and AI access.

As Starburst expands MCP support, additional capabilities, such as write-enabled endpoints and richer discovery tools, will enable agents to participate more deeply in governed workflows without sacrificing security or control. Starburst also provides data discovery and data product discovery endpoints, enabling agents to explore schemas, metadata, and medallion-layered products before executing a workflow.

### Starburst AI Agent, now available for all

The Starburst AI Agent was first [launched earlier this year](https://www.starburst.io/blog/ai-starburst-enterprise/). It provides AI-powered assistance when creating data products or querying data sources using natural language. 

These capabilities have now been upgraded, and the new version of the Starburst AI Agent now possesses robust reasoning, allowing users to work through all the steps necessary for their workflows. Specifically, this includes more in-depth discovery when creating data products and traversing multiple datasets. 

#### How has the Starburst AI agent been updated? 

The agent is able to gather knowledge and fold that understanding into a SQL statement, leading to greater accuracy, more flexibility, and the ability to adjust to changing conditions that it encounters in the datasets. It is also able to make tool calls, leveraging power across the toolchain. 

Overall, the new agent is more similar to other AI agents that users may have encountered, like ChatGPT. 

#### How MCP works alongside AI Agents and the Starburst AI Agent

The Starburst AI Agent fits within a continuum of agentic AI tools alongside MCP and external AI agents. 

AI agents typically orchestrate actions, while MCP provides access to the toolsets. In this sense, the AI agent acts like the brain. Meanwhile, the MCP server provides access to the toolset. The two are complementary to the larger objective of performing autonomous, agentic tasks. 

Starburst users typically access MCP functionality using their agent. Often, these would be external to Starburst. For example, let’s say that a customer wants to create a data pipeline. The sources are both Starburst and outside Starburst. The Starburst AI agent doesn’t have access to external sources. 

In this scenario, the user might use an external agent to connect the Starburst sources to the external ones. 

### Starburst AI Functions have now been enhanced

Starburst Enterprise 477-e LTS also includes a number of enhancements to the Starburst AI functions. First announced earlier this year, AI functionality has now been extended to include batch call functions that parallelize and accelerate compared to the previous iteration. Overall, this results in faster processing and faster masking. 

AI functions now also include improved sentiment analysis, with more precise classification into negative, neutral, or positive sentiment. These outputs align with common analytical needs and provide predictable, bounded results. 

## Starburst makes Iceberg table maintenance easier than ever

Starburst continues its ongoing commitment to Apache Iceberg as the foundation of our Icehouse architecture by including a number of Iceberg enhancements in this release. In doing so, we double down on our belief that Iceberg represents the perfect foundation for AI, and that Starburst represents the best way to leverage that foundation. 

Specifically, 477-e LTS now includes enhancements that provide more efficient storage, lower costs, and better performance for your Iceberg tables. This includes the ability to handle data maintenance by managing file compaction and small-file issues, cleaning up old snapshots, and enhancing how statistics are gathered to enable better findings. 

Because Iceberg is foundational, these benefits apply across the system, including AI workflows. With enhanced Iceberg file management, AI workflows and analytics workflows alike benefit from these improvements. 

### Starburst Data Catalog 

We are also happy to announce improvements to the Starburst Data Catalog, further enhancing the way that enterprise organizations collect, store, and manage their [metadata](https://www.starburst.io/blog/iceberg-transactions-and-metadata/). 

In doing so, we provide the best solution to date for those wishing to replace their aging [Hive Metastore (HMS) infrastructure](https://www.starburst.io/blog/hive-vs-iceberg/) with a more viable alternative built to take advantage of the significant improvements in Iceberg metadata handling. Support for this feature extends to: 

-   Iceberg
-   Delta Lake
-   Hive

As with all features at Starburst, the Starburst Data Catalog is built around [core principles of choice](https://www.starburst.io/info/data-lakehouse-buyers-guide/) and [optionality](https://www.starburst.io/blog/semantic-layer-architectures/). This means that any change can be brought in gradually, tapering workloads from older systems to newer ones over time. 

## Catalog management, now easier than ever 

This release also includes enhancements to the Starburst catalog management system, particularly the introduction of dynamic catalogs and the introduction of the Catalog explorer user experience. 

### Dynamic catalog

The [Starburst dynamic catalog](https://docs.starburst.io/latest/admin/properties-catalog.html) capability enhances users’ ability to manage their catalog experience at runtime, enabling them to create catalogs with zero downtime using SQL. This approach makes catalog operations significantly more flexible by allowing users to create, update, and remove catalogs entirely using SQL, without restarting the cluster or disrupting running workloads. The result is the ability to create automated data maintenance schedules using Iceberg tables, either via the Starburst UI or through a REST API.

This simplifies automation and reduces operational overhead, while built-in support for secret managers ensures that credentials remain secure. Most importantly, dynamic catalogs enable true zero-downtime changes, letting you evolve data source connections in the background while pipelines and queries continue uninterrupted.

Overall, this change creates a unified data maintenance experience. To read more about this feature, [consult our documentation](https://docs.starburst.io/latest/data-engineering/data-maintenance.html).

### Catalog explorer 

The [Starburst catalog explorer](http://docs.starburst.io/latest/overview/sep-ui.html#catalogs) has been updated to provide enhanced discovery tools and improve easy navigation. This continues an ongoing trend of steady, iterative improvements to UI to prioritize user experience. 

## Critical breaking changes for 477-e LTS

This Starburst Enterprise release 477-e LTS includes the following critical and breaking changes, [summarized here](https://docs.starburst.io/latest/index.html). Please view the full documentation for more information, as well as the [complete list of breaking changes](https://docs.starburst.io/latest/release/lts/breaking-changes.html)

### Starburst catalog 

The starburst catalog is no longer supported for static or dynamic configuration of Starburst AI. To prevent cluster startup failures, this will require changes to the configuration properties. 

Please consult [our documentation for more details](https://docs.starburst.io/latest/release/lts/breaking-changes.html#). 

### Metric and JMX bean names

There have been several changes to both the metric and JMX bean naming conventions. Users should update monitoring and alerting configurations that reference the old names. 

Please consult [our documentation for more details](https://docs.starburst.io/latest/release/lts/breaking-changes.html#). 

### Authenticator validation 

Authenticator validation has been updated, causing a change in the delegated and non-delegated authenticator process. This change requires updates to your authentication configuration to remove unsupported authenticator combinations. 

Please consult [our documentation for more details](https://docs.starburst.io/latest/release/lts/breaking-changes.html#). 

### Default value for catalog store

The default value for catalog.store has changed from file to starburst. This change only affects clusters that use dynamic catalog management (catalog.management=dynamic). 

Please consult [our documentation for more details](https://docs.starburst.io/latest/release/lts/breaking-changes.html#). 

#### Important configuration changes for 477-e LTS

Several configuration changes have also been implemented in this release. The changes include:

-   Teradata Direct connector HTTPS configuration has changed, replacing it with a [new, mandatory property](https://docs.starburst.io/latest/release/lts/breaking-changes.html).
-   Some Warp Speed warm-up rules are being deprecated. Please consult the documentation for [more details](https://docs.starburst.io/latest/release/lts/breaking-changes.html). 
-   The [AWS SDK v1](https://aws.amazon.com/blogs/developer/announcing-end-of-support-for-aws-sdk-for-java-v1-x-on-december-31-2025/) will reach its end of support on December 31, 2025. 

## Upgrade to the December 477-e LTS Today 

The 477-e LTS release marks a significant milestone in enabling organizations to leverage AI, create Iceberg tables, and maintain catalog management.

-   View the full release notes [here](https://docs.starburst.io/latest/release.html).
-   Review our AI documentation [here](https://docs.starburst.io/latest/starburst-ai/index.html). 
-   Read [our take](https://www.starburst.io/blog/iceberg-v3/) on Iceberg V3.
