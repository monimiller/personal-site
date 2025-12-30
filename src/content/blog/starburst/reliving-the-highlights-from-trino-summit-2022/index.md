---
title: "Reliving the Hype: Highlights from Trino Summit 2022"
description: "June 13, 2024. Live in Boston. Virtually anywhere."
pubDate: "2022-11-18"
authors: ["monica-miller"]
categories: ["Trino", "Data Mesh", "Starburst"]
heroImage: "../../orange-blobs-1.jpg"
draft: true
canonicalUrl: "https://www.starburst.io/blog/reliving-the-highlights-from-trino-summit-2022/"
---

Last week in San Francisco was one for the Trino history books. After three years of planning, rescheduling, planning, and rescheduling some more, Starburst was finally able to host the first in-person Trino Summit at the Commonwealth Club in San Francisco on the 10th of November, 2022. The original proposal was to gather for the first time in 2020 under a different project name; however, the Covid-19 pandemic threw a wrench into those plans as events pivoted to a virtual format. While our Trino [virtual events](https://www.starburst.io/blog/cinco-de-trino-2022-a-trino-tastic-celebration/) have been a smashing success, I’m thankful that the stars aligned and I was lucky enough to be in-person to experience this milestone.

The themes of this Trino Summit were federation and Pokemon. We appropriately spent the day referencing the plethora of catalogs you can utilize with Trino, while making plenty of Pokemon puns along the way. As promised, we even had Commander Bun-Bun join us in person!

![](https://www.starburst.io/wp-content/uploads/2022/11/Trino-Summit-Mandy-Darnell-11.10.22_209.jpg)

The joy radiating from the developer relations crew to be able to mingle with one hundred of our closest Trino-loving friends in-person and nearly six hundred online attendees was unmatched.  I mean, look at those smiles.

![](https://www.starburst.io/wp-content/uploads/2022/11/IMG_9503-scaled.jpg)

After kicking off the conference with, I dare say, my favorite [Commander Bun-Bun introductory video](https://www.youtube.com/watch?v=o2MJvRKG14M&t=12s) yet, we heard from Trino co-creator Martin Traverso who delivered the keynote speech: **State of Trino**. Martin shared some monumental Trino milestones from the last year including Trino’s tenth birthday celebration, metrics showing Trino’s continuous growth, the update to Java 17, and enhanced support for the community.  We then reflected on some of the new functionality, which was enabled from one of the 35 releases that occurred this year, such as merge, fault tolerant execution, table functions, and more. From there, our stellar lineup of speakers took the stage to educate us all on their experiences with Trino.

Stream the keynote speech [on demand](https://www.youtube.com/watch?v=mUq_h3oArp4&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=11).

## **Session Highlights**

#### **_Trino @ Apple_**

Vinitha Gankidi and Yathi Peddyshetty from Apple spilled the tea on all things Trino. After learning about Apple’s Trino use cases such as adhoc analytics, reporting, experimentation and federation, we then heard some of the recent features this team has contributed toward in Trino. The talk ended with a teaser, as Apple shared where they are looking to contribute back to the community in their ideal future OSS roadmap, with highlights including additional iceberg support, fault – tolerant execution with ETL, as well as data caching.

Stream Apple’s session [on demand](https://www.youtube.com/watch?v=3afcRK6Yvio&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=3).

#### **_Enterprise-ready Trino at Bloomberg: One Giant Leap Toward Data Mesh!_**

Have you ever created something so beneficial to those around you, that you end up increasing the workload for yourself? If the answer is yes, you can empathize with Bloomberg developers Pablo Arteaga and Vishal Jadhav who worked with their team to implement a data mesh architecture that demanded high availability.  The team shared that the solution was to add in another layer of indirection and incorporate the Trino load balancer, which instated granular authorization, traceability, data security, and many other benefits, while also allowing the configured data mesh architecture to maintain high availability.

Stream Bloomberg’s session [on demand](https://www.youtube.com/watch?v=ePr-iVQ5ri4&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=5).

#### **_Optimizing Trino Using Spot Instances_**

Zillow software engineers, Rupesh Kumar Perugu and Santhosh Venkataraman, walked us through their responsibilities on the data platforms team which includes supporting over 65,000 queries a day on 6 Trino services that share the load based on BI Reporting, ETL schedules, adhoc analysis, and visualization services. After facing challenges with their worker groups such as spot interruptions, cost creep, and node capacity, the team investigated how to best optimize to reduce cost without interrupting reliability of service. Through trial and error, the team found the golden ratio to improve their cost without sacrificing reliability.

Stream Zillow’s session [on demand](https://www.youtube.com/watch?v=vz9reBUgQTE&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=13).

#### **_Leveraging Trino to Power Data at Goldman Sachs_**

This lightning talk may have been quick, but impactful nonetheless as we listened to the esteemed crew of Siddhant Chadha, Sumit Haldar, Suman Newton, and Ramesh Bhanan discuss the benefits of leveraging Trino at Goldman Sachs to reduce last-mile ETL and provide a unified way of accessing data through federated joins.  Critical to their operation was the requirement of high availability. Goldman Sachs discusses how they architected their ecosystem in order to achieve this and gain trust with analysts and data scientists.

Stream Goldman Sachs’s session [on demand](https://www.youtube.com/watch?v=g9fLA3tFG-Q&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=7).

#### **_Elevating Data Fabric to Data Mesh: Solving Data Needs in Hybrid Datalakes_**

Sajumon Joseph from Comcast had us on the edge of our seat even from his opening slide as he discussed three heavily debated topics in the current data climate: data fabric, data mesh, and hybrid data storage. First, Saj highlighted a successful data mesh solution which results in beneficial outcomes such as data accountability, data consolidation, improved data analytics, and more. Then we heard about the role data governance plays in implementing a successful data mesh strategy, specifically data access control methods such as attribute masking, row filtering, tagging, and ABAC/RBAC policies as well as privacy mediation policies like retention, minimization, and privacy scanning.

Stream Comcast’s session [on demand](https://www.youtube.com/watch?v=sSWBi7bBotQ&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=14).

#### **_Rewriting History: Migrating petabytes of data to Apache Iceberg using Trino_**

The award of strongest meme game goes to Marc Laforet from Shopify. Marc led us to explore Shopify’s journey of migrating their data lake to the Iceberg table format, which was necessary due to the lack of interoperability and the intense friction between data platform components. After we learned about the capabilities of Iceberg as an open table format, we then heard the technological reason Shopify’s migration strategy required full rewrites of all their data. Marc discussed the challenges faced as they underwent this migration, how Trino community members helped them overcome their issues with critical pull requests, and then reported on the incredible performance benefits that switching to Iceberg had for their organization.

Stream Shopify’s session [on demand](https://www.youtube.com/watch?v=nJBBw-xnLU8&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=10).

#### **_Trino for Large Scale ETL at Lyft_**

With over 250,000 queries per day, 10 petabytes read data daily, and approximately 100 terabytes of daily write data, Lyft can safely qualify as a Trino power user.  Charles Song and Ritesh Varyani discussed their incorporation of Trino ETL at Lyft including driving factors such as high demand for faster development iterations and ANSI-SQL compatibility. As Lyft increases in Trino ETL user adoption, the organization has seen overall ETL DAG runtimes reduce from anywhere between 30%-90% as compared to their previous Hive processes.The team plans to next enable fault tolerant execution, focus on reliability, and deliver even faster upgrades.

Stream Lyft’s session [on demand](https://www.youtube.com/watch?v=FL3c1Ue7YWM&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=8).

#### **_Federating them all on Starburst Galaxy!_**

I had the privilege of getting mic’d up and making my Trino Summit debut as I showcased a live Starburst Galaxy demo at Trino Summit. First federating Pokemon Go data between MongoDB and S3, I then built out a reporting structure within my data lakehouse architecture. As I was developing the demo, I had a brilliant stroke of genius to name my MongoDB instance, **Pokemongo**, and I appreciated the laughs I got from the crowd as we solidified our nerd to nerd connection. Finally, I then used the ready to be queried consume table to build out visualizations with ThoughtSpot that displayed the most frequently visited geolocation points for Pokemon Go encounters around the Bay Area.

Stream my session [on demand](https://www.youtube.com/watch?v=Zfmxwu0m98k&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=6).

#### **_Trino at Quora: Speed, Cost, Reliability Challenges and Tips_**

Quora’s mission is to share and grow the world’s knowledge, and there’s no doubt software engineer Yifan Pan contributed to that mission while discussing Trino at Quora. She shared the previous challenges the organization has faced using Trino, as well as the discovered solutions to overcome these obstacles. Trino is utilized at Quora for ETL, ad-hoc analytics, A/B testing, and more, so it’s safe to assume the team heard plenty about each obstacle before they implemented a solution. Yifan discussed challenges with cost, performance, and reliability, as well explaining the resolution that efficiently solved each issue.

Stream Quora’s session [on demand](https://www.youtube.com/watch?v=Q03DzL_fm-I&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=9).

#### **_Journey to Iceberg_**

If you are yet to believe that Trino and Iceberg are the newest “better together” combination, SK Telecom is another shining example that migrating to Iceberg results in drastic performance improvements. Jaechang Song and Jennifer Oh explained the many challenges SK Telecom has faced with Trino and Hive, including query tuning, partition pruning, and column sorting for predicate pushdown.  They next discussed why Iceberg was selected based on their needs, and then detailed the strategic implementation strategy which resulted in a successful migration. Finally, both engineers discussed the incredible performance implications, such as reduced query elapsed time by 80% and reduced storage by 75%.

Stream SK Telecom’s session [on demand](https://www.youtube.com/watch?v=V9_aPLXATh8&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=2).

#### **_Using Trino with Apache Airflow for (almost) all your data problems_**

Some data problems are more complex than the interactive analytics use cases most commonly associated with Trino, and are best broken down into a sequence of interdependent steps, a.k.a. a workflow. For these use cases, dedicated software is often required in order to schedule and manage these processes with a principled approach. Philippe Gagnon from Astronomer, Inc. discussed the benefits of leveraging Apache Airflow to orchestrate Trino queries into complex workflows to solve practical batch processing problems, all the while avoiding the use of repetitive, redundant data movement.

Stream Astronomer’s session [on demand](https://www.youtube.com/watch?v=xKDN7RUJ5i4&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=4).

#### **_How we use Trino to analyze our Product-led Growth (PLG) user activation funnel_**

As a product-led growth company, Upsolver must track and analyze every action our users perform within the product to remove friction and maximize usage and satisfaction. After explaining the concept of PLG,  Mei Long walked us through how introducing Trino into their architecture helped the organization meet its needs of collecting, modeling, and enriching user events. She then demoed the data architecture created by Upsolver to optimize Trino query performance for the purpose of accelerating their ability to understand user behavior and improve conversion rates.

Stream Upsolver’s session [on demand](https://www.youtube.com/watch?v=MCB_1furnAo&list=PLFnr63che7wYOut8swpCX2tV_W31z-2nr&index=12).

## **Thank You!**

I feel like I’m giving an Oscar speech as I walk through my long list of thank-you’s; however, they are all extremely warranted.

- To our speakers, thank you for giving your time to create and present quality content for us.
- To our Starburst team, thank you for hosting the event and giving me the opportunity to present on our behalf.
- To our collaborating sponsors, thank you for your support to create this amazing day.
- To our planning committee, thank you for your time and ideas. You all created and executed a beautiful vision I may have wrongfully doubted once or twice.
- To our attendees, thank you for joining us and sharing some laughs! We hope to see you either online or in-person at our next event.

Finally, I cannot thank the Starburst events team enough for their dedication to this summit. This event would not have been successful without them.![](https://www.starburst.io/wp-content/uploads/2022/11/unnamed-1.png)

I am constantly reminded each and every time I work with this team just how amazing this group of women is. I’m so thankful for their expertise, and I can’t wait to watch them knock [Datanova 2023](https://www.starburst.io/info/datanova-2023/?utm_source=google&utm_medium=cpc&utm_campaign=NORAM-FY23-Q3-bgdm-Event-Datanova&utm_term=datanova&utm_campaign=NORAM-FY23-Q3-bgdm-Event-Datanova&utm_source=adwords&utm_medium=ppc&hsa_acc=5176009545&hsa_cam=18790503826&hsa_grp=143062878917&hsa_ad=632213590067&hsa_src=g&hsa_tgt=kwd-484292352438&hsa_kw=datanova&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiA99ybBhD9ARIsALvZavWvpSKALmETwMK3lcsZ6rAwMtUcWpkAf4e7EOCdUhBmSFWJKKVNb1caAhGlEALw_wcB) out of the park!

### Register Now for Datanova

[Register Now](https://www.starburst.io/info/datanova-2023/)
