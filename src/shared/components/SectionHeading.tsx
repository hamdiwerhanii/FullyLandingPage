import type { ReactNode } from "react";
import Badge from "@/shared/components/Badge";
import { sectionTitleId } from "@/shared/utils/sectionTitleId";
import { cn } from "@/shared/utils/cn";

type SectionHeadingProps = {
  sectionId: string;
  title: ReactNode;
  highlight?: string;
  badge?: string;
  className?: string;
};

export default function SectionHeading({
  sectionId,
  title,
  highlight,
  badge,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center", className)}>
      {badge && <Badge variant="section">{badge}</Badge>}
      <h2
        id={sectionTitleId(sectionId)}
        className={cn(
          "text-3xl tracking-wide sm:text-5xl lg:text-6xl",
          badge && "mt-10",
        )}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gradient-brand">{highlight}</span>
          </>
        )}
      </h2>
    </div>
  );
}
