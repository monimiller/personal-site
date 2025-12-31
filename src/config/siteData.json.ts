export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean;
  useAnimations?: boolean;
  contact: {
    email: string;
  };
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Monica Miller",
  // Your website's title and description (meta fields)
  title: "Monica Miller - Data Girl in a Data World",
  description:
    "Monica Miller is a Product Manager at Starburst, Trino community contributor, and former data engineer. She speaks about Data Lakehouses, Trino, and modern data engineering.",
  useViewTransitions: true,
  useAnimations: true,

  contact: {
    email: "hello@monimiller.com",
  },

  // Your information for blog post purposes
  author: {
    name: "Monica Miller",
    email: "hello@monimiller.com",
    twitter: "Moni4489",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/headshot.png",
    alt: "Monica Miller headshot",
  },
};

export default siteData;
