import { fireEvent, render, screen } from "@testing-library/react";
import Header from "@/shared/components/Header";

describe("Header", () => {
  it("opens and closes the mobile menu from the toggle button", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Open menu" });

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAccessibleName("Close menu");
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(document.body.style.overflow).toBe("");
  });

  it("closes the mobile menu on Escape", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Open menu" });

    fireEvent.click(toggle);
    fireEvent.keyDown(window, { key: "Escape" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu when a link is chosen", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Open menu" });

    fireEvent.click(toggle);
    const mobileNav = screen.getByRole("navigation", { name: "Mobile" });
    fireEvent.click(
      Array.from(mobileNav.querySelectorAll("a")).find(
        (a) => a.textContent === "Pricing",
      )!,
    );

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
