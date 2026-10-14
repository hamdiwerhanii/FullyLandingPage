import type { ReactNode } from "react";
import { cn } from "@/shared/utils/cn";

type NavLinkProps = {
  href: string;
  isActive: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export default function NavLink({ href, isActive, onClick, children }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? "location" : undefined}
      className={cn(
        "transition-colors duration-200",
        isActive ? "text-brand-500" : "text-neutral-300 hover:text-white",
      )}
    >
      {children}
    </a>
  );
}
