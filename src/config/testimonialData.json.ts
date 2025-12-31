export interface TestimonialItem {
  avatar: ImageMetadata; // an imported image
  name: string;
  title: string;
  testimonial: string;
}

// TODO: Replace with real testimonials from conference attendees, workshop participants, or colleagues
// Import real images when adding testimonials, e.g.:
// import personImage from "@images/person.jpg";

export const testimonialData: TestimonialItem[] = [
  // Placeholder testimonials - replace with real ones
  // {
  //   avatar: realPersonImage,
  //   name: "Conference Attendee",
  //   title: "Data Engineer",
  //   testimonial: `Real testimonial about Monica's talk or workshop.`,
  // },
];

export default testimonialData;
