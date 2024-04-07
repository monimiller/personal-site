export interface SiteDataProps {
  name: String;
  title: string;
  description: string;
  useViewTransitions?: boolean;
  useAnimations?: boolean;
  contact: {
    // used for contact page and footer
    address1: string; // contact address (line 1)
    address2: string; // contact address (line 2)
    phone: string; // contact phone number
    email: string; // contact email address
  };
  author: {
    // used for blog post purposes
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
  // TODO Add a description
  description:
    "Create a fun website for your small business clients with our beautiful website theme designed using Astro and Tailwind CSS. Perfect for freelancers, developers, startups, and personal use.",
  useViewTransitions: true,
  useAnimations: true,

  // used on contact page and footer
  contact: {
    address1: "1234 Main Street",
    address2: "New York, NY 10001",
    phone: "(123) 456-7890",
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
    // TODO
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Phoebe logo",
  },
};

export default siteData;
