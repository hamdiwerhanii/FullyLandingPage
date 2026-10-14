import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

const badgeVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      section:
        "rounded-full bg-neutral-900 px-3 py-1 text-sm font-medium uppercase tracking-wide text-brand-500",
      popular:
        "rounded-full bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-500",
    },
  },
  defaultVariants: {
    variant: "section",
  },
});

type BadgeProps = VariantProps<typeof badgeVariants> & {
  className?: string;
  children: ReactNode;
};

export default function Badge({ className, variant, children }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)}>{children}</span>
  );
}
