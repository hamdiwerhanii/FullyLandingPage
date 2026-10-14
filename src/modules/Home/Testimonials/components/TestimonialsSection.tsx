import Reveal from "@/shared/components/Reveal";
import Section from "@/shared/components/Section";
import SectionHeading from "@/shared/components/SectionHeading";
import { REVEAL_STAGGER_MS } from "@/shared/constants/animation";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../constants/testimonials.data";

const SECTION_ID = "testimonials";
const COLUMNS = 3;

export default function TestimonialsSection() {
  return (
    <Section id={SECTION_ID}>
      <Reveal>
        <SectionHeading sectionId={SECTION_ID} title="What people are saying" />
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, i) => (
          <li key={testimonial.id}>
            <Reveal delayMs={(i % COLUMNS) * REVEAL_STAGGER_MS} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
