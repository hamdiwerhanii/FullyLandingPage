import Reveal from "@/shared/components/Reveal";
import Section from "@/shared/components/Section";
import SectionHeading from "@/shared/components/SectionHeading";
import { REVEAL_STAGGER_MS } from "@/shared/constants/animation";
import WorkflowStepItem from "./WorkflowStepItem";
import { WORKFLOW_IMAGE, WORKFLOW_STEPS } from "../constants/workflow.data";

const SECTION_ID = "workflow";

export default function WorkflowSection() {
  return (
    <Section id={SECTION_ID}>
      <Reveal>
        <SectionHeading
          sectionId={SECTION_ID}
          title="Accelerate your"
          highlight="coding workflow"
        />
      </Reveal>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <img
            src={WORKFLOW_IMAGE.src}
            alt={WORKFLOW_IMAGE.alt}
            width={WORKFLOW_IMAGE.width}
            height={WORKFLOW_IMAGE.height}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-lg"
          />
        </Reveal>

        <ol className="flex flex-col gap-8 lg:gap-12">
          {WORKFLOW_STEPS.map((step, i) => (
            <li key={step.id}>
              <Reveal delayMs={i * REVEAL_STAGGER_MS}>
                <WorkflowStepItem step={step} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
