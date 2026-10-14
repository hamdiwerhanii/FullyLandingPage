import { fireEvent, render, screen } from "@testing-library/react";
import FAQSection from "@/modules/Home/FAQ/components/FAQSection";
import { FAQ_ENTRIES } from "@/modules/Home/FAQ/constants/faq.data";
import { mockIntersectionObserver } from "../setup/intersectionObserver";

beforeEach(() => {
  mockIntersectionObserver();
});

describe("FAQSection", () => {
  const [first, second] = FAQ_ENTRIES;

  it("starts with every answer collapsed", () => {
    render(<FAQSection />);

    for (const entry of FAQ_ENTRIES) {
      expect(
        screen.getByRole("button", { name: entry.question }),
      ).toHaveAttribute("aria-expanded", "false");
    }
  });

  it("opens one answer at a time", () => {
    render(<FAQSection />);
    const firstTrigger = screen.getByRole("button", { name: first.question });
    const secondTrigger = screen.getByRole("button", { name: second.question });

    fireEvent.click(firstTrigger);
    expect(firstTrigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(first.answer)).toBeVisible();

    fireEvent.click(secondTrigger);
    expect(firstTrigger).toHaveAttribute("aria-expanded", "false");
    expect(secondTrigger).toHaveAttribute("aria-expanded", "true");
  });

  it("closes an open answer when its question is clicked again", () => {
    render(<FAQSection />);
    const trigger = screen.getByRole("button", { name: first.question });

    fireEvent.click(trigger);
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
