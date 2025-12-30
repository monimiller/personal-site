export interface SpeakingEvent {
  title: string;
  type: "talk" | "workshop" | "meetup" | "video" | "podcast" | "webinar";
  event?: string;
  location: string;
  date: string;
  description?: string;
  link: string;
}

export const speakingData: SpeakingEvent[] = [
  // Talks - Conference Presentations
  {
    title: "Not Your Father's Data Lakehouse: Building with Trino and Iceberg",
    type: "workshop",
    event: "Data Council Austin",
    location: "Austin, TX",
    date: "2024-03-26",
    description:
      "The data lakehouse architecture has taken the analytics world by storm, applying critical data warehouse-like capabilities to the data lake. To achieve this desired result, you need to select two critical components of your lakehouse - a query engine and a table format. In this workshop, Jack Klamer and Monica Miller will lead you through how you can easily build and manage an open data lakehouse architecture using open-source technologies such as Trino and Apache Iceberg to support your growing analytics.",
    link: "https://www.datacouncil.ai/talks24/not-your-fathers-data-lakehouse-building-with-trino-and-iceberg",
  },
  {
    title: "Upgrading from the modern data stack to the modern data lake",
    type: "talk",
    event: "AWS re:Invent 2023",
    location: "Las Vegas, NV",
    date: "2023-12-01",
    link: "https://youtu.be/bvmfjXaU4Kc",
  },
  {
    title: "Exploring Data Lakehouses",
    type: "talk",
    event: "AWS re:Invent 2023",
    location: "Las Vegas, NV",
    date: "2023-12-01",
    link: "https://youtu.be/r7KdcXS_27I",
  },
  {
    title: "An introduction to data contracts",
    type: "talk",
    event: "Datanova 2023",
    location: "Boston, MA",
    date: "2023-10-01",
    description:
      "As organizations grow, Data Producers and Data Consumers lose touch and critical disconnections within the organization start to arise. Data Producers should not be held responsible for support they never agreed to, yet Data Consumers cannot be expected to own data from source systems they didn't build. Consumers should have the power to define the schema they need instead of being forced to adapt to low-quality data. The answer? Data Contracts.",
    link: "https://www.starburst.io/datanova-2023/on-demand/?wvideo=m2wnkos268",
  },
  {
    title: "Trino: The Data Synthesizer",
    type: "talk",
    event: "DevOpsDays Houston",
    location: "Houston, TX",
    date: "2023-10-01",
    link: "https://www.linkedin.com/posts/monimiller_trino-dataanalytics-data-activity-6983129625778413568-eXqL",
  },
  {
    title: "Enhancing your data lake analytics with Starburst Galaxy",
    type: "talk",
    event: "AWS re:Invent 2022",
    location: "Las Vegas, NV",
    date: "2022-12-01",
    description:
      "The world's most valuable resource is data. Starburst provides a fast data lake query engine that utilizes low-cost data lake storage to provide consumers with easy and stable access to their data in open file formats, resulting in reduced data management costs and shorter time to insights for critical business decisions.",
    link: "https://www.starburst.io/info/starburst-at-aws-reinvent-2022/",
  },
  {
    title: "Federating them all on Starburst Galaxy",
    type: "talk",
    event: "Trino Summit 2022",
    location: "San Francisco, CA",
    date: "2022-11-10",
    description:
      "Running and scaling Trino is difficult. Starburst showcases Starburst Galaxy, a SaaS data platform built around the Trino query engine. This demoes running federated queries over Pokemon data scattered across MongoDB and Iceberg tables.",
    link: "https://www.youtube.com/watch?v=Zfmxwu0m98k",
  },
  {
    title: "What I Wish I Knew",
    type: "talk",
    event: "UTD Girls Who Code",
    location: "Dallas, TX",
    date: "2022-09-01",
    description: "A talk about the things I wish I knew when I started my career in tech.",
    link: "https://www.linkedin.com/posts/monimiller_dataengineer-career-software-activity-6981075187215597569-Md-u",
  },
  {
    title: "Trino: The Data Synthesizer",
    type: "talk",
    event: "DevOpsDays Dallas",
    location: "Dallas, TX",
    date: "2022-08-01",
    description:
      "Data is arguably the most valuable asset that organizations have, but it's not easy to get it into the hands of end-users.",
    link: "https://www.linkedin.com/posts/monimiller_devops-devopsdays-devopsdaysdfw-activity-6968640244845797376-dMSt",
  },

  // Workshops
  {
    title: "Starburst 101 Workshop",
    type: "workshop",
    location: "San Francisco, CA",
    date: "2023-06-13",
    link: "https://www.starburst.io/info/starburst-101-workshop-on-the-road-san-fran",
  },
  {
    title: "AWS Dev Day: Data Lake Analytics",
    type: "workshop",
    location: "Online",
    date: "2023-01-01",
    description:
      "In this hands-on lab, we guide you through the formation of data lake analytics using Amazon Simple Storage Service (Amazon S3) and Starburst Galaxy, with Covid-19 data as our sample set.",
    link: "https://www.starburst.io/info/aws-devday-data-lake-analytics-lab/",
  },

  // Meetups
  {
    title: "Trino on Ice",
    type: "meetup",
    event: "Trino Americas Meetup",
    location: "Austin, TX",
    date: "2023-09-01",
    link: "https://www.meetup.com/trino-americas/events/296038059/",
  },
  {
    title: "Trino on Ice",
    type: "meetup",
    event: "Trino Americas Meetup",
    location: "Boston, MA",
    date: "2024-04-01",
    link: "https://www.meetup.com/trino-americas/",
  },

  // Podcasts
  {
    title: "The Good Content Will Prevail",
    type: "podcast",
    event: "#DataFemme",
    location: "Online",
    date: "2024-10-02",
    description:
      "Starburst's Senior Developer Monica Miller champions female representation in the data science world while gearing up for Datanova, Starburst's premiere data conference on October 23-24!",
    link: "https://www.dikayodata.com/datafemme/datanova",
  },
  {
    title: "37: Trino powers up the community support",
    type: "podcast",
    event: "Trino Community Broadcast",
    location: "Online",
    date: "2022-06-01",
    description:
      "In this episode we have the pleasure to chat with our colleagues, who now make the Trino community better every day.",
    link: "https://trino.io/episodes/37.html",
  },

  // Webinars
  {
    title: "Starburst Lakehouse 101",
    type: "webinar",
    location: "Online",
    date: "2023-01-01",
    description: "Chatted with Tom about Data Lakehouse 101.",
    link: "https://www.starburst.io/resources/starburst-lakehouse-101/",
  },
  {
    title: "Starburst Galaxy Getting Started",
    type: "webinar",
    location: "Online",
    date: "2023-01-01",
    description:
      "Take a tour of Starburst Galaxy. See how Starburst Galaxy simplifies the catalog configuration process and cluster creation. Get an overview of admin functionality such as account creation, permission levels, usage and billing, audit logs, and query history.",
    link: "https://www.youtube.com/watch?v=udGrjfalCZA",
  },
  {
    title: "How data products bridge the gap for data consumers",
    type: "webinar",
    location: "Online",
    date: "2023-06-01",
    description:
      "Unlock the power of data products and bridge the gap between data producers and data consumers with our latest video! Join us as we explore how data products revolutionize the way data is accessed and utilized, empowering data consumers to make informed decisions and drive business outcomes.",
    link: "https://www.youtube.com/watch?v=knI2RY1ewes",
  },

  // Videos - Starburst Galaxy tutorials
  {
    title: "Starburst Galaxy Introduction to Autoscaling",
    type: "video",
    location: "Online",
    date: "2023-01-01",
    link: "https://youtu.be/_cnfW-VmcmQ",
  },
  {
    title: "Starburst Galaxy Role Based Access Control RBAC Overview",
    type: "video",
    location: "Online",
    date: "2023-01-01",
    link: "https://youtu.be/Ca6hdmm1xxE",
  },
  {
    title: "Creating Batch and Interactive Clusters with Starburst Galaxy",
    type: "video",
    location: "Online",
    date: "2023-01-01",
    link: "https://youtu.be/btm0Gah-AMc",
  },
  {
    title: "Querying Batch and Interactive Clusters with Starburst Galaxy",
    type: "video",
    location: "Online",
    date: "2023-01-01",
    link: "https://youtu.be/E7axCw579dg",
  },
  {
    title: "Data products and security: A Guide to access control",
    type: "video",
    location: "Online",
    date: "2023-01-01",
    link: "https://youtu.be/3yS8E4RdM5s",
  },
  {
    title: "Configuring your AWS cross account IAM role for Starburst Galaxy",
    type: "video",
    location: "Online",
    date: "2023-01-01",
    link: "https://youtu.be/rnGDBKNFnC8",
  },
  {
    title: "Exploring data lakehouses | Starburst Academy",
    type: "video",
    location: "Online",
    date: "2023-06-01",
    description:
      "Dive into the world of data lakehouses with our latest video! Join us for a short breakdown of how data lakehouses revolutionize data management by combining the best features of data lakes and data warehouses.",
    link: "https://www.youtube.com/watch?v=r7KdcXS_27I",
  },

  // Videos - Launch Week 2023
  {
    title: "Cross-cloud Analytics in Starburst Galaxy",
    type: "video",
    event: "Launch Week 2023",
    location: "Online",
    date: "2023-09-01",
    description:
      "Spending cycles building single-use ETL pipelines just to migrate a copy of data from one cloud to another? That all stops today with the introduction of cross-cloud analytics in Starburst Galaxy.",
    link: "https://www.youtube.com/watch?v=ec-KxooQjZg",
  },
  {
    title: "Announcing Gravity in Starburst Galaxy",
    type: "video",
    event: "Launch Week 2023",
    location: "Online",
    date: "2023-09-01",
    description:
      "Introducing Gravity in Starburst Galaxy! Gravity is a unified access and governance layer that lets you manage all your data.",
    link: "https://www.youtube.com/watch?v=gejzbMQ3cN8",
  },
  {
    title: "Row filters and column masks in Starburst Galaxy",
    type: "video",
    event: "Launch Week 2023",
    location: "Online",
    date: "2023-09-01",
    description:
      "So, we have an early surprise for you all... Ahead of Launch Week, we are announcing row filters and column masks!",
    link: "https://www.youtube.com/watch?v=uqz6Ed9_tps",
  },
  {
    title: "Great Lakes Connectivity in Starburst Galaxy",
    type: "video",
    event: "Launch Week 2023",
    location: "Online",
    date: "2023-09-01",
    link: "https://www.youtube.com/watch?v=lh0H_kNwXQQ",
  },
  {
    title: "Warp Speed and fault-tolerant execution in Starburst Galaxy",
    type: "video",
    event: "Launch Week 2023",
    location: "Online",
    date: "2023-09-01",
    link: "https://www.youtube.com/watch?v=NJmaSL10K_I",
  },

  // Videos - Other
  {
    title: "Datanova 2023: data rebels, may the force be with you",
    type: "video",
    event: "Datanova 2023",
    location: "Online",
    date: "2023-10-01",
    link: "https://www.starburst.io/blog/datanova-2023-data-rebels-may-the-force-be-with-you/?video=as7yktgqun",
  },
  {
    title: "Space Quest League Challenge 2",
    type: "video",
    location: "Online",
    date: "2022-07-01",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6957716426270859265",
  },
];

// Sort by date descending (most recent first)
speakingData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default speakingData;
