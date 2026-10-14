import type { WorkflowStep } from "../types/workflow.types";

export const WORKFLOW_IMAGE = {
  src: "/images/workflow/code.jpg",
  alt: "Code editor showing a VR project's source files",
  width: 1641,
  height: 1641,
} as const;

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "merge",
    title: "Code merge made easy",
    description:
      "Merge scene and script changes from your whole team automatically, with conflicts flagged before they reach the main build.",
  },
  {
    id: "review",
    title: "Review code without worry",
    description:
      "Visual diffs show exactly what changed in every scene, so you can approve updates with confidence.",
  },
  {
    id: "ai-assistance",
    title: "AI assistance to reduce time",
    description:
      "Generate boilerplate interactions, optimize heavy assets and get fix suggestions without leaving the editor.",
  },
  {
    id: "share",
    title: "Share work in minutes",
    description:
      "Publish a preview link that anyone can open on desktop, mobile or headset, with nothing to install.",
  },
];
