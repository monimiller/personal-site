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
  name: "Stellar",
  // Your website's title and description (meta fields)
  title:
    "Stellar - a playful small business theme crafted with Astro and Tailwind CSS",
  description:
    "Create a fun website for your small business clients with our beautiful website theme designed using Astro and Tailwind CSS. Perfect for freelancers, developers, startups, and personal use.",
  useViewTransitions: true,
  useAnimations: true,

  // used on contact page and footer
  contact: {
    address1: "1234 Main Street",
    address2: "New York, NY 10001",
    phone: "(123) 456-7890",
    email: "creator@cosmicthemes.com",
  },

  // Your information for blog post purposes
  author: {
    name: "Cosmic Themes",
    email: "creator@cosmicthemes.com",
    twitter: "Cosmic_Themes",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/cosmic-themes-logo.jpg",
    alt: "Stellar logo",
  },
};

export default siteData;
