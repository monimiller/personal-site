---
title: dbt-cloud release notes
date: '2022-02-27'
tags: ['dbt', 'release notes', 'DAG', 'data lineage']
draft: true
summary: Sharing one of the COOLEST features dbt cloud has implemented within the IDE.
images: []
---

NOTES::::
dbt Cloud v1.1.44 (February 2nd, 2022)
https://blog.getdbt.com/on-dags-hierarchies-and-ides/#:~:text=With%20the%20DAG%2Din%2Dthe%2DIDE%2C%20analytics%20engineers,is%20normal%20for%20software%20engineers.

dbt Cloud v1.1.33 (August 18, 2021)

dbt Cloud v1.1.37 (October 13, 2021)

can you imagine a relational analytics tool that allows you to build queries sequentially, yet you have abosulteny no way of double checking the queries plug in with each other and nondescript error messages when they dont?

yeah me neither, and thank goodness we don't have to because of the Dat aLIneager!!

https://analyticsengineers.club/whats-a-dag/

Hi Y'all! Today I would like to discuss one of the coolest tools dbt cloud has implemented within their IDE.

## Setting the Scene

Picture the following scenario. \
\
You are new to dbt technology. After a week and a half of late nights with you and your keyboard, you submit your first written workflow for code review on a Friday morning and breath a big sigh of relief as you can be proud of the work you completed and that you have conquered another technology. You then decide, **_since you are now a dbt master_**, to review a peer's code while you wait. Assigning your name to a workflow you assume will be easy to review and allow you to coast into your weekend, you then open up the most complicated and intricate workflow ever developed that contains 8 different models that each reference each other in what could be true code-ception. **THE HORROR**. You can't easily understand the relationships between the models your teammate has devised since some of code that is over 400 lines of join logic, but another model is only used to convert the datatype of one singular column. You start asking yourself questions. Where does this source come from? How did the table get referenced in this model? Why are we converting another datatype after leaving the staging table? Did said teammate _even test_ this logic?!

Are anyone else's palms starting to sweat???

## Some Good News

Everyone, take a big breath because dbt Cloud has

## Release Note Highlights

## Spotlight of the Week!

As a part of this writing journey, every week I hope to amplify one of my favorite things: women making their mark in tech. As we know, _Empowered Women Empower Women_. I am trying to do my part by highlighting women I look up to, organizations I support, and general knowledge that I find interesting that pertains to this topic. This week I want to talk about the community [Elpha](https://elpha.com/). Elpha is a space for women to engage with other women professionally. I personally have used Elpha to browse the many job applications available on the website, read posts that share advice on various workplace scenarios, and gain awareness for opportunities I potentially may have missed had I not signed up for this **AWESOME** resource.

Here is a fantastic [article](https://techcrunch.com/2019/11/06/elpha/) talking about the history of Elpha with the two co-founders, Cadran Cowansage and Kuan Luo. I was introduced to Elpha through the _YC Job Series: Women Eng in Startups_ and I related to Cadran discussing firsthand the varying moments in her career where she had wished for a bigger network to lean on. Cadran creatively solved this problem not only for herself but for all of us as well! I highly encourage signing up, and if you would like to learn more about Elpha, visit their [FAQ](https://elpha.com/faq).

Thanks for reading! Please shoot me an email with questions, comments, or information I didn't know about yet!
\
-Monica
