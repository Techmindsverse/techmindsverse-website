# TechMindsVerse — Official Website (pnpm)

A standalone, frontend-only Next.js site. **Not TechMindsVerse OS.**

## Quick start

1. Install Node.js 20.9+ and pnpm 10 (Corepack recommended: `corepack enable && corepack prepare pnpm@10.18.3 --activate`).
2. Run `pnpm install` from this directory (this generates `pnpm-lock.yaml` if absent).
3. Run `pnpm dev` and open http://localhost:3000.
4. Run `pnpm build` before deploying.

## Edit brand colors in ONE place

`src/app/globals.css` has two semantic token blocks at the very top:
- `:root` = light mode
- `:root[data-theme="dark"]` = dark mode

Update `--primary`, `--primary-hover`, `--primary-foreground`, `--secondary`, `--secondary-foreground`, `--background`, `--surface`, `--surface-muted`, `--foreground`, `--muted`, `--border`, `--accent`, etc. **Do not add hex codes to pages.** The current blue is provisional until official brand hex values arrive.

## Update content and integrations

`src/lib/site.ts` centralizes the community link, email, OS link, and pending integrations. Fill in verified values for `calendly`, `formspree`, `academyForm`, and `eventForm` when available. Event RSVP shows **Registration opening soon** until configured. Academy is correctly marked **preparing for launch**. The contact page uses a working mailto fallback until Formspree is supplied.

Team and services content are currently in their respective page files. Replace initials with approved team photos later. The logo is a **temporary typographic placeholder**, not the official TMV logo.

## Deployment

Deploy this project as its own Vercel project. Set `NEXT_PUBLIC_SITE_URL` to the real public HTTPS domain **before** launch so canonical Open Graph and sitemap URLs do not use the example fallback. Keep the existing OS on its own deployment.

## Notes

- This site uses no backend, database, authentication, or external image dependency.
- Hero and event artwork are CSS-generated placeholders; add approved real photos in a later pass.
- Above-the-fold art is immediate CSS, not lazy-loaded imagery; no loading skeletons or deferred sections.
- The project is intentionally lean; no animation libraries or icon CDN.
- Install/build verification is required in your environment before production deployment.
