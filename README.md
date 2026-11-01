# Pixinia — Rian Anugrah

A single-screen, Metro-inspired developer landing page built with Next.js,
React and Tailwind CSS v4. The interface borrows from the Windows 8 / Windows
Phone start screen: a fixed icon rail, a compact system header, bold Segoe UI
typography, solid accent tiles and an asymmetric bento grid.

The site is a fully static Next.js app (App Router, static export). There is no
backend, database, authentication or server-side runtime.

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Next.js prints the local URL, usually `http://localhost:3000`.

To build and check the production output locally:

```bash
npm run build
```

```bash
npm run preview
```

The production build is written to `out/`.

## Routes

Navigation now uses real paths instead of hash fragments, so each view is
linkable, prefetchable and shareable:

| Path | View |
| --- | --- |
| `/` | Home bento board |
| `/projects` | Project showcase |
| `/apps` | Shortcut launcher |
| `/contact` | Contact channels and details |

Unknown paths render `src/app/not-found.jsx` with a link back to the home view.

## Project structure

```
public/
├── data/
│   ├── apps.json        # JSON-driven app launcher (edit freely)
│   └── profile.json     # Profile, skills and projects (edit freely)
└── .nojekyll            # Keeps GitHub Pages from ignoring /_next
src/
├── app/
│   ├── layout.jsx       # Root layout, metadata, shell providers
│   ├── page.jsx         # Home route
│   ├── projects/page.jsx
│   ├── apps/page.jsx
│   ├── contact/page.jsx
│   ├── not-found.jsx
│   ├── globals.css      # Tailwind v4 entry, tokens, @apply components
│   └── icon.svg
├── components/
│   ├── apps/            # App tile renderer
│   ├── home/            # Metro tiles used on the home board
│   ├── layout/          # App shell, icon rail, system header
│   ├── projects/        # Project tile
│   ├── providers/       # Profile fetching provider and loading gate
│   └── ui/              # Status panel, view header, loading skeleton
├── config/navigation.js # Routes and primary navigation
├── hooks/               # useClock, useJsonData
├── lib/                 # Validation, icon registry, URL/color/route helpers
└── views/               # Home, Projects, Apps, Contact
```

## Editing content

All visible content lives in JSON under `public/data/`. Both files are fetched
at runtime, so changing them does **not** require a React source change or a
rebuild — including after the site is built and deployed.

### Profile, skills and projects — `public/data/profile.json`

| Field | Purpose |
| --- | --- |
| `name`, `monogram`, `role` | Identity in the profile tile and header |
| `tagline` | Short headline shown on the home screen |
| `bio` | Longer introduction (optional) |
| `location` | Displayed in the header and contact details |
| `education.institution`, `education.program` | Education tile and contact details |
| `currentRole.title`, `.company`, `.year` | Current role shown in contact details |
| `website`, `email`, `github`, `linkedin` | Links in the header, profile and contact views |

All fields except `name`, `role` and `tagline` are optional. Missing contact links, location, education or current role are hidden automatically.
| `skills` | String array rendered in the skills tile |
| `projects` | Array of project objects |

A project object looks like this:

```json
{
  "id": "unique-id",
  "name": "Project name",
  "category": "Web Apps",
  "tech": ["Next.js", "PostgreSQL"],
  "description": "Short, factual description.",
  "url": "https://example.com/",
  "color": "#E60012",
  "featured": true
}
```

- `url` may be `null`; the tile then opens the Projects view instead of an
  external site.
- `featured: true` promotes a project to the home board (the first three
  featured projects are shown; if none are featured, the first three projects
  are used).
- `category` accepts any label. The bundled categories (`Works`, `Web Apps`,
  `Education`, `Business`, `AI & Data`, `Games`) have matching icons and
  accent colors; unknown labels use a generic icon.
- `color` is an optional hex value for the project badge; otherwise the
  category color is used.
- When a project has a URL, its shortened link is shown on the card.

### App launcher — `public/data/apps.json`

This file is the single source of truth for the Apps view.

```json
{
  "categories": [
    {
      "id": "development",
      "name": "Development",
      "apps": [
        {
          "id": "github",
          "name": "GitHub",
          "url": "https://github.com/",
          "description": "Code repositories",
          "icon": "github",
          "color": "#E60012",
          "size": "medium",
          "enabled": true
        }
      ]
    }
  ]
}
```

#### Common edits

