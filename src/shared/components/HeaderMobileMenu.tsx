import HeaderActions from "@/shared/components/HeaderActions";
import NavLink from "@/shared/components/NavLink";
import { PAGE_NAV_ITEMS } from "@/shared/constants/nav";
import { cn } from "@/shared/utils/cn";

type HeaderMobileMenuProps = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  activeHref: string;
};

export default function HeaderMobileMenu({
  id,
  isOpen,
  onClose,
  activeHref,
}: HeaderMobileMenuProps) {
  return (
    <div
      id={id}
      aria-hidden={!isOpen}
      className={cn(
        "absolute inset-x-0 top-full h-[calc(100svh-100%)] bg-neutral-950 lg:hidden",
        "transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none",
        // `invisible` also removes the links from the tab order while closed.
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-3 opacity-0",
      )}
    >
      <nav
        aria-label="Mobile"
        className="flex flex-col items-center gap-10 px-6 py-12"
      >
        <ul className="flex flex-col items-center gap-6 text-lg">
          {PAGE_NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                isActive={activeHref === item.href}
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <HeaderActions className="gap-4" onNavigate={onClose} />
      </nav>
    </div>
  );
}
