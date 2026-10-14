# VirtualR — Fully Responsive Landing Page

A modern, dark-themed, fully responsive marketing landing page for **VirtualR**, a fictional VR development tools platform, built with React, TypeScript, Vite and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Page Sections](#page-sections)
- [Customization](#customization)
- [Testing and Quality](#testing-and-quality)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

This is a single-page, front-end-only landing page that presents a SaaS-style product ("VirtualR build tools for developers"). It is a portfolio project that demonstrates:

- A **feature-module architecture**: each page section lives in its own module with separate `components`, `constants` (content), `types` and `utils`
- A small **shared UI layer** (`Button`, `Badge`, `Container`, `SectionHeading`, `Reveal`) built with `class-variance-authority` variants and a `cn()` class-merging helper
- Accessible, semantic markup and real in-page navigation
- Fully typed content and components with **TypeScript** in strict mode
- Unit tests with **Vitest + Testing Library** and a GitHub Actions CI pipeline

There is no backend or API; all content is static and rendered on the client.

## Features

### Layout and design

- **Dark theme** with the **Poppins** font (only the 4 weights used are loaded)
- **Orange brand gradient** defined once as Tailwind theme colors (`brand-500`, `brand-800`) and reusable utilities (`bg-gradient-brand`, `text-gradient-brand`)
- **Responsive grids** that go from 1 column (mobile) to 2 (`sm`) to 3 (`lg`); hero videos stack on small screens
- **Scroll reveal animations** driven by `IntersectionObserver`, staggered per card

### Navigation

- **Sticky header** with a `backdrop-blur` glass effect
- **Anchor navigation** to every section with smooth scrolling and `scroll-margin-top`, so headings are never hidden under the header
- **Active-section highlighting** in the menu while scrolling (`useActiveSection`)
- **Mobile menu** that closes on link click, the `Escape` key or when resizing to desktop, and locks body scroll while open
- **Skip to content** link for keyboard users

### Sections

- **Pricing** with a **monthly / yearly toggle** (20% yearly discount) and a data-driven "Most popular" plan
- **FAQ accordion** (one answer open at a time)
- **Get started** call-to-action banner
- **Footer** with working section links, copyright year and author credit

### Accessibility and performance

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) with a correct heading hierarchy and `aria-labelledby` on every section
- `aria-expanded` / `aria-controls` on the menu and FAQ triggers, `aria-current` on the active nav link, `radiogroup` semantics on the billing toggle
- Descriptive `alt` text, decorative icons hidden with `aria-hidden`
- Respects **`prefers-reduced-motion`**: disables smooth scrolling, reveal animations and pauses the hero videos
- Hero videos use `playsInline` (iOS autoplay) and `preload="metadata"`; images below the fold use `loading="lazy"` with explicit dimensions to prevent layout shift
- SEO and social meta tags (`description`, Open Graph, Twitter card, `theme-color`)

## Tech Stack

| Category       | Technology                                                                          |
| -------------- | ----------------------------------------------------------------------------------- |
| UI library     | [React 18](https://react.dev/)                                                      |
| Language       | [TypeScript 5](https://www.typescriptlang.org/) (strict)                            |
| Build tool     | [Vite 8](https://vite.dev/) with `@vitejs/plugin-react`                             |
| Styling        | [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite` (CSS-first config) |
| UI utilities   | `class-variance-authority`, `clsx`, `tailwind-merge`, `@radix-ui/react-slot`        |
| Icons          | [Lucide React](https://lucide.dev/)                                                 |
| Testing        | [Vitest](https://vitest.dev/), Testing Library, jsdom                               |
| Linting        | ESLint 10 (flat config) with `typescript-eslint`, `@eslint-react`, `react-hooks`, `react-refresh` |
| CI             | GitHub Actions                                                                      |

## Project Structure

```
FullyLandingPage/
├── .github/workflows/ci.yml          # Lint, typecheck, test and build on every push / PR
├── __tests__/unit/                   # Vitest unit tests (mirrors src/ areas)
├── public/
│   ├── images/                       # logo, workflow image, testimonial avatars
│   └── videos/                       # hero demo videos
├── src/
│   ├── app/
│   │   ├── App.tsx                   # Composes the page sections
│   │   ├── Layout.tsx                # Skip link + Header + <main> + Footer
│   │   └── globals.css               # Tailwind import + @theme (colors, font, animation), brand utilities
│   ├── modules/
│   │   ├── Home/
│   │   │   ├── Hero/                 # components/ constants/ types/
│   │   │   ├── Features/             # components/ constants/ types/
│   │   │   ├── Workflow/             # components/ constants/ types/
│   │   │   ├── Pricing/              # components/ constants/ types/ utils/
│   │   │   ├── Testimonials/         # components/ constants/ types/
│   │   │   ├── FAQ/                  # components/ constants/ types/
│   │   │   └── GetStarted/           # components/
│   │   └── Shared/
│   │       └── Footer/               # components/ constants/ types/
│   ├── shared/
│   │   ├── components/               # Header, HeaderMobileMenu, HeaderActions, NavLink, Logo,
│   │   │                             # Button, Badge, Container, Section, SectionHeading, Reveal
│   │   ├── constants/                # nav.ts (menu + CTA targets), site.ts (name, author), animation.ts
│   │   ├── hooks/                    # useActiveSection, useLockBodyScroll, useRevealOnView
│   │   └── utils/                    # cn.ts, sectionTitleId.ts
│   └── main.tsx                      # React entry point
├── index.html                        # HTML shell, meta tags, font loading
├── eslint.config.js
├── tsconfig.json                     # Strict TS, `@/` path alias
├── vite.config.ts                    # React + Tailwind plugins, `@/` alias
├── vitest.unit.config.ts
└── vitest.setup.ts
```

**Conventions**

- Each section module keeps **content in `constants/*.data.ts`**, **types in `types/*.types.ts`** and **UI in `components/`**, so copy can change without touching markup.
- Every section is wrapped in the shared `<Section id="...">`, which adds the anchor id, the container and `aria-labelledby`; its heading uses `sectionTitleId(id)` (done automatically by `SectionHeading`).
- Shared code is imported through the `@/` alias (`@/shared/components/Button`); module-internal code uses relative imports.
- Constants are `UPPER_SNAKE_CASE`, every list item has a stable `id` used as the React `key`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 24 LTS recommended (minimum 20.19+ or 22.13+, required by Vite 8 and ESLint 10)
- npm (a `package-lock.json` is included)

### Installation

```bash
git clone https://github.com/hamdiwerhanii/FullyLandingPage.git
cd FullyLandingPage
npm install
```

No environment variables are required.

### Available scripts

| Command             | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server with HMR (http://localhost:5173)     |
| `npm run build`     | Typecheck, then create an optimized production build in `dist/` |
| `npm run preview`   | Serve the production build locally                             |
| `npm run lint`      | Run ESLint                                                     |
| `npm run typecheck` | Run the TypeScript compiler without emitting                   |
| `npm test`          | Run unit tests in watch mode                                   |
| `npm run test:unit` | Run unit tests once (used in CI)                               |

## Page Sections

The page is composed in `src/app/App.tsx` in this order:

| Section      | Anchor          | Module                       | Content                                                                 |
| ------------ | --------------- | ---------------------------- | ----------------------------------------------------------------------- |
| Hero         | `#home`         | `Home/Hero`                  | Headline, "Start for free" / "Explore features" CTAs, two demo videos   |
| Features     | `#features`     | `Home/Features`              | Six feature cards with Lucide icons                                     |
| Workflow     | `#workflow`     | `Home/Workflow`              | Code image plus a four-step workflow list                               |
| Pricing      | `#pricing`      | `Home/Pricing`               | Free / Pro / Enterprise plans with monthly-yearly toggle                |
| Testimonials | `#testimonials` | `Home/Testimonials`          | Six quote cards with avatar, name and company                           |
| FAQ          | `#faq`          | `Home/FAQ`                   | Four-question accordion                                                 |
| Get started  | `#get-started`  | `Home/GetStarted`            | Final call-to-action banner                                             |

## Customization

- **Content:** edit the `constants/*.data.ts` file of the relevant module (for example `src/modules/Home/Pricing/constants/pricing.data.ts`). TypeScript will flag any missing field.
- **Navigation:** menu items and CTA targets live in `src/shared/constants/nav.ts`; the active-section highlight picks up new items automatically as long as a `<section>` with the matching `id` exists.
- **Brand colors:** change `--color-brand-500` / `--color-brand-800` in the `@theme` block of `src/app/globals.css`; every gradient, button and accent updates.
- **Buttons and badges:** add or tweak variants in `src/shared/components/Button.tsx` / `Badge.tsx`.
- **Media:** replace files in `public/images` and `public/videos` and update the paths in the module's data file.

## Testing and Quality

Unit tests live in `__tests__/unit/` and cover:

- `cn()` class merging
- Pricing math (`getMonthlyPrice`, `formatPrice`) and the monthly/yearly toggle
- FAQ accordion open/close behaviour
- Header mobile menu: toggle, `Escape` to close, close on link click, body scroll lock

The CI workflow (`.github/workflows/ci.yml`) runs lint, typecheck, unit tests and a production build on every push to `main` and every pull request.

## Deployment

As a static Vite app it can be hosted on any static host (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build   # outputs to dist/
```

Then deploy the `dist/` folder. For GitHub Pages under a sub-path, set `base: "/FullyLandingPage/"` in `vite.config.ts` before building.

## Roadmap

- Deploy a live demo and link it here
- Real sign-in / sign-up pages (the auth buttons currently scroll to the call-to-action)
- Compress the hero videos (about 24 MB combined) and add poster images
- Convert images to WebP/AVIF
- Add an end-to-end test (e.g. Playwright) for anchor navigation

## Contributing

Contributions and suggestions are welcome. Fork the repository, create a feature branch, and open a pull request. Please make sure `npm run lint`, `npm run typecheck` and `npm run test:unit` pass.

## License

No license file is currently included; all rights reserved by the author.

## Author

**Hamdi Werhani** — GitHub [@hamdiwerhanii](https://github.com/hamdiwerhanii)
