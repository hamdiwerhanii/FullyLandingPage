import { HOME_HREF } from "@/shared/constants/nav";
import { SITE } from "@/shared/constants/site";
import { cn } from "@/shared/utils/cn";

type LogoProps = {
  size?: "sm" | "md";
  className?: string;
};

const SIZES = {
  sm: { px: 32, image: "h-8 w-8", text: "text-lg" },
  md: { px: 40, image: "h-10 w-10", text: "text-xl" },
} as const;

export default function Logo({ size = "md", className }: LogoProps) {
  const { px, image, text } = SIZES[size];

  return (
    <a
      href={HOME_HREF}
      aria-label={`${SITE.name} home`}
      className={cn("flex shrink-0 items-center gap-2", className)}
    >
      <img src="/images/logo.png" alt="" width={px} height={px} className={image} />
      <span className={cn("tracking-tight", text)}>{SITE.name}</span>
    </a>
  );
}
