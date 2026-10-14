import { useState } from "react";
import Reveal from "@/shared/components/Reveal";
import Section from "@/shared/components/Section";
import SectionHeading from "@/shared/components/SectionHeading";
import { REVEAL_STAGGER_MS } from "@/shared/constants/animation";
import BillingToggle from "./BillingToggle";
import PricingCard from "./PricingCard";
import { PRICING_PLANS } from "../constants/pricing.data";
import type { BillingCycle } from "../types/pricing.types";

const SECTION_ID = "pricing";

export default function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <Section id={SECTION_ID}>
      <Reveal className="flex flex-col items-center gap-8">
        <SectionHeading sectionId={SECTION_ID} title="Pricing" />
        <BillingToggle value={cycle} onChange={setCycle} />
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRICING_PLANS.map((plan, i) => (
          <li key={plan.id}>
            <Reveal delayMs={i * REVEAL_STAGGER_MS} className="h-full">
              <PricingCard plan={plan} cycle={cycle} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
