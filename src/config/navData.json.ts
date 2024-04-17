// utils
import { getAllPosts, countItems, sortByValue } from "@js/blogUtils";
import { humanize } from "@js/textUtils";

// get the categories used in blog posts, to put into navbar
const posts = await getAllPosts();
const allCategories = posts.map((post) => post.data.categories).flat();
const countedCategories = countItems(allCategories);
const processedCategories = sortByValue(countedCategories);

export interface navLinkItem {
  text: string;
  link: string;
  newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
  text: string;
  dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  {
    text: "Speaking",
    link: "/speaking/",
    // TODO
    // dropdown: [
    //   {
    //     text: "Exterior Painting",
    //     link: "/services/exterior-painting/",
    //   },
    //   {
    //     text: "Interior Painting",
    //     link: "/services/interior-painting/",
    //   },
    //   {
    //     text: "Deck and Fence",
    //     link: "/services/deck-and-fence-staining/",
    //   },
    // ],
  },
  {
    text: "About me",
    link: "/about/",
  },
];

export default navConfig;
