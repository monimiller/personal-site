---
title: '42: the Solution to Data Analysts Everywhere'
description: Introducing Trino, Starburst, and Starburst Galaxy - the REAL answer to Life, the Universe and Everything.
date: 2022-04-16
tags: ['data', 'ETL', 'data anlytics', 'data engineering', 'Modern Data Stack']
draft: true
images: ['/public/static/images/Phoebe.jpg']
---

ETL, discussed [here](ETL_Intro), is known to be the trademarked solution many organizations turn to in order to move all the raw data sources into the data warehouse. After the cleaned, structured data is put into the data warehouse, we can build analytical reports and dashboards to satisfy our business intelligence needs. This sounds reasonable, right? Well, what happens when there is data not included in the previously defined sources that needs to be included in one of those reports? Data engineers then need to create a new table in the data warehouse, get access to the source, create an ETL pipeline, and then perform validation actions all before the new table can be utilized. There is a substantial time commitment to implement all these changes, meaning a delay on valuable business insights. There also are needs for data that do not involve data warehouse technology at all, including ML/AI capabilities which require raw data for discovery and data science purposes. The data warehouse data model is extremely limiting, and has rightfully so been iterated on in order to create a data environment that supports some newer technologies.

### Optionality - Fixing the reliance on Data Warehousing

So, what's the point? The point is the modern data architecture landscape is changing dramatically, and in order to future proof your data architecture, there must be room for optionality. [Here](https://blog.starburst.io/technical-blog/the-power-of-optionality-in-big-data) is an article discussing the importance of this concept by CEO of Starburst Justin Borgman. Optionality can prevent the problem we mentioned earlier, where analysts must wait weeks for insight because of the reliance of only having access to the data in the data warehouse, by the implementation of a data consumption layer. A data consumption layer acts as a single point of access to all data sources, not just the data warehouse.

### Trino, Starburst, and Starburst Galaxy

So what's the point? The point is that Trino, Starburst, and Starburst Galaxy can be used as an interactive query engine so that both ETL and batch capabilities are available. Check out my first Starburst article [here](d) to learn more.

### Starburst Galaxy Demo

Check out my starburst galaxy demo [here]().

### Spotlight of the Week!

This week, check out my blog post about the non-profit, [Ada Academy](../SOTW/Ada_Academy), who is trying to inspire change within our current workplace by giving women the resources to learn software development.
