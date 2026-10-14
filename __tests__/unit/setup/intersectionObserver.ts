import { vi } from "vitest";

export function mockIntersectionObserver() {
  class MockIntersectionObserver {
    constructor(private callback: IntersectionObserverCallback) {}
    observe = (target: Element) => {
      this.callback(
        [{ isIntersecting: true, target } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      );
    };
    disconnect = vi.fn();
    unobserve = vi.fn();
    takeRecords = () => [];
  }

  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
}
