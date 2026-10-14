import Button from "@/shared/components/Button";
import Reveal from "@/shared/components/Reveal";
import Section from "@/shared/components/Section";
import { CTA_HREF } from "@/shared/constants/nav";
import { sectionTitleId } from "@/shared/utils/sectionTitleId";

const SECTION_ID = "get-started";

export default function GetStartedBanner() {
  return (
    <Section id={SECTION_ID}>
      <Reveal className="rounded-2xl border border-brand-800 bg-linear-to-br from-brand-500/15 to-transparent px-6 py-14 text-center sm:px-12">
        <h2 id={sectionTitleId(SECTION_ID)} className="text-3xl tracking-wide sm:text-5xl">
          Ready to build your first <span className="text-gradient-brand">VR world</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
          Create a free account in under a minute. No credit card required.
        </p>
        <Button asChild variant="primary" size="lg" className="mt-10">
          <a href={CTA_HREF}>Get started for free</a>
        </Button>
      </Reveal>
    </Section>
  );
}
