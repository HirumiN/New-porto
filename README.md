# Hirumi — Portfolio

Personal portfolio of Hirumi, a software engineer. Minimal, editorial, monochromatic.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Swiper (project carousel)
- Oxlint

## Getting started

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + build
npm run preview  # preview production build
npm run lint     # lint
```

## Structure

```
src/
  sections/     Hero, Work, Stack, Experience, Education, Services, Contact
  components/   Navbar, Footer, Section, ProjectVisual, icons
  data/         portfolio.ts (all content), logos.ts
  lib/          socialIcons.ts
  index.css     theme tokens + keyframes
```

## Editing content

All content lives in `src/data/portfolio.ts` — profile, nav links, socials, projects,
experience, education and tech stack. No CMS; edit the file and rebuild.

Two optional links use the same convention, `string | null`:

```ts
// project or experience entry
link: 'https://example.com',  // shows a clickable link
link: null,                   // plain text, not clickable
```

`link` is required on every entry — TypeScript errors if you forget it.

## Design tokens

Defined in `src/index.css` under `@theme`:

| Token | Value | Use |
| --- | --- | --- |
| `canvas` | `#F7F7F5` | page background |
| `paper` | `#FFFFFF` | tiles |
| `shell` | `#EFEFED` | alternate section (token only, currently unused) |
| `line` | `#E7E7E4` | borders, dividers |
| `ink` | `#111111` | headings, primary text |
| `muted` | `#686868` | body text, nav links |
| `faint` | `#858585` | labels, metadata |
| `hover` | `#292929` | primary button hover |

Fonts: Inter (sans) and Instrument Serif (display), loaded in `index.html`.
