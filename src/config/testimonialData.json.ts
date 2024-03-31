export interface TestimonialItem {
  avatar: ImageMetadata; // an imported image
  name: string;
  title: string;
  testimonial: string;
}

import girl1 from "@images/girl1.jpg";
import BowTiedFocus from "@images/BowTiedFocus.jpg";
import TravisB from "@images/travis-b.png";

export const testimonialData: TestimonialItem[] = [
  {
    avatar: girl1,
    name: "Caitlin",
    title: "Client",
    testimonial: `It was great experience working with Cosmic Themes. 
      They were very professional and responsive throughout the entire website design process.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    `,
  },
  {
    avatar: BowTiedFocus,
    name: "BowTiedFocus",
    title: "Frontend Engineer",
    testimonial: `The Blogsmith Pro theme is ridiculously well put together and documented.
      I learned a ton about Astro engineering by studying it, and I've already used some of the components
      for my web design clients. 
      `,
  },
  {
    avatar: TravisB,
    name: "Travis B",
    title: "Developer",
    testimonial: `Cosmic themes are for webdevs and marketers who don't want to waste time reinventing the wheel. 
    Their themes have great examples of some of the creative things you can accomplish with Astro. 
      `,
  },
  {
    avatar: girl1,
    name: "Caitlin",
    title: "Client",
    testimonial: `It was great experience working with Cosmic Themes. 
      They were very professional and responsive throughout the entire website design process.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    `,
  },
  {
    avatar: BowTiedFocus,
    name: "BowTiedFocus",
    title: "Frontend Engineer",
    testimonial: `The Blogsmith Pro theme is ridiculously well put together and documented.
      I learned a ton about Astro engineering by studying it, and I've already used some of the components
      for my web design clients.
      `,
  },
  {
    avatar: TravisB,
    name: "Travis B",
    title: "Developer",
    testimonial: `Cosmic themes are for webdevs and marketers who don't want to waste time reinventing the wheel. 
    Their themes have great examples of some of the creative things you can accomplish with Astro. 
      `,
  },
];

export default testimonialData;
