import Container from "@/shared/components/Container";
import Logo from "@/shared/components/Logo";
import { SITE } from "@/shared/constants/site";
import { FOOTER_NAV_COLUMNS, FOOTER_TAGLINE } from "../constants/footer.data";

const EXTERNAL_LINK_PROPS = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-neutral-700">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-4">
          <Logo size="sm" />
          <p className="max-w-xs text-sm text-neutral-400">{FOOTER_TAGLINE}</p>
        </div>

        <nav aria-label="Footer" className="contents">
          {FOOTER_NAV_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h2 className="mb-4 font-semibold">{col.heading}</h2>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.isExternal && EXTERNAL_LINK_PROPS)}
                      className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <div className="border-t border-neutral-800">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-sm text-neutral-500 sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>
            Built by{" "}
            <a
              href={SITE.author.url}
              {...EXTERNAL_LINK_PROPS}
              className="text-brand-500 hover:underline"
            >
              {SITE.author.name}
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
