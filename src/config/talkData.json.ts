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
    link: null,
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
  // Webinars
  {
    image: Victra,
    title: "Starburst Lakehouse 101",
    description: "Chatted with Tom about Data Lakehouse 101",
    link: "https://www.starburst.io/resources/starburst-lakehouse-101/",
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
  // Podcasts
  // {
  //   image: Victra,
  //   title: "37: Trino powers up the community support",
  //   event: "Trino Community",
  //   description:
  //     "In this episode we have the pleasure to chat with our colleagues, who now make the Trino community better every day",
  //   link: "https://trino.io/episodes/37.html",
  // },
];

export default talkData;
