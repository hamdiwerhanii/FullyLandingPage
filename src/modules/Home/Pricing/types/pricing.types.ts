export type BillingCycle = "monthly" | "yearly";

export type PricingPlan = {
  id: string;
  title: string;
  monthlyPrice: number;
  features: string[];
  ctaLabel: string;
  isPopular?: boolean;
};
