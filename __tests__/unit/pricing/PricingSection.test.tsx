import { fireEvent, render, screen, within } from "@testing-library/react";
import PricingSection from "@/modules/Home/Pricing/components/PricingSection";
import { mockIntersectionObserver } from "../setup/intersectionObserver";

beforeEach(() => {
  mockIntersectionObserver();
});

const getPlan = (title: string) => within(screen.getByRole("article", { name: title }));

describe("PricingSection", () => {
  it("shows monthly prices by default", () => {
    render(<PricingSection />);

    expect(screen.getByRole("radio", { name: /monthly/i })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    expect(getPlan("Pro").getByText("$10")).toBeInTheDocument();
  });

  it("switches to discounted prices when yearly billing is selected", () => {
    render(<PricingSection />);

    fireEvent.click(screen.getByRole("radio", { name: /yearly/i }));

    expect(getPlan("Pro").getByText("$8")).toBeInTheDocument();
    expect(getPlan("Pro").getByText("Billed $96 yearly")).toBeInTheDocument();
    expect(getPlan("Enterprise").getByText("$160")).toBeInTheDocument();
  });

  it("marks only the popular plan", () => {
    render(<PricingSection />);

    expect(screen.getAllByText("Most popular")).toHaveLength(1);
    expect(getPlan("Pro").getByText("Most popular")).toBeInTheDocument();
  });
});
