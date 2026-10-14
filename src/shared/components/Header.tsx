import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import HeaderActions from "@/shared/components/HeaderActions";
import HeaderMobileMenu from "@/shared/components/HeaderMobileMenu";
import Logo from "@/shared/components/Logo";
import NavLink from "@/shared/components/NavLink";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { useLockBodyScroll } from "@/shared/hooks/useLockBodyScroll";
import { PAGE_NAV_ITEMS } from "@/shared/constants/nav";

const LG_BREAKPOINT_PX = 1024;
const MOBILE_MENU_ID = "mobile-menu";

export default function Header() {
  const activeHref = useActiveSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useLockBodyScroll(isMenuOpen);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= LG_BREAKPOINT_PX) setIsMenuOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-700/80 py-3 backdrop-blur-lg">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-10 text-sm">
            {PAGE_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} isActive={activeHref === item.href}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <HeaderActions className="hidden gap-6 text-sm lg:flex" />

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
          className="rounded-md p-2 hover:bg-white/5 lg:hidden"
        >
          {isMenuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      <HeaderMobileMenu
        id={MOBILE_MENU_ID}
        isOpen={isMenuOpen}
        onClose={closeMenu}
        activeHref={activeHref}
      />
    </header>
  );
}
