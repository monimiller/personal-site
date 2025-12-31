---
title: "AWS Dev Day Recap: Data Lake Analytics with Starburst Galaxy"
description: >
  It’s happening! Starburst is excited to act as the lead sponsor for the 2022 Trino Summit.
pubDate: "2022-08-05"
authors: ["monica-miller"]
categories: ["Starburst", "Data Lake", "How-To"]
heroImage: "../../orange-blobs-1.jpg"
draft: true
canonicalUrl: "https://www.starburst.io/blog/aws-dev-day-recap/"
---

On Wednesday, August 3rd, I had the opportunity to share a [hands-on lab](https://github.com/monimiller/data-lake-analytics/blob/main/README.md) exploring [Data Lake](https://www.starburst.io/learn/data-fundamentals/data-lake/) reporting structures with my AWS partner in crime, Antony Thevaraj.  The intent of the tutorial was to demonstrate a feasible method to create data lake reporting structures, while also sharing a tangible example that anyone could test out on their own. Using AWS S3 as the data lake and Starburst Galaxy as the analytics engine, I hope that you will [run the tutorial](https://github.com/monimiller/data-lake-analytics/blob/main/README.md) and experience firsthand the benefits of implementing comprehensive [data lake analytics](https://www.starburst.io/blog/data-lake-analytics-for-smart-modern-data-management/) solutions.

I chose to use a public dataset because transparency is extremely important to me, and I wanted the lab to be reproducible by anyone at any time, without any barriers. I consider myself at least partially a kinesthetic learner, and I personally have only been able to buy into the value of something once I could explore it and then adopt it on my own. Since we are utilizing the [AWS Covid 19 Data Lake](https://aws.amazon.com/covid-19-data-lake/), all you need to try this tutorial out for yourself is a set of AWS credentials ([you can create a free account as well](https://aws.amazon.com/free/?trk=78b916d7-7c94-4cab-98d9-0ce5e648dd5f&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P%7CPS-GO%7CBrand%7CDesktop%7CSU%7CAWS%7CCore%7CUS%7CEN%7CText&s_kwcid=AL!4422!3!432339156165!e!!g!!aws%20free%20account&ef_id=Cj0KCQjw852XBhC6ARIsAJsFPN36FCvb_lq4VDDZDt48gjVLUBfKHHDCudv2AXtnDIzE1sKOFL2PUgwaAuPMEALw_wcB:G:s&s_kwcid=AL!4422!3!432339156165!e!!g!!aws%20free%20account&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)) and a [Starburst Galaxy free trial](https://aws.amazon.com/free/?trk=78b916d7-7c94-4cab-98d9-0ce5e648dd5f&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P%7CPS-GO%7CBrand%7CDesktop%7CSU%7CAWS%7CCore%7CUS%7CEN%7CText&s_kwcid=AL!4422!3!432339156165!e!!g!!aws%20free%20account&ef_id=Cj0KCQjw852XBhC6ARIsAJsFPN36FCvb_lq4VDDZDt48gjVLUBfKHHDCudv2AXtnDIzE1sKOFL2PUgwaAuPMEALw_wcB:G:s&s_kwcid=AL!4422!3!432339156165!e!!g!!aws%20free%20account&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all).

## **Data Lake Analytics**

> “The main challenge with a data lake architecture is that raw data is stored with no oversight of the contents.” – [AWS](https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/)

A data lake is a centralized repository that allows you to store all your structured and unstructured data at scale, as-is. This data can then be used for different types of analytics—from dashboards and visualizations to big data processing, or [near real-time analytics](https://www.starburst.io/blog/near-real-time-ingestion-for-trino/). Interestingly, an [Aberdeen survey](https://s3-ap-southeast-1.amazonaws.com/mktg-apac/Big+Data+Refresh+Q4+Campaign/Aberdeen+Research+-+Angling+for+Insights+in+Today's+Data+Lake.pdf) saw organizations who implemented a Data Lake outperformed similar companies by 9% in organic revenue growth. By incorporating proper reporting structures within your data lake, it is likely your organization will become even more efficient. Utilize the separation of storage and compute and use Starburst Galaxy as the analytics engine to create reporting structures that provide helpful business insight.

## **Tutorial Summary**

The three levels or layers we will create in our reporting structure are:

- **Land layer**: stores unmodified source data at any level of granularity
- **Structure layer:** stores joined, enriched, cleansed data
- **Consume layer**: stores aggregated data that is ready to be queried

![](https://www.starburst.io/wp-content/uploads/2022/08/unnamed-1.png)

For this tutorial, we will explore two different datasets from the Covid-19 data lake. The first dataset revolves around the [Daily Global and US Covid 19 Cases provided by Enigma](https://us-east-2.console.aws.amazon.com/dataexchange/home?region=us-east-2#/products/prodview-t2v5nvogqosyq). We will use this dataset to eventually create tables in the Consume layer that all centralize around United States confirmed cases and Australia confirmed cases by aggregating the data for each province or state. The second dataset shares information on [US Hospital Beds](https://aws.amazon.com/marketplace/pp/prodview-yivxd2owkloha?qid=1585241268884&sr=0-8&ref_=srh_res_product_title), provided by Rearc. With this hospital information, we will be able to create tables in the Consume layer to see the capacity and occupancy of hospital beds for each state. Eventually, we will implement [Role-Based Access Control](https://www.starburst.io/blog/why-granularity-impacts-role-based-access-control/) so that our data analysts will only have access to select from the Consume layer tables.

## **Final Thoughts**

I hope that this tutorial will enable you and inspire you to experiment with some data lake analytics and create a set of reporting structures of your own. This sounds lame, but in all actuality, I really enjoyed getting to perform my own analysis on the Covid-19 data lake as I created this lab. If you have any questions or feedback about the tutorial, please reach out to me on GitHub. I’d love to hear from you if you have any questions, comments, concerns, or brainstorming ideas to make this tutorial even better.
