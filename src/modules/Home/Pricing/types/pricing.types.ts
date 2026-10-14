export type BillingCycle = "monthly" | "yearly";

export type PricingPlan = {
  id: string;
  title: string;
  /** Price per month in USD when billed monthly. */
  monthlyPrice: number;
  features: string[];
  ctaLabel: string;
  isPopular?: boolean;
};
