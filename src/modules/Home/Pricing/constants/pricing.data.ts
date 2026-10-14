import type { BillingCycle, PricingPlan } from "../types/pricing.types";

export const YEARLY_DISCOUNT = 0.2;

export const BILLING_CYCLES: { id: BillingCycle; label: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    title: "Free",
    monthlyPrice: 0,
    ctaLabel: "Start for free",
    features: [
      "Private board sharing",
      "5 GB storage",
      "Web analytics",
      "Private mode",
    ],
  },
  {
    id: "pro",
    title: "Pro",
    monthlyPrice: 10,
    ctaLabel: "Subscribe",
    isPopular: true,
    features: [
      "Private board sharing",
      "10 GB storage",
      "Advanced web analytics",
      "Private mode",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise",
    monthlyPrice: 200,
    ctaLabel: "Contact sales",
    features: [
      "Private board sharing",
      "Unlimited storage",
      "High-performance network",
      "Private mode",
    ],
  },
];
