---
title: "FIXME"
description: "IDK WHATs WRONG"
# title: "Let's Get Granular: Why Granularity Impacts Role-Based Access Control"
# description: "About a month into my first job I finished building my first data pipeline ever."
pubDate: "2022-06-14"
authors: ["monica-miller"]
# TODO Data ArchitectData EngineerData Leader/CxOEducationHead of AnalyticsInfoSecsecurity
categories: ["Starburst"]
heroImage: "../../orange-blobs-1.jpg"
draft: true
canonicalUrl: "https://www.starburst.io/blog/why-granularity-impacts-role-based-access-control/"
---

![](https://www.starburst.io/wp-content/uploads/2022/06/kyle-glenn-dGk-qYBk4OA-unsplash-1-scaled.jpg)

About a month into my first job I finished building my first data pipeline ever. I soaked in the “I Made THAT!” moment, and then I started testing said pipeline which resulted in the load job going sideways. In my defense, my job finished successfully and my final table had an expected output so as the naive data engineer I was, I had no forethought to go investigate further. Nevertheless, I ended up truncating a reference table that about 30 other people were using, and then proceeded to write to that table over 500 rows of junk. This was luckily only in the development environment, but that didn’t diminish how mortified I was. The worst part? I wasn’t even the one who found out what I did. I had to be informed of my mistake, and then sheepishly apologize to all the others who had their Tuesday ruined by not being able to work on their own pipelines. Big confidence booster.

![](https://media.giphy.com/media/67urFpVn7qwcd2gWIl/giphy.gif)

I’m sure you’ve either experienced or witnessed some similar scenario that ends up with one individual’s work affecting the entire technical ecosystem. Not only are these stories common, they are so understandable that we all take a collective sigh in solidarity for each new instance that occurs. One of my coworkers even trademarked a catchphrase for these moments of human error, and constantly states that “the problem is between the chair and the keyboard.” These unfortunate mishaps are not only reserved for the newbies or the interns, but are experience agnostic and are likely to occur until the robot uprising eliminates the need for humanity to touch any computers.

The probability of these scenarios directly increases with the number of people accessing the keys of the kingdom. Lock down the kingdom properly, and diminish the likelihood that someone accidentally makes a mistake like mine. How do you do this effectively and still grant people the proper access to do their jobs? The answer is Role-Based Access Control (RBAC). Accidents of epic proportions are only one of the many reasons to properly integrate RBAC into any data source system. RBAC can also enhance security, enable regulatory compliance, and clearly separate the administrator responsibility from the user responsibility.

## The Basics of Role-Based Access Control (RBAC)

So, what is [RBAC](https://www.starburst.io/learn/data-fundamentals/rbac/) really? _It’s a formal method of granting and restricting permissions based on an individual’s role within an organization_. The intent is to establish proper safeguards that prevent information from being available to the masses for consumption, and instead only grant those permissions to the people who need it. These ideas are not original or unfamiliar, as many organizations have some sort of RBAC implemented with their systems. However, the real success or failure of RBAC lies within the execution.

We all intend to follow RBAC properly when we first set up an access group. We make promises. Don’t worry, it’ll be different this time! I’ll keep the group small! The problem is administrators get overwhelmed, and give out access on whims. I know firsthand as I was a previous admin for a specific role who intended to keep a tight ship, but started doing favors for favors and handing out access willy-nilly. Soon, the group of 3 administrators became 12. That’s now 12 points of failure with, quite frankly, people who didn’t understand the system enough to have the access they did, as opposed to gatekeeping the groups to only the individuals who know the systems best. Before you know it, RBAC doesn’t mean anything anymore, and we are Charlie Brown falling for Lucy’s football trick yet again.

![](https://media.giphy.com/media/WQGeXiqfQ1qQE/giphy.gif)

## RBAC Granularity at the Table Level

Real talk. I should have never had access to write to a reference table, let alone truncate it. The failure here was not establishing RBAC granularity at the table level, where I should have only had permission to select from the table as an individual user. If we continue diving into RBAC at a table level granularity, there are two immediate instances to apply to a database to help execute best practices. The key here is to understand which tables a user has access to, and what access they have. I have created an example of each instance using Starburst Galaxy – Starburst’s SaaS offering providing query federation, data lake analytics, batch processing – which now implements RBAC at the table level in order to support best data governance and data compliance practices. Starburst Galaxy is also an administrator’s best friend and makes assigning different privileges to each role so easy a caveman could do it.

### 1\. Data consumers should only be able to select from tables that are pertinent to their role.

The most precious power companies have is their data. And with that great power, comes a great responsibility to properly protect any sort of critical or sensitive data elements like PII, PCI, PHI, etc. Many banks or healthcare organizations are familiar with the regulatory implications of failing to execute on proper data governance principles, and table level RBAC reinforces the proper standards at a level of granularity that is not possible at the schema level.

![](https://www.starburst.io/wp-content/uploads/2022/06/final_1.gif)

While the Marketing department should not outright have access to the HR data in the Enterprise Data Warehouse, there can be an instance where this access is required for one specific table. If your level of granularity only boils down to the schema level, then that employee either creates lots of extra work for someone to copy the data to be viewed privately, or they gain access to all the proprietary employee information in that schema in other tables.

![](https://www.starburst.io/wp-content/uploads/2022/06/final_2.gif)

### 2\. There must be an established barrier to running SQL Action Queries in production-like environments.

I am not advocating that no data engineer should ever have access to perform these activities at all, and I’m also not saying that individuals should only have these capabilities in lower level environments. However, there are very few scenarios where the solution of updating the database manually is the right thing to do. If the cultural norm is to accept manual workarounds for data corrections, then the systems that load the data need to be redesigned. In any case, there should still be additional RBAC table level controls preventing these potential changes around tables that feed Tier-1 reports, dashboards, or other critical business operations in order to extend healthy data governance practices beyond the accepted answer. For instance, an HR engineer, even though they have access to the HR tables, probably shouldn’t have access to change any of the information in the social security dimension table.

![](https://www.starburst.io/wp-content/uploads/2022/06/final_3A.gif)

## Secrets to Granular RBAC implementation

There really is no use to just talking about implementing a granular RBAC strategy without following up with the action. Here are some of the main factors to consider when increasing the granularity of your current RBAC methodology.

![](https://media.giphy.com/media/BpGWitbFZflfSUYuZ9/giphy.gif)

### Establish a Clear Scope for New and Existing Roles

By having a written definition of responsibilities, there should be no ambiguity surrounding the intent or purpose of the role.  Not only does a clearly defined purpose prevent the roles for being misused, it also prevents any accidental duplication of responsibilities. Clearly defining these requirements takes the guesswork out of selecting which nuanced role to pick between as there are three different roles that actually end up performing the same actions.  It is also critical to have this information available, and be transparent about who meets the criteria for each role and who does not.

### Review the Roles for Accuracy

After clearly establishing the intention of each role, there should be a review process that periodically confirms the validity of each role. Especially in early system development, roles and responsibilities can change tenfold before landing on their actual use case. By having an established review cycle, this can ensure that the roles developed are current and match the intent.  It would also be beneficial to look for any gaps in this review process and potentially break up a role into two, or alter the roles to make sense for the need. If you just give out access without properly adhering to an ever changing protocol, you’re outdated.  Having RBAC in place doesn’t matter at all if the proper upkeep isn’t around.

### Set up Safeguards

Just like any other development project, there should be a high bus factor when it comes to executing on RBAC procedures.  By having the responsibility of upholding these granular RBAC standards split between multiple individuals, the perception changes from a security requirement that can potentially be ignored to an integral part of everyday work. This also encourages multiple touchpoints with regulatory compliance and data governance standards which just makes healthy data practices more ingrained within an organization.

## Final Thoughts

Role-Based Access Control at the correct granularity, and in this case at the table level, is like insurance. You invest lots of time into the process in the hopes that you never have to use it, but are forever grateful for the times when you do when it saves you from misfortune. That is why I highly recommend creating a plan to investigate your current data climate and test if the systems are up to snuff against what you expect out of your RBAC security. If the ideal result and the actual result aren’t aligning, then it may be time to invest in tools that help bridge the gap. Try [Starburst Galaxy](https://www.starburst.io/platform/starburst-galaxy/) and get $500 dollars worth of free credits to practice your own granular RBAC practices today.

<p><a href="https://www.starburst.io/blog/why-granularity-impacts-role-based-access-control/?wvideo=sxnb7o51hu"><img src="https://embed-ssl.wistia.com/deliveries/80792ba54bb03f0555bc86fd49e7dcd0d26d68b8.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=000000e0" style="width: 400px; height: 225px;" width="400" height="225"></a></p><p><a href="https://www.starburst.io/blog/why-granularity-impacts-role-based-access-control/?wvideo=sxnb7o51hu">Let's Get Granular: Why Granularity Impacts Role-Based Access Control</a></p>
