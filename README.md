# Quoc Huy Portfolio

Personal portfolio website highlighting all notable projects and achievements of **Nguyen Huu Quoc Huy** — software engineer, RMIT University Vietnam (Bachelor of IT, graduating April 2026).

Live: _set after first Vercel deploy_

## Stack

- **Next.js 16** (App Router, RSC, Turbopack)
- **TypeScript** (strict)
- **TailwindCSS 4** + CSS variables for light/dark theming
- **next-themes** for theme persistence
- **Motion** (Framer Motion) for entrance animations
- **next-mdx-remote** for MDX-driven project case studies
- **Resend** + **react-hook-form** + **zod** for the contact form
- **Radix UI** primitives (Dialog, Tooltip, Slot) under custom components
- **Sonner** for toast feedback

## Local development

```bash
npm install
cp .env.local.example .env.local   # fill in RESEND_API_KEY
npm run dev                        # http://localhost:3000
```

## Scripts

| Script                 | What it does                     |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start dev server (Turbopack)     |
| `npm run build`        | Production build                 |
| `npm run start`        | Run the production build locally |
| `npm run lint`         | ESLint                           |
| `npm run typecheck`    | `tsc --noEmit`                   |
| `npm run format`       | Prettier write                   |
| `npm run format:check` | Prettier check                   |

## Project layout

```
app/                       # routes
├─ layout.tsx              # fonts, ThemeProvider, metadata, JSON-LD
├─ page.tsx                # composes all home sections
├─ projects/[slug]/page.tsx# MDX case-study pages
├─ api/contact/route.ts    # Resend-backed contact endpoint
├─ opengraph-image.tsx     # generated OG image
├─ sitemap.ts, robots.ts
components/
├─ sections/               # Hero, About, Experience, Projects, Skills, Contact
├─ ui/                     # Button, Card, Section, Input, Textarea, …
├─ nav.tsx, footer.tsx, theme-toggle.tsx, project-card.tsx,
├─ experience-item.tsx, mdx-components.tsx, structured-data.tsx, icons.tsx
content/projects/*.mdx     # case studies, frontmatter-driven
lib/                       # site config, project loader, skills/experience data
public/                    # resume.pdf, project images, favicon
```

## Adding a new project

1. Create `content/projects/<slug>.mdx` with frontmatter:
   ```yaml
   ---
   title: My Project
   slug: my-project
   summary: One-liner describing the project.
   period: Jan 2026 – Feb 2026
   stack: [Next.js, TypeScript]
   github: https://github.com/...
   cover: /projects/my-project/cover.png
   order: 1
   ---
   ```
2. Write the case study in MDX below the frontmatter.
3. Drop any images into `public/projects/<slug>/`.

The home gallery and the `/projects/<slug>` route pick it up automatically.

## Deploy

1. Push to GitHub.
2. Import the repo into Vercel.
3. Set env vars in Vercel:
   - `RESEND_API_KEY` — from [resend.com](https://resend.com)
   - `CONTACT_TO_EMAIL` — destination inbox (defaults to the one in `lib/site.ts`)
4. Deploy. Attach a custom domain whenever you have one.
