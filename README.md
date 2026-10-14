# VirtualR — Fully Responsive Landing Page

A modern, dark-themed, fully responsive marketing landing page for **VirtualR**, a fictional VR development tools platform, built with React, Vite and Tailwind CSS.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-0.435-F56565?logo=lucide&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?logo=javascript&logoColor=black)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Page Sections](#page-sections)
- [Customization](#customization)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

This project is a single-page, front-end-only landing page that presents a SaaS-style product ("VirtualR build tools for developers"). It is a portfolio / practice project that demonstrates:

- Building a complete landing page out of small, reusable React function components
- Mobile-first responsive layouts with Tailwind CSS utility classes and breakpoints (`sm`, `md`, `lg`)
- Keeping all page content (features, pricing, testimonials, footer links) in a single data file, separated from the UI
- Simple interactive state with React hooks (the mobile navigation drawer)

There is no backend, routing, or API — all content is static and rendered on the client.

## Features

### Layout and design

- **Dark theme** (`color-scheme: dark`) with the **Poppins** font loaded from Google Fonts
- **Orange-to-red gradient accents** on headings, buttons and highlighted text (`bg-clip-text` gradients)
- **Responsive grids** that switch from 1 column (mobile) to 2 (`sm`) to 3 columns (`lg`) for features, pricing and testimonials
- Content centered in a `max-w-6xl` container

### Interactivity

- **Sticky navbar** with a `backdrop-blur` glass effect
- **Mobile hamburger menu** (Lucide `Menu` / `X` icons) toggled with `useState`, shown below the `lg` breakpoint
- **Autoplaying, looping, muted demo videos** in the hero section
- Hover transition on the pricing "Subscribe" buttons

### Code organization

- One component per page section in `src/components/`
- All copy and lists (nav items, features, workflow checklist, pricing plans, testimonials, footer links) defined in `src/constants/index.jsx` and rendered with `.map()`
- Images and videos imported as ES modules so Vite bundles and fingerprints them

## Tech Stack

| Category        | Technology                                                                 |
| --------------- | -------------------------------------------------------------------------- |
| UI library      | [React 18](https://react.dev/) (function components, hooks, `StrictMode`)  |
| Build tool      | [Vite 5](https://vitejs.dev/) with `@vitejs/plugin-react`                  |
| Styling         | [Tailwind CSS 3](https://tailwindcss.com/), PostCSS, Autoprefixer          |
| Icons           | [Lucide React](https://lucide.dev/)                                        |
| Font            | Poppins (Google Fonts)                                                     |
| Linting         | ESLint 9 (flat config) with `react`, `react-hooks`, `react-refresh` plugins |

## Project Structure

```
FullyLandingPage/
├── public/
│   └── vite.svg                 # Favicon
├── src/
│   ├── assets/
│   │   ├── profile-pictures/    # user1.jpg … user6.jpg (testimonial avatars)
│   │   ├── code.jpg             # Workflow section image
│   │   ├── logo.png             # VirtualR logo (navbar)
│   │   ├── video1.mp4           # Hero demo video
│   │   └── video2.mp4           # Hero demo video
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navbar + mobile drawer
│   │   ├── HeroSection.jsx      # Headline, CTAs, two demo videos
│   │   ├── Features.jsx         # Six feature cards with icons
│   │   ├── Workflow.jsx         # Image + checklist of workflow benefits
│   │   ├── Pricing.jsx          # Free / Pro / Enterprise plans
│   │   ├── Testimonials.jsx     # Six customer testimonial cards
│   │   └── Footer.jsx           # Resources / Platform / Community links
│   ├── constants/
│   │   └── index.jsx            # All static content used by the components
│   ├── App.jsx                  # Composes the page sections
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind directives, font, global styles
├── index.html                   # HTML shell (mounts #root)
├── eslint.config.js
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later (required by Vite 5)
- npm (a `package-lock.json` is included)

### Installation

```bash
# Clone the repository
git clone https://github.com/hamdiwerhanii/FullyLandingPage.git
cd FullyLandingPage

# Install dependencies
npm install
```

No environment variables are required.

### Available scripts

| Command           | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR (default: http://localhost:5173) |
| `npm run build`   | Create an optimized production build in `dist/`             |
| `npm run preview` | Serve the production build locally                          |
| `npm run lint`    | Run ESLint on the project                                   |

## Page Sections

The page is assembled in `src/App.jsx` in this order:

| Section          | Component           | Content                                                                                               |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| Navigation       | `Navbar.jsx`        | Logo, links (Features, Workflow, Pricing, Testimonials), "Sign In" and "Create an account" buttons     |
| Hero             | `HeroSection.jsx`   | "VirtualR build tools for developers" headline, "Start for free" / "Documentation" CTAs, two videos    |
| Features         | `Features.jsx`      | Drag-and-Drop Interface, Multi-Platform Compatibility, Built-in Templates, Real-Time Preview, Collaboration Tools, Analytics Dashboard |
| Workflow         | `Workflow.jsx`      | "Accelerate your coding workflow" — code image plus a four-item checklist                              |
| Pricing          | `Pricing.jsx`       | Free ($0), Pro ($10, marked "Most Popular"), Enterprise ($200) per month                               |
| Testimonials     | `Testimonials.jsx`  | Six cards with quote, avatar, name and company                                                         |
| Footer           | `Footer.jsx`        | Three link columns: Resources, Platform, Community                                                     |

## Customization

- **Content:** edit `src/constants/index.jsx` to change nav items, features (text, description, Lucide icon), workflow checklist, pricing plans, testimonials and footer links. Components pick up changes automatically.
- **Media:** replace the files in `src/assets/` (keep the same names or update the imports).
- **Colors:** the accent gradient uses Tailwind classes such as `from-orange-500 to-orange-800`; search and replace them in `src/components/` to rebrand.
- **Font:** change the Google Fonts import and `font-family` in `src/index.css`.
- **Page title / favicon:** update `<title>` and the icon link in `index.html` (currently still the Vite defaults).

## Deployment

The project has no deployment configuration in the repository, but as a static Vite app it can be hosted on any static host (Vercel, Netlify, GitHub Pages, etc.):

```bash
npm run build   # outputs to dist/
```

Then deploy the `dist/` folder. For GitHub Pages under a sub-path, set `base: "/FullyLandingPage/"` in `vite.config.js` before building.

## Roadmap

This is a static UI showcase; the following are known gaps and possible improvements:

- All links and buttons point to `#`; nav items could scroll to section anchors (`id="features"`, etc.)
- The mobile drawer does not close after a link is clicked
- `index.html` still uses the default "Vite + React" title and Vite favicon; add a proper title, meta description and Open Graph tags
- The workflow checklist items share the same placeholder description
- Hero videos are side by side at `w-1/2` on every screen size; they could stack on small screens
- Add accessibility improvements (`aria-label` on the menu button, descriptive `alt` text)

## Contributing

Contributions and suggestions are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request. Please run `npm run lint` before submitting.

## License

No license file is currently included; all rights reserved by the author.

## Author

**Hamdi Werhani** — GitHub [@hamdiwerhanii](https://github.com/hamdiwerhanii)
