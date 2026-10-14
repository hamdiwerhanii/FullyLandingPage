import { cn } from "@/shared/utils/cn";

describe("cn", () => {
  it("joins truthy class names and drops falsy ones", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });

  it("lets later Tailwind classes override conflicting earlier ones", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});
