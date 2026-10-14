import { YEARLY_DISCOUNT } from "../constants/pricing.data";
import type { BillingCycle } from "../types/pricing.types";

export function getMonthlyPrice(monthlyPrice: number, cycle: BillingCycle): number {
  const price = cycle === "yearly" ? monthlyPrice * (1 - YEARLY_DISCOUNT) : monthlyPrice;
  return Math.round(price * 100) / 100;
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
