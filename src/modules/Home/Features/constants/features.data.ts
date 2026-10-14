import {
  ChartNoAxesCombined,
  Eye,
  LayoutTemplate,
  MonitorSmartphone,
  MousePointerClick,
  Users,
} from "lucide-react";
import type { Feature } from "../types/features.types";

export const FEATURES: Feature[] = [
  {
    id: "drag-and-drop",
    icon: MousePointerClick,
    title: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    id: "multi-platform",
    icon: MonitorSmartphone,
    title: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    id: "templates",
    icon: LayoutTemplate,
    title: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    id: "real-time-preview",
    icon: Eye,
    title: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    id: "collaboration",
    icon: Users,
    title: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    id: "analytics",
    icon: ChartNoAxesCombined,
    title: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];
