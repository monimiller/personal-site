---
title: 'ETL for Everyone!'
description: Addressing the basic data movement concepts.
pubDate: '2022-04-10'
categories: ['data', 'ETL', 'data warehousing']
draft: false
# heroImage: ['/public/static/images/Phoebe.jpg']
---

I used to teach a DataStage class at USAA for new hires, and I was always _stunned_ at the amazing minds that earned spectacular degrees and had little background knowledge about data movement concepts. To their credit, I had the same experience. Personally, I did not hear about ETL in the traditional classroom sense until my master's class in **Business Data Warehousing** and I have lots of feelings as to why modern day curriculum of all types will never stay in sync with actual job market experience. Nevertheless, I'd love to focus on my experience with ETL and what the data movement architecture looks like in theory. Hopefully, this information can help achieve a basic understanding without paying $3,000 for a college course credit.

### Consider a Beautiful Birthday Cake

I am a sucker for Italian Cream Cake. My mother-in-law and grandmother-in-law share the title for **Best Elite Birthday Cake Makers** based on their ability to create a final product of sweet sweet goodness that rivals even the best chefs on _British Bake Off_. What they do involves magic, but we can relate that dessert to the magical final product of an accurate data output.

#### Extract

To create the cake, the raw ingredients are extracted from the sources. Flour, sugar, eggs, and the rest of the ingredients are all extracted from their original packaging, measured out, and then added to the mixing bowl. We can think about each ingredient as the raw data from our varying sources, while the measured amount is synonymous with a 'WHERE' condition to properly extract the accurate information. So let's say we need 3 cups of flour. We extract the flour from the source container where the amount of flour measured out equals 3 cups.

#### Transform

Once all the raw ingredients have been extracted from their original source, this is where the fun happens - and where the majority of the effort is required. The wet ingredients are mixed together, the dry ingredients are mixed together, and then depending on your upbringing the dry ingredients are added to the wet ingredients or vice versa. The raw ingredients are transformed to get the result that is intended for loading. For our purposes, that is a cake batter mix of greatness.

#### Load

After all the preparation has been completed, the cake is ready to be loaded into its intended target - the oven. (We are ignoring that the final intended target is actually my stomach and just sticking with the last step needed to bake the cake). The most important point regarding the load portion is that the cake batter (data) has already been completely transformed, and a straight load is performed to target of choice. Just like a cake, there is no room for alteration after it comes out of the oven, you get what you get. So, if there is a misstep in the transformation stage, like using sugar instead of salt, the final outcome will not act as intended and have major repercussions.

#### ETL Summary

So, what's the point? The goal of the ETL process is to make information out of unorganized data by adding the right context. Sometimes that requires adding together additional information from multiple sources, or filtering specific data for a particular unanswered question.

- **Extract:** _gather source data, also referred to as raw data_
- **Transform:** _edit the source data to match the desired required output, usually driven by the business requirements_
- **Load:** _load the created information into the intended target_

### Data Warehousing

Many businesses have multiple inputs of different kinds as their source systems. The theory behind the modern data architecture structure is to combine all these source systems into a _Data Warehouse_ in order to have a single source of truth to use for reporting. In order to get the data from the source and into the Data Warehouse, we use ...you guessed it...ETL.

Here we see a basic example of ETL assisting with Data Warehouse implementation.

![DW Image](/static/images/DW_Image.png) [^1].
[^1]: Original image source can be found [here](https://www.educba.com/data-warehouse-implementation/).

So what happens when these sources come in different formats and are all trying to be loaded to the same target? For example, let's talk about customer data. Let's say each part of the enterprise stores information with a unique identifier of the customer's name and birthdate. Each department keeps the same data in a varying format from the other.

| Department | Birthdate        |
| ---------- | ---------------- |
| Sales      | 2/4/1992         |
| Marketing  | February 4, 1992 |
| HR         | 92/04/02         |
| Legal      | 02/04/92         |

Which do we pick? This is not an instance where our favorite one prevails - the data warehouse format of **birthdate** acts as the one to replicate. In order to properly load the data to the target, any non-matching data must be updated to the equivalent format during the transformation stage. **Each source must have its own ETL pipeline to perform all the necessary transformations required to match the target format specific to the source system input.**

If you've sniffed out a problem with this method, you are right - there are many challenges plaguing modern Data Warehouse Architecture, especially since _the amount of effort required to build and maintain these source specific pipelines is extraordinary._

<p align="center">![DW Image 2](/static/images/DW_2.png) [^2]</p>
[^2]: Original image source can be found [here](https://memegenerator.net/instance/63881504/trying-to-make-fetch-happen-stop-trying-to-make-the-data-warehouse-happen-its-not-going-to-happen).

But my dear friends, I would never leave you hanging. There is a way to view and query all the necessary information while leaving the source data where it is. Next week we will chat about Trino, Starburst Data, and the amazing new product that is changing the game in the data analytics space.

### Spotlight of the Week!

This week, check out my blog post about the non-profit celebrating their 10 year anniversary this year: [Girls Who Code](../SOTW/Girls_Who_Code)
