import { CircleCheck } from "lucide-react";
import type { WorkflowStep } from "../types/workflow.types";

type WorkflowStepItemProps = {
  step: WorkflowStep;
};

export default function WorkflowStepItem({ step }: WorkflowStepItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900">
        <CircleCheck aria-hidden className="text-green-500" />
      </div>
      <div className="mt-2">
        <h3 className="text-xl">{step.title}</h3>
        <p className="py-2 text-lg text-neutral-400">{step.description}</p>
      </div>
    </div>
  );
}
