import { CircleCheck } from "lucide-react";
import Badge from "@/shared/components/Badge";
import Button from "@/shared/components/Button";
import { cn } from "@/shared/utils/cn";
import { SIGN_IN_HREF } from "@/shared/constants/nav";
import { formatPrice, getMonthlyPrice } from "../utils/pricing.utils";
import type { BillingCycle, PricingPlan } from "../types/pricing.types";

type PricingCardProps = {
  plan: PricingPlan;
  cycle: BillingCycle;
};

export default function PricingCard({ plan, cycle }: PricingCardProps) {
  const price = getMonthlyPrice(plan.monthlyPrice, cycle);
  const showYearlyTotal = cycle === "yearly" && plan.monthlyPrice > 0;
  const titleId = `plan-${plan.id}-title`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        "flex h-full flex-col rounded-lg border p-10",
        plan.isPopular ? "border-brand-800" : "border-neutral-700",
      )}
    >
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <h3 id={titleId} className="text-4xl">
          {plan.title}
        </h3>
        {plan.isPopular && <Badge variant="popular">Most popular</Badge>}
      </div>

      <p className="mb-2">
        <span className="mr-2 text-5xl">{formatPrice(price)}</span>
        <span className="tracking-tight text-neutral-400">/month</span>
      </p>
      {/* Reserves a line on every card so prices stay aligned when the toggle changes. */}
      <p className="mb-8 min-h-5 text-sm text-neutral-500">
        {showYearlyTotal && `Billed ${formatPrice(price * 12)} yearly`}
      </p>

      <ul className="mb-10 flex flex-1 flex-col gap-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <CircleCheck aria-hidden className="shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        asChild
        variant={plan.isPopular ? "primary" : "brandOutline"}
        className="w-full rounded-lg py-2 text-xl tracking-tight"
      >
        <a href={SIGN_IN_HREF}>
          {plan.ctaLabel}
          <span className="sr-only"> – {plan.title} plan</span>
        </a>
      </Button>
    </article>
  );
}
