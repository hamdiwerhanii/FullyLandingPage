import type { FAQEntry } from "../types/faq.types";

export const FAQ_ENTRIES: FAQEntry[] = [
  {
    id: "free-plan",
    question: "Is there really a free plan?",
    answer:
      "Yes. The Free plan includes private board sharing, 5 GB of storage and web analytics with no time limit. Upgrade only when your team needs more.",
  },
  {
    id: "devices",
    question: "Which devices can my VR apps run on?",
    answer:
      "Projects built with VirtualR export to desktop browsers, mobile devices and the major standalone and PC-tethered VR headsets from a single codebase.",
  },
  {
    id: "coding",
    question: "Do I need coding experience?",
    answer:
      "No. The drag-and-drop editor and built-in templates cover most scenes without code. Developers can still drop into scripts whenever they need full control.",
  },
  {
    id: "switch-plans",
    question: "Can I switch plans later?",
    answer:
      "Any time. Upgrades take effect immediately and downgrades apply at the end of your current billing period, so you never lose work you've already paid for.",
  },
];
