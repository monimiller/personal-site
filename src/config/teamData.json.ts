export interface teamMember {
  image: ImageMetadata; // an imported image
  name: string;
  title: string;
  bio: string;
}

import Virginia from "@images/girl1.jpg";
import Victra from "@images/girl2.jpg";
import Darrow from "@images/guy1.jpg";

export const teamData: teamMember[] = [
  {
    image: Darrow,
    name: "Darrow",
    title: "Co-owner",
    bio: `I’m originally from Indiana. I was raised on a farm and became an Eagle Scout in 2008.
      I graduated from Purdue University in 2012 with a degree in Design, and I’ve been working in the
      paint industry ever since. 
      `,
  },
  {
    image: Virginia,
    name: "Virginia",
    title: "Co-owner",
    bio: `I grew up in the suburbs of Chicago. I was a competitive swimmer for 12 years and
      played water polo in college. I graduated from the University of Illinois in 2012.
    `,
  },
  {
    image: Victra,
    name: "Victra",
    title: "Project Estimator",
    bio: `I'm from the south side of Chicago. I graduated from the University of Illinois in 2013.
      I've been working in the paint industry ever since. I’m a huge fan of the outdoors and I love to travel.
      `,
  },
];

export default teamData;
