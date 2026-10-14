import Reveal from "@/shared/components/Reveal";
import Section from "@/shared/components/Section";
import SectionHeading from "@/shared/components/SectionHeading";
import { REVEAL_STAGGER_MS } from "@/shared/constants/animation";
import FeatureCard from "./FeatureCard";
import { FEATURES } from "../constants/features.data";

const SECTION_ID = "features";
const COLUMNS = 3;

export default function FeaturesSection() {
  return (
    <Section id={SECTION_ID} containerClassName="border-b border-neutral-800 pb-20">
      <Reveal>
        <SectionHeading
          sectionId={SECTION_ID}
          badge="Features"
          title="Easily build"
          highlight="your code"
        />
      </Reveal>

      <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {FEATURES.map((feature, i) => (
          <li key={feature.id}>
            <Reveal delayMs={(i % COLUMNS) * REVEAL_STAGGER_MS}>
              <FeatureCard feature={feature} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
