export const PAGE_NAV_ITEMS = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
] as const;

export type NavHref = (typeof PAGE_NAV_ITEMS)[number]["href"];

export const HOME_HREF = "#home";
export const CTA_HREF = "#pricing";
export const SIGN_IN_HREF = "#get-started";
