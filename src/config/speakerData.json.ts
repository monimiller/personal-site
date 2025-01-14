export interface SpeakerItem {
  question: string; // this is the question of the accordion
  answer: string; // these are the details seen after expanding the accordion
}

// replace this data with whatever you want in your FAQ section
export const speakerData: SpeakerItem[] = [
  {
    question: "Short Bio",
    answer: `Monica is a former data engineer and developer advocate turned product manager, who now focuses her time working alongside the Trino community. As a data engineer, she spent her time primarily developing and supporting data pipelines for both near-real time analytics and batch processing. As a developer advocate, she spent her time speaking at conferences, writing about her experiences in the data space, and creating informational resources.`
  },
  {
    question: "Headshot",
    answer: `<a href="/images/headshot.png">Download photo</a>`,
  },
  {
    question: "Links",
    answer: `Full URLs below for easier copy-pasting:
    <br>
    Website: <a href="https://monimiller.com">https://monimiller.com</a>
    <br>
    LinkedIn: <a href="https://www.linkedin.com/in/monimiller/">https://www.linkedin.com/in/monimiller/</a>
    <br>
    Mastodon: <a href="https://data-folks.masto.host/@monimiller">https://data-folks.masto.host/@monimiller</a>
    <br>
    GitHub: <a href="https://github.com/monimiller">https://github.com/monimiller</a>
    `,
  },
];

export default speakerData;
