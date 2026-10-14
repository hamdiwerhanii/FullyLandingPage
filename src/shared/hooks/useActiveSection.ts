import { useEffect, useState } from "react";
import { PAGE_NAV_ITEMS, type NavHref } from "@/shared/constants/nav";

type SectionRef = { href: NavHref; element: HTMLElement };

const PROBE_OFFSET_PX = 16;

/**
 * Returns the href of the nav section currently under the sticky header,
 * or an empty string when the user is above the first section (the hero).
 */
export const useActiveSection = () => {
  const [activeHref, setActiveHref] = useState<NavHref | "">("");

  useEffect(() => {
    const sections = PAGE_NAV_ITEMS.map((item) => ({
      href: item.href,
      element: document.getElementById(item.href.slice(1)),
    })).filter(
      (item): item is SectionRef => item.element instanceof HTMLElement,
    );

    if (!sections.length) return;

    const resolveActiveHref = () => {
      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const probeY = headerHeight + PROBE_OFFSET_PX;

      let nextHref: NavHref | "" = "";
      for (const { href, element } of sections) {
        if (element.getBoundingClientRect().top <= probeY) nextHref = href;
      }

      setActiveHref((prev) => (prev === nextHref ? prev : nextHref));
    };

    let frame = 0;
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        resolveActiveHref();
      });
    };

    // Resolve the initial section on the next frame (e.g. when the page loads with a #hash).
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return activeHref;
};
