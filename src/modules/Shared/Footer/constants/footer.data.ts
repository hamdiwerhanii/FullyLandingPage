import { SITE } from "@/shared/constants/site";
import type { FooterNavColumn } from "../types/footer.types";

export const FOOTER_TAGLINE =
  "Developer tools for building immersive VR experiences across every device.";

export const FOOTER_NAV_COLUMNS: FooterNavColumn[] = [
  {
    heading: "Platform",
    links: [
      { label: "Features", href: "#features" },
      { label: "Workflow", href: "#workflow" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Getting started", href: "#get-started" },
      { label: "FAQ", href: "#faq" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    heading: "Community",
    links: [
      {
        label: "GitHub",
        href: SITE.repoUrl,
        isExternal: true,
      },
    ],
  },
];
