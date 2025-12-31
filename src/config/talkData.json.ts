export interface talk {
  image: ImageMetadata;
  title: string;
  event?: string;
  date?: string;
  description?: string;
  link: string;
  slides?: string;
}

// Placeholder image until real talk/event images are added
import placeholder from "@images/Phoebe.jpg";

export const talkData: talk[] = [
  // Conference Talks
  {
    image: placeholder,
    title: "What I Wish I Knew",
    event: "UTD College Loop Chapter of Girls Who Code",
    description: "A talk about the things I wish I knew when I started my career in tech.",
    link: "https://www.linkedin.com/posts/monimiller_dataengineer-career-software-activity-6981075187215597569-Md-u",
  },
  {
    image: placeholder,
    title: "Upgrading from the modern data stack to the modern data lake",
    event: "AWS re:Invent 2023",
    link: "https://youtu.be/bvmfjXaU4Kc",
  },
  {
    image: placeholder,
    title: "Exploring Data Lakehouses",
    link: "https://youtu.be/r7KdcXS_27I",
  },
  {
    image: placeholder,
    title: "An introduction to data contracts",
    description: "Data Producers and Data Consumers lose touch as organizations grow. Data Contracts drive cultural change toward data-centric collaboration resulting in well-modeled, high-quality, and trusted data.",
    link: "https://www.starburst.io/datanova-2023/on-demand/?wvideo=m2wnkos268",
  },
  {
    image: placeholder,
    event: "Trino Summit 2022",
    title: "Federating them all on Starburst Galaxy",
    description: "Running and scaling Trino is difficult. Starburst showcases Starburst Galaxy, a SaaS data platform built around the Trino query engine. This demoes running federated queries over Pokémon data scattered across MongoDB and Iceberg tables.",
    link: "https://www.youtube.com/watch?v=Zfmxwu0m98k",
  },
  {
    image: placeholder,
    event: "AWS re:Invent 2022",
    title: "Enhancing your data lake analytics with Starburst Galaxy",
    description: "Learn how to implement a basic reporting structure that can help you operationalize your current data lake and perform various analytics using the COVID-19 public data lake.",
    link: "https://www.starburst.io/info/starburst-at-aws-reinvent-2022/",
  },
  {
    image: placeholder,
    event: "DevOpsDays Houston 2023",
    title: "Trino: The Data Synthesizer",
    link: "https://www.linkedin.com/posts/monimiller_trino-dataanalytics-data-activity-6983129625778413568-eXqL",
  },
  {
    image: placeholder,
    event: "DevOpsDays Dallas 2023",
    title: "Trino: The Data Synthesizer",
    description: "Data is arguably the most valuable asset that organizations have, but it's not easy to get it into the hands of end-users.",
    link: "https://www.linkedin.com/posts/monimiller_devops-devopsdays-devopsdaysdfw-activity-6968640244845797376-dMSt",
  },

  // Webinars
  {
    image: placeholder,
    title: "Starburst Lakehouse 101",
    description: "Chatted with Tom about Data Lakehouse 101",
    link: "https://www.starburst.io/resources/starburst-lakehouse-101/",
  },
  {
    image: placeholder,
    title: "AWS Dev Day: Data Lake Analytics",
    description: "Hands-on lab guiding you through data lake analytics using Amazon S3 and Starburst Galaxy, with Covid-19 data as our sample set.",
    link: "https://www.starburst.io/info/aws-devday-data-lake-analytics-lab/",
  },

  // Educational Videos
  {
    image: placeholder,
    title: "Starburst Galaxy Introduction to Autoscaling",
    link: "https://youtu.be/_cnfW-VmcmQ",
  },
  {
    image: placeholder,
    title: "Starburst Galaxy Role Based Access Control RBAC Overview",
    link: "https://youtu.be/Ca6hdmm1xxE",
  },
  {
    image: placeholder,
    title: "Creating Batch and Interactive Clusters with Starburst Galaxy",
    link: "https://youtu.be/btm0Gah-AMc",
  },
  {
    image: placeholder,
    title: "Querying Batch and Interactive Clusters with Starburst Galaxy",
    link: "https://youtu.be/E7axCw579dg",
  },
  {
    image: placeholder,
    title: "Data products and security: A Guide to access control",
    link: "https://youtu.be/3yS8E4RdM5s",
  },
  {
    image: placeholder,
    title: "Configuring your AWS cross account IAM role for Starburst Galaxy",
    link: "https://youtu.be/rnGDBKNFnC8",
  },
  {
    image: placeholder,
    title: "Exploring data lakehouses | Starburst Academy",
    description: "A short breakdown of how data lakehouses revolutionize data management by combining the best features of data lakes and data warehouses.",
    link: "https://www.youtube.com/watch?v=r7KdcXS_27I",
  },
  {
    image: placeholder,
    title: "Starburst Galaxy Getting Started",
    description: "Tour of Starburst Galaxy covering catalog configuration, cluster creation, and admin functionality.",
    link: "https://www.youtube.com/watch?v=udGrjfalCZA",
  },
  {
    image: placeholder,
    title: "How data products bridge the gap for data consumers",
    description: "Explore how data products revolutionize the way data is accessed and utilized, empowering data consumers to make informed decisions.",
    link: "https://www.youtube.com/watch?v=knI2RY1ewes",
  },

  // Launch Week 2023 Promos
  {
    image: placeholder,
    title: "Cross-cloud Analytics in Starburst Galaxy | Launch Week 2023",
    description: "Introduction of cross-cloud analytics in Starburst Galaxy - no more single-use ETL pipelines to migrate data between clouds.",
    link: "https://www.youtube.com/watch?v=ec-KxooQjZg",
  },
  {
    image: placeholder,
    title: "Announcing Gravity in Starburst Galaxy | Launch Week 2023",
    description: "Introducing Gravity - a unified access and governance layer that lets you manage all your data.",
    link: "https://www.youtube.com/watch?v=gejzbMQ3cN8",
  },
  {
    image: placeholder,
    title: "Row filters and column masks in Starburst Galaxy",
    description: "Early announcement of row filters and column masks ahead of Launch Week.",
    link: "https://www.youtube.com/watch?v=uqz6Ed9_tps",
  },
  {
    image: placeholder,
    title: "Datanova 2023: data rebels, may the force be with you",
    link: "https://www.starburst.io/blog/datanova-2023-data-rebels-may-the-force-be-with-you/?video=as7yktgqun",
  },
  {
    image: placeholder,
    title: "Great Lakes Connectivity in Starburst Galaxy | Launch Week 2023",
    link: "https://www.youtube.com/watch?v=lh0H_kNwXQQ",
  },
  {
    image: placeholder,
    title: "Warp Speed and fault-tolerant execution in Starburst Galaxy",
    link: "https://www.youtube.com/watch?v=NJmaSL10K_I",
  },
  {
    image: placeholder,
    title: "Space Quest League Challenge 2",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6957716426270859265",
  },

  // Podcasts
  {
    image: placeholder,
    title: "37: Trino powers up the community support",
    event: "Trino Community Podcast",
    description: "Chat with colleagues who now make the Trino community better every day.",
    link: "https://trino.io/episodes/37.html",
  },
  {
    image: placeholder,
    title: "The Good Content Will Prevail",
    event: "#DataFemme",
    description: "Championing female representation in the data science world while gearing up for Datanova.",
    link: "https://www.dikayodata.com/datafemme/datanova",
    date: "2024-10-02",
  },

  // Meetups
  {
    image: placeholder,
    title: "Trino on Ice - Austin",
    link: "https://www.meetup.com/trino-americas/events/296038059/",
  },
  {
    image: placeholder,
    title: "Trino on Ice - Boston",
    link: "https://www.meetup.com/trino-americas/",
  },
  {
    image: placeholder,
    title: "Starburst 101 Workshop | San Francisco",
    link: "https://www.starburst.io/info/starburst-101-workshop-on-the-road-san-fran",
    date: "2023-06-13",
  },
];

export default talkData;
