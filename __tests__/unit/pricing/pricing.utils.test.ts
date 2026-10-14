import {
  formatPrice,
  getMonthlyPrice,
} from "@/modules/Home/Pricing/utils/pricing.utils";

describe("getMonthlyPrice", () => {
  it("returns the list price for monthly billing", () => {
    expect(getMonthlyPrice(10, "monthly")).toBe(10);
  });

  it("applies the yearly discount", () => {
    expect(getMonthlyPrice(10, "yearly")).toBe(8);
    expect(getMonthlyPrice(200, "yearly")).toBe(160);
  });

  it("keeps free plans free", () => {
    expect(getMonthlyPrice(0, "yearly")).toBe(0);
  });
});

describe("formatPrice", () => {
  it("formats whole dollars without decimals", () => {
    expect(formatPrice(10)).toBe("$10");
  });

  it("keeps cents when present", () => {
    expect(formatPrice(9.5)).toBe("$9.5");
  });
});