**Add an app:** append an object to the `apps` array of any category. Give it a
unique `id` and a valid `url`.

**Edit an app:** change `name`, `description`, `icon`, `color` or `size` in
place.

**Disable an app without deleting it:** set `"enabled": false`.

**Remove an app:** delete its object. Remove the whole category object to hide
the category.

**Add a category:** add an object with a unique `id`, a `name` and an `apps`
array.

#### Tile sizes

| Size | Grid footprint |
| --- | --- |
| `small` | 1 × 1 unit, icon with a compact label |
| `medium` | 2 × 2 units |
| `wide` | 4 × 2 units |
| `large` | 4 × 4 units |

The grid packs tiles densely, so mixing sizes creates the Metro-style rhythm.

#### Validation rules

`apps.json` is validated in the browser before rendering.

- The file must contain a top-level `categories` array.
- Each category needs a non-empty `name` and an `apps` array.
- Each enabled app needs a unique `id`, a non-empty `name` and an absolute
  `url` using `http:`, `https:` or `mailto:`.
- Invalid entries are skipped; the Apps view reports how many were skipped.
- A missing or malformed file shows an error state with a retry button.
- If no enabled apps remain, an empty state explains how to add one.

#### Icons and colors

`icon` is resolved through the explicit registry in `src/lib/icons.js`; there
is no dynamic import. Available names:

```
atom, book-open, briefcase, chart, check-circle, code, figma, file-code,
gauge, github, globe, graduation-cap, layers, linkedin, mail, map, map-pin,
package, server, shapes, shopping-bag, wind
```

Unknown icon names fall back to `globe`. To add a new icon name, import the
Lucide component and register it in `src/lib/icons.js` (the only change that
requires a source edit).

`color` accepts a 3- or 6-digit hex value. Foreground text and icons switch
between white and near-black automatically based on WCAG contrast, so any
tile color stays readable. Missing colors use a dark surface.

## Updating a static deployment without rebuilding

Because the JSON files are fetched from `data/` at runtime, a production
deployment can be updated without touching the built JavaScript:

1. Run `npm run build` once.
2. Deploy `out/` (this includes `out/data/apps.json` and
   `out/data/profile.json`).
3. To change shortcuts later, edit `out/data/apps.json` directly on the host
   (or replace that file via your deploy tool) and reload the page.

The app requests data with `cache: "no-cache"`, so browsers revalidate the JSON
on each load instead of serving a stale copy. No rebuild or React change is
needed as long as you keep the JSON schema valid.

## Deployment

The output is plain static files in `out/`.

### GitHub Pages

Next.js assets live under `/_next`, which GitHub Pages hides unless a
`.nojekyll` file is present. One is included in `public/`, so it is copied into
every build.

For a project site served from a subpath, build with the repository name as the
base path:

```bash
NEXT_PUBLIC_BASE_PATH=/repository npm run build
```

On PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/repository"; npm run build
```

Publish the contents of `out/` to the Pages branch/folder. The base path is
applied to routes, assets and the runtime `data/` URLs.

### Netlify

- Build command: `npm run build`
- Publish directory: `out`

### Vercel

- Framework preset: Next.js
- Build command: `npm run build`

Vercel detects the static export automatically.

No rewrite rules are required: navigation uses real paths and all data is
fetched from static files.

## Design notes

- Persona-inspired crimson/black/paper palette: crimson `#E60012`, deep red
  `#A8000D`, paper `#F2F2F2`, on charcoal `#0A0A0A` / `#181818`. The flat
  Metro layout and tile geometry are unchanged.
- Segoe UI with system fallbacks; large light-weight display type.
- Flat, square tiles with no gradients, glass effects or heavy shadows.
- The shell is locked to `100dvh`. On desktop the home board fits without page
  scrolling; longer views (Projects, Apps) use internal scrolling only.
- Keyboard support: visible focus rings, a skip link, `aria-current` on the
  active rail item, and tooltips that also appear on keyboard focus.
- `prefers-reduced-motion` removes transitions and pulsing skeleton animation.
- Tiles use semantic links for real destinations and buttons only for real
  navigation actions; non-linked project cards are static articles.
- The clock renders a placeholder until after mount so server-rendered HTML and
  the first client render match.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the static production site to `out/` |
| `npm run preview` | Serve the production build locally |

## License

Personal project. Content and profile data belong to Rian Anugrah.
