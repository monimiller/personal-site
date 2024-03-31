//  title 	permalink 	description 	layout 	youtube
// Speaking

// /speaking/index.html

// Talks

// page

// true

// "What I Wish I Knew" - UTD College Loop Chapter of Girls Who Code

// Chatted with Tom about Data Lakehouse 101

// {% youtube 'bvmfjXaU4Kc', 'AWS re:Invent 2023 - Upgrading from the modern data stack to the modern data lake' %}
// Videos

// {% youtube 'r7KdcXS_27I', 'Exploring Data lakehouses' %}

// Starburst Galaxy Introduction to Autoscaling {% youtube '_cnfW-VmcmQ', 'Starburst Galaxy Introduction to Autoscaling' %}

// Starburst Galaxy Role Based Access Control RBAC Overview

// {% youtube 'Ca6hdmm1xxE', 'Starburst Galaxy Role Based Access Control RBAC Overview' %}

// {% youtube 'btm0Gah-AMc', 'Creating Batch and Interactive Clusters with Starburst Galaxy' %}

// {% youtube 'E7axCw579dg', 'Querying Batch and Interactive Clusters with Starburst Galaxy' %}

// {% youtube '3yS8E4RdM5s', 'Data products and security: A Guide to access control' %}

// {% youtube 'rnGDBKNFnC8', 'Configuring your AWS cross account IAM role for Starburst Galaxy' %}
// Podcasts

//     37: Trino powers up the community support

export interface talk {
  image: ImageMetadata; // an imported image
  title: string;
  event: string;
  date: string;
  description: string;
  link: string;
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
    // TODO desction:
    link: "bvmfjXaU4Kc",
  },
  {
    image: Victra,
    title: "Exploring Data Lakehouses",
    bio: `I'm from the south side of Chicago. I graduated from the University of Illinois in 2013.
      I've been working in the paint industry ever since. I’m a huge fan of the outdoors and I love to travel.
      `,
    link: "r7KdcXS_27I",
  },
];

export default talkData;
