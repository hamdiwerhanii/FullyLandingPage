import type { ReactNode } from "react";
import Container from "@/shared/components/Container";
import { sectionTitleId } from "@/shared/utils/sectionTitleId";
import { cn } from "@/shared/utils/cn";

type SectionProps = {
  /** Anchor id used by the navigation; the section's heading must use `sectionTitleId(id)`. */
  id: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export default function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={sectionTitleId(id)} className={cn("mt-20", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
