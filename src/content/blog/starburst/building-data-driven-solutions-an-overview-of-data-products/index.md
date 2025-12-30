---
title: "Building data-driven solutions: An overview of data products"
description: "June 13, 2024. Live in Boston. Virtually anywhere."
pubDate: "2023-04-11"
authors: ["monica-miller"] # Vishal
categories: ["Data Products", "Starburst"]
heroImage: "../../orange-blobs-1.jpg"
draft: true
canonicalUrl: "https://www.starburst.io/blog/building-data-driven-solutions-an-overview-of-data-products/"
---

Have you ever had your entire workday derailed by a slack message? You can try to carefully craft a weekly calendar full of “working blocks” or “focus time”, but the second that burning question comes rolling in, your agenda is out the window. [Data engineers](https://www.starburst.io/learn/data-fundamentals/data-engineering/) in particular resonate with this pattern all too well. A business user doesn’t know the transformation logic behind a certain field in their dashboard? Ping. Someone questioning why the retention on this specific table is 30 days, not 45 days? Ping. Or, there’s a governance need to discover which teams are utilizing a specific table. You guessed it…Ping. You are forced to spend the next five hours investigating missing information that honestly should live in a confluence page somewhere. More often than not it’s usually an extremely difficult task to find these answers, which is exactly why you got pinged in the first place, and it may even result in a required code change.  And when it’s all said and done, data producers and data consumers both feel a little more mistrust, a little more frustration, and a little less willing to collaborate.

## **Why is there such a disconnect between data producers and data consumers?**

If you’ve spent time in either role, you can most likely speak firsthand to the tangible misalignment that exists between data producers and data consumers in the current data climate.

**Data consumers** fail to accurately convey their needs to data producers, resulting in changing requests, post-production updates, and a scope creep so vast it becomes a scope avalanche. At the end of feature completion, there’s only a small chance the initial ask was originally communicated properly and the data provided fulfills the original request.

**Data producers** struggle to understand the business value attributed toward new requests and current updates. No priority is given to the most critical business flows resulting in all data pipelines being half-maintained. Because there’s no Return On Investment (ROI) attached, there’s no desire to assign ownership.

It’s difficult to officially quantify the lack of alignment, but this missing collaboration results in various downstream consequences. The data only becomes more untrustworthy the more the data changes hands, especially in larger organizations where the data is passed through a couple of teams before reaching the end destination. You are essentially playing the game telephone, where each entity has some sort of imprint changing the data from its original form, but with target data outputs. The reason for this misalignment stems back to a lack of ownership and accountability in the data space. This disconnect does not derive from the data practitioners themselves but rather this is a consequence of the current data environment we all find ourselves in.  As a data community, we have not had the tools or resources to make this a priority within the current existing architectures, which is just exacerbated by data engineers being forced to react to one emergency fire after another.

While this sounds bleak, the current data climate has recently shifted its focus toward increasing extremely important components of the data journey such as data ownership, data accountability, and [data governance](https://www.starburst.io/learn/data-fundamentals/data-governance/). One of those recent discussion topics has centered around data products, and how data products can be utilized to strengthen accountability and encourage collaboration between data producers and data consumers.

## **Data products are curated datasets packaged to create value for downstream consumers**

_**Curated –** Data products are demand-driven and built for specific needs._

_**Create value –** Data products create value by presenting data in a way that makes them more useful and more accessible._

Data products are an innovative, modern way of creating curated datasets, which can be saved, published, searched for, and consumed across teams to provide business value.  Designed to solve targeted business questions, data products should be easily accessible to both data producers and data consumers alike.

There are three important callouts regarding this definition:

- **Created for a specific purpose**, data products must be requested for a reason. A data product is curated when it is hand selected to solve a desired need. Usually data products are first built in association with the highest ROI generating outputs.
- **Contributing toward data democratization**, data products produce value by being accessible and self-serviceable. Those who need access to the data should easily be able to achieve access.
- **Built for any downstream consumers**, data products do not only add value to the business consumer. Data products can be used by engineers throughout the organization to quickly locate critical information about selective data outputs.

## **Defining qualities of a data product**

While the data may be the main character, you can’t tell any sort of story without all the other elements surrounding it. When we discuss data products, we aren’t exclusively talking about the target output, but instead we are also referring to all the information contributing toward that final data output.

The three components of a data product are:

- **Data:** the backbone of the data product which can take the form of tables, views, or materialized views
- **Metadata**: the table definition associated with the data including (but not limited to) business context, tags, lineage information, statistics, and ownership
- **Access Patterns**: the intended access plan for the user including, who has access to specific data, how that data is accessed, and compute patterns.

There’s an inherent social quality to data products, which is why they can be utilized to increase collaboration. While data products are typically created from one team’s initial request, data products are encouraged to be shared widely across an organization. This helps not only increase collaboration, but it also increases accountability among and within teams. The data utilized now has five different teams looking at it, instead of each team being forced to maintain their own individual copy of the data.

To create effective data products, it’s imperative that each data product acts as an independent entity. You should have all the information you need available to you when interacting with a specific data product. While this does not mean every data product has to have the same components in it, it does mean that the data product provides enough information to add value by allowing others to self-serve.

## **Data product imperatives**

There’s endless possibilities when it comes to constructing your data products in a way that makes sense for your teams. However, it is critical to keep in mind what you are trying to gain by implementing data products: an increased sense of data ownership, data accountability, and data democratization across your organization. When getting started on your data products journey, focusing on these four imperatives will help you align toward these goals.

1. **Demand-driven**. Data products must be designed and built to serve the purpose of a clear need. Building data products for the sake of building data products will result in half-maintained datasets and defeat the entire purpose of curating this high-quality information. Grounding your data products in intent will automatically drive higher collaboration among data producers and data consumers.
2. **Reusable & Scalable**. Each and every data product should be designed to promote easy reuse across multiple use cases to increase data democratization and data accountability. It should be common to incorporate multiple data consumers throughout the design of the data product to achieve this. While you may have products designed for ‘one’ specific use case, they should be the underwhelming majority.
3. **Discoverable & Accessible**. Data products should be organized in a manner that will help teams quickly find and access the information they need, while also having the ability to be shared in order to maximize value. By providing a method for self-service, data products are contributing toward the organizational level strategy of data democratization and data accessibility.
4. **Committed Owner.** To avoid common pitfalls, data products must be properly managed throughout the entire lifecycle. From inception to retirement, you need a formal owner who has been properly trained on their responsibilities.  First, you must have an established and public set of commitments that all owners are expected to follow. Next, the data product should be documented enough that a handoff between ownership does not result in a lack of accountability.

## **Data products at Starburst**

At Starburst, optionality has always been, and will continue to be, one of our core beliefs. We believe you should be able to create a customized data architecture that’s right for you and your organization.  As a piece of a data architecture, data products are no different. You should be able to build your data products in a centralized, decentralized, or hybrid architecture – whatever makes sense for you and your business. Therefore, we’ve created data products with this in mind, allowing you to achieve increased [data democratization](https://www.starburst.io/learn/data-fundamentals/data-democratization/), data ownership, data accountability, and data governance.

[Starburst data products](https://www.starburst.io/platform/features/data-products/) are unique because they allow you to discover, publish, manage, and share data products based on multiple data sources. Instead of being siloed into only creating data products from a specific location, Starburst gives you the power to create and maintain trusted data products for your entire organization, no matter how many data sources you utilize. This enables users to confidently find the right data to solve important business questions regardless of the source.  To learn more about data products at Starburst, [watch Vishal’s Datanova presentation on Day two: Data Products for everyone featuring Glovo](https://www.starburst.io/resources/data-products-for-everyone-featuring-glovo-datanova-2023/).

## **Increasing data ownership**

Tackling the lack of ownership in the data space is no small feat. Not only will it require a new technical approach as you incorporate data products, it will simultaneously also require a culture change. If organizations agree to shift that mindset, within both their architecture and processes, that enables improved data stewardship, iterative feedback, empowered collaboration, and essentially builds trust between data producers and data consumers. We’re confident that increasing data literacy will result in data practitioners on both sides quickly experiencing benefits.
