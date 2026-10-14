import { useState } from "react";
import Reveal from "@/shared/components/Reveal";
import Section from "@/shared/components/Section";
import SectionHeading from "@/shared/components/SectionHeading";
import FAQItem from "./FAQItem";
import { FAQ_ENTRIES } from "../constants/faq.data";

const SECTION_ID = "faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Section id={SECTION_ID} containerClassName="max-w-3xl">
      <Reveal>
        <SectionHeading
          sectionId={SECTION_ID}
          badge="FAQ"
          title="Questions,"
          highlight="answered"
        />
      </Reveal>

      <div className="mt-10 border-b border-neutral-800">
        {FAQ_ENTRIES.map((entry) => (
          <FAQItem
            key={entry.id}
            entry={entry}
            isOpen={openId === entry.id}
            onToggle={() => handleToggle(entry.id)}
          />
        ))}
      </div>
    </Section>
  );
}
