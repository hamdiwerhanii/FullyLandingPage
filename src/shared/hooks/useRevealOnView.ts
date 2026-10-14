import { useEffect, useRef, useState } from "react";

const DEFAULT_THRESHOLD = 0.15;

/**
 * Reports when an element first scrolls into view. Once visible it stays
 * visible, so content never fades out again while the user reads it.
 */
export function useRevealOnView<T extends HTMLElement = HTMLDivElement>(
  threshold = DEFAULT_THRESHOLD,
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
