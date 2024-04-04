export interface talk {
  image: ImageMetadata; // an imported image
  title: string;
  event: string;
  date: string;
  description: string;
  link: string;
  slides: string;
}

import Virginia from "@images/girl1.jpg";
import Victra from "@images/girl2.jpg";
import Darrow from "@images/guy1.jpg";

export const talkData: talk[] = [
  {
    image: Darrow, // TODO
    title: "What I Wish I Knew",
    event: "UTD College Loop Chapter of Girls Who Code",
    description: `A talk about the things I wish I knew when I started my career in tech.`,
    link: "https://www.linkedin.com/posts/monimiller_dataengineer-career-software-activity-6981075187215597569-Md-u?utm_source=share&utm_medium=member_desktop",
  },
  {
    image: Virginia,
    title: "Upgrading from the modern data stack to the modern data lake",
    event: "AWS re:Invent 2023",
    // TODO description:
    link: "https://youtu.be/bvmfjXaU4Kc",
  },
  {
    image: Victra,
    title: "Exploring Data Lakehouses",
    // TODO description:
    link: "https://youtu.be/r7KdcXS_27I",
  },
  {
    // FIXME image: "https://embed-ssl.wistia.com/deliveries/20506495c9ef90114d24554626dfa12acc7670a0.jpg",
    image: Victra,
    title: "An introduction to data contracts",
    description: `
As organizations grow, Data Producers and Data Consumers lose touch and critical disconnections within the organization start to arise. Data Producers should not be held responsible for support they never agreed to, yet Data Consumers cannot be expected to own data from source systems they didn’t build. Consumers should have the power to define the schema they need instead of being forced to adapt to low-quality data. The answer? Data Contracts. Learn from Chad Sanderson, Chief Operator of Data Quality Camp, how data contracts can drive a cultural change toward data-centric collaboration resulting in well-modeled, high-quality, and trusted data.`,
    link: "https://www.starburst.io/datanova-2023/on-demand/?wvideo=m2wnkos268",
  },
  // TODO Any other DataNova 2023 content? https://www.starburst.io/datanova-2023/on-demand/
  // TODO
  // image: https://media.licdn.com/dms/image/D4D22AQEjguXZHU1WIA/feedshare-shrink_800/0/1681386991821?e=1715212800&v=beta&t=0muLrXYXtl_wV4elZTNZGccbyQjM1ZdFXpa_bqvHi00
  // title: Semantic Layer Summit 2023,
  // https://www.semanticlayersummit.com/?utm_medium=social&utm_source=atscale&utm_campaign=2023summit&utm_content=null&utm_term=linkedin
  // date: 2023-04-26
  // TODO WICT Philly TIO 2023
  // https://www.linkedin.com/feed/update/urn:li:activity:7065024825542467584/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B8VARVf2BS5KPHTzU60kTFg%3D%3D
  // TODO Data Day Texas 2023
  // https://www.linkedin.com/feed/update/urn:li:activity:7088334520784994304/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B8VARVf2BS5KPHTzU60kTFg%3D%3D
  {
    // FIXME image: "https://trino.io/assets/blog/trino-summit-2022/starburst.jpg",
    image: Victra,
    event: "Trino Summit 2022",
    title: "Federating them all on Starburst Galaxy",
    description: `Running and scaling Trino is difficult. Starburst showcases Starburst Galaxy, a SaaS data platform built around the Trino query engine. This demoes running federated queries over Pokémon data scattered across MongoDB and Iceberg tables.`,
    link: "https://www.youtube.com/watch?v=Zfmxwu0m98k",
  },
  {
    // TODO Upload High res original of buckets
    // FIXME image: "https://media.licdn.com/dms/image/C5622AQF9xQAuNdpyPw/feedshare-shrink_800/0/1670093477324?e=1715212800&v=beta&t=WQEbKeAxNlnwsqrWKXSAjZ7O6mCgEA14fcepOYNKJPE"
    image: Victra,
    event: "AWS re:Invent 2022",
    title: "Enhancing your data lake analytics with Starburst Galaxy",
    description: `The world’s most valuable resource is data. Starburst provides a fast data lake query engine that utilizes low-cost data lake storage to provide consumers with easy and stable access to their data in open file formats, resulting in reduced data management costs and shorter time to insights for critical business decisions. Join this talk to learn how to implement a basic reporting structure that can help you operationalize your current data lake and perform various analytics. As an example, see how to group, filter, and aggregate the COVID-19 public data lake to answer proposed business questions. This presentation is brought to you by Starburst Data, an AWS Partner.`,
    // TODO Find YouTube
    link: "https://www.starburst.io/info/starburst-at-aws-reinvent-2022/?utm_source=linkedin&utm_medium=social&utm_campaign=Global-FY23-Q4-Event-AWS-reinvent-promo&utm_content=promo-1",
  },
  {
    // FIXME image: "https://media.licdn.com/dms/image/C5622AQEJd-2b5yGFlA/feedshare-shrink_800/0/1665608484286?e=1715212800&v=beta&t=mzB2UxJtwvH7gRyCsJTtsjpgdBcwKepjAapd3fpMakA"
    //https://www.linkedin.com/feed/update/urn:li:activity:6986068330667282432/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BwHwvsR%2FXTE67XzzJiGhkrg%3D%3D
    image: Victra,
    event: "DevOpsDays Houston 2023",
    title: "Trino: The Data Synthesizer",
    // TODO Find YouTube
    link: "https://www.linkedin.com/posts/monimiller_trino-dataanalytics-data-activity-6983129625778413568-eXqL?utm_source=share&utm_medium=member_desktop",
  },
  {
    // TODO Upload High Res original
    // FIXME image: https://media.licdn.com/dms/image/C4E22AQEWM7NimfR9mg/feedshare-shrink_800/0/1661453774578?e=1715212800&v=beta&t=7ZN4VdP2-HYp1MDU9Cs7sTnNvw2HPizHDSszo50xl98
    image: Victra,
    event: "DevOpsDays Dallas 2023",
    title: "Trino: The Data Synthesizer",
    // TODO Make sure this sounds good
    description: `Data is arguably the most valuable asset that organizations have, but it's not easy to get it into the hands of end-users`,
    // TODO Find Recording
    link: "https://www.linkedin.com/posts/monimiller_devops-devopsdays-devopsdaysdfw-activity-6968640244845797376-dMSt?utm_source=share&utm_medium=member_desktop",
  },
  // Webinars
  {
    image: Victra,
    title: "Starburst Lakehouse 101",
    description: "Chatted with Tom about Data Lakehouse 101",
    link: "https://www.starburst.io/resources/starburst-lakehouse-101/",
  },
  {
    image: Victra,
    title: "AWS Dev Day: Data Lake Analytics",
    description: `In this hands-on lab, we guide you through the formation of data lake analytics using Amazon Simple Storage Service (Amazon S3) and Starburst Galaxy, with Covid-19 data as our sample set.`,
    link: "https://www.starburst.io/info/aws-devday-data-lake-analytics-lab/?utm_campaign=galaxy&utm_medium=social&utm_source=linkedin&utm_type=&utm_content=galaxylabpromo1li&utm_term=",
  },

  // Videos
  {
    image: Victra,
    title: "Starburst Galaxy Introduction to Autoscaling",
    // TODO description:
    link: "https://youtu.be/_cnfW-VmcmQ",
  },
  {
    image: Victra,
    title: "Starburst Galaxy Role Based Access Control RBAC Overview",
    // TODO description:
    link: "https://youtu.be/Ca6hdmm1xxE",
  },
  {
    image: Victra,
    title: "Creating Batch and Interactive Clusters with Starburst Galaxy",
    // TODO description:
    link: "https://youtu.be/btm0Gah-AMc",
  },
  {
    image: Victra,
    title: "Querying Batch and Interactive Clusters with Starburst Galaxy",
    // TODO description:
    link: "https://youtu.be/E7axCw579dg",
  },
  {
    image: Victra,
    title: "Data products and security: A Guide to access control",
    // TODO description:
    link: "https://youtu.be/3yS8E4RdM5s",
  },
  {
    image: Victra,
    title: "Configuring your AWS cross account IAM role for Starburst Galaxy",
    // TODO description:
    link: "https://youtu.be/rnGDBKNFnC8",
  },
  {
    image: Victra,
    title: "Exploring data lakehouses | Starburst Academy",
    description: `Dive into the world of data lakehouses with our latest video! Join us for a short breakdown of how data lakehouses revolutionize data management by combining the best features of data lakes and data warehouses. Discover how this innovative approach offers a modern solution to your data needs, providing the flexibility of data lakes with the structured querying capabilities of data warehouses.`,
    link: "https://www.youtube.com/watch?v=r7KdcXS_27I",
  },
  {
    image: Victra,
    title: "Starburst Galaxy Getting Started",
    description: `Take a tour of Starburst Galaxy. See how Starburst Galaxy simplifies the catalog configuration process and cluster creation. Get an overview of admin functionality such as account creation, permission levels, usage and billing, audit logs, and query history.`,
    link: "https://www.youtube.com/watch?v=udGrjfalCZA",
  },
  // Promos
  {
    image: Victra,
    title: "Cross-cloud Analytics in Starburst Galaxy | Launch Week 2023",
    description:
      "Spending cycles building single-use ETL pipelines just to migrate a copy of data from one cloud to another? That all stops today with the introduction of cross-cloud analytics in Starburst Galaxy.",
    link: "https://www.youtube.com/watch?v=ec-KxooQjZg",
  },
  {
    image: Victra,
    title: "Announcing Gravity in Starburst Galaxy | Launch Week 2023",
    description:
      "Introducing Gravity in Starburst Galaxy! Gravity is a unified access and governance layer that lets you manage all your data.",
    link: "https://www.youtube.com/watch?v=gejzbMQ3cN8",
  },

  {
    image: Victra,
    title: "Row filters and column masks in Starburst Galaxy",
    description:
      "So, we have an early surprise for you all... Ahead of Launch Week, we are announcing row filters and column masks! Subscribe to our channel for all the exciting announcements next week.",
    link: "https://www.youtube.com/watch?v=uqz6Ed9_tps",
  },
  {
    // FIXME image: "https://embed-ssl.wistia.com/deliveries/c02f1eb965ef95f69d42c352799e37f606501376.jpg"
    image: Victra,
    title: "Datanova 2023: data rebels, may the force be with you",
    // FIXME Link to blog not video
    link: "https://www.starburst.io/blog/datanova-2023-data-rebels-may-the-force-be-with-you/?video=as7yktgqun",
  },
  {
    // source: https://www.linkedin.com/feed/update/urn:li:activity:6955522185532739585?utm_source=share&utm_medium=member_desktop
    image: Victra,
    title: "Space Quest League Challenge 2",
    // TODO Find original video
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6957716426270859265?utm_source=share&utm_medium=member_desktop",
  },
  // TODO Data product infomercial
  // https://www.linkedin.com/feed/update/urn:li:activity:7024766547420147712/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B8VARVf2BS5KPHTzU60kTFg%3D%3D
  // TODO Data Contracts Mean girls
  // https://www.linkedin.com/feed/update/urn:li:activity:7023714337089310720/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B8VARVf2BS5KPHTzU60kTFg%3D%3D
  // TODO DataNova DataMesh
  // https://www.linkedin.com/feed/update/urn:li:activity:7021507942952685568/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B8VARVf2BS5KPHTzU60kTFg%3D%3D
  // TODO DataNova witch
  // https://www.linkedin.com/company/starburstdata/?miniCompanyUrn=urn%3Ali%3Afsd_company%3A27159855
  // TODO Data Rebel Awards
  // https://www.linkedin.com/company/starburstdata/?miniCompanyUrn=urn%3Ali%3Afsd_company%3A27159855&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B8VARVf2BS5KPHTzU60kTFg%3D%3D
  // Podcasts
  // {
  //   image: Victra,
  //   title: "37: Trino powers up the community support",
  //   event: "Trino Community",
  //   description:
  //     "In this episode we have the pleasure to chat with our colleagues, who now make the Trino community better every day",
  //   link: "https://trino.io/episodes/37.html",
  // },
  // Meetups
  {
    image: Victra,
    title: "Trino on Ice - Austin",
    link: "https://www.meetup.com/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Ftrino-americas%2Fevents%2F296038059%2F",
  },
  {
    image: Victra,
    title: "Trino on Ice - Boston",
    link: "https://media.licdn.com/dms/image/sync/D4E27AQHxGpHW7FrMfg/articleshare-shrink_1280_800/0/1712142082193?e=1712872800&v=beta&t=H6JAiSX4oz49vi8Q53LNDny-uKXvqNWVcLf7FAoa8eM",
  },
  {
    image: Victra,
    title: "Starburst 101 Workshop | San Francisco",
    link: "https://www.starburst.io/info/starburst-101-workshop-on-the-road-san-fran",
    date: "2023-06-13",
  },
  // TODO Trino Live NYC
  // https://media.licdn.com/dms/image/D5622AQHZmURjnHsGIw/feedshare-shrink_800/0/1686929499889?e=1715212800&v=beta&t=CzfW54f8uNVhcjt-pt-Nvs-fu4_r-QK7R8Y7-0nvtTc

  // TODO dbt Breakfast Beignet
  // https://www.linkedin.com/company/starburstdata/?miniCompanyUrn=urn%3Ali%3Afsd_company%3A27159855&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3B8VARVf2BS5KPHTzU60kTFg%3D%3D
];

export default talkData;
