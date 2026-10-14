import { cn } from "@/shared/utils/cn";
import { BILLING_CYCLES, YEARLY_DISCOUNT } from "../constants/pricing.data";
import type { BillingCycle } from "../types/pricing.types";

type BillingToggleProps = {
  value: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
};

export default function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Billing cycle"
      className="inline-flex rounded-full border border-neutral-700 p-1"
    >
      {BILLING_CYCLES.map((cycle) => {
        const isSelected = value === cycle.id;
        return (
          <button
            key={cycle.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(cycle.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition-colors",
              isSelected
                ? "bg-gradient-brand text-white"
                : "text-neutral-400 hover:text-white",
            )}
          >
            {cycle.label}
            {cycle.id === "yearly" && (
              <span className="ml-1 text-xs opacity-80">
                (save {YEARLY_DISCOUNT * 100}%)
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
