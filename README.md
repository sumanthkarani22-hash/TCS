# Turvi Consulting Services — website

HR consultancy · recruitment · staffing, plus a Software & Technology Solutions division. Vite + React + TypeScript + Tailwind.

    npm install
    npm run dev        # local development
    npm run build      # type-check + production build into dist/
    npm run images     # optimise photos in assets-src/images -> public/assets/images (+ manifest + credits + ASSET_SOURCES.md)
    npm run check:assets            # fails on any external image URL or missing local file; lists empty photo slots
    npm run check:assets -- --strict  # same, and also fails while any software photo slot is empty or any licence is unverified (run before launch)
    npm run check:seo               # preferred hostname, redirects, canonicals and sitemap consistency

## Rules this project follows
- **Hero is locked.** `src/components/VideoHero.tsx` (and `WaveDivider.tsx`) must not be edited. The legacy colour tokens
  and `.eyebrow / .h-display / .lede / .btn-outline` classes exist only for it.
- **No invented facts.** Numbers, client logos, testimonials and vacancies come only from `src/data/verified.ts`
  (currently empty → sections fall back to qualitative content or are omitted).
  The previous, unverified content is archived (unused) in `src/data/legacy-unverified.ts`.
- **All images are local.** Photos live in `public/assets/images/` via `<Photo name="folder/file" />`; credits in
  `public/assets/images/IMAGE-CREDITS.txt`. Only external embed: the Google Maps iframe on /contact.
- Company identity and contact details: `src/data/site.ts`.
- Contact form: set `VITE_FORM_ENDPOINT` (see `.env.example`) at build time for a real POST. Without it the form only opens the visitor's email app and says plainly that nothing has been sent. Success is shown only after a 2xx response.
- Preferred hostname: `site.url` in `src/data/site.ts` (currently the apex `https://tcscorp.co.in`). Pages pass root-relative canonicals. To switch to www, change that line, flip the redirects in `public/.htaccess`, `public/_redirects`, `vercel.json`, update `index.html`, `sitemap.xml`, `robots.txt`, and run `npm run check:seo`.
- Page headers: `PageHeader` requires an explicit `variant`: `photo`, `tech`, `editorial` or `utility`. Photo headers pick up `industries/<slug>` and software photos automatically once those files exist.

## Software & Technology Solutions division
- Routes: `/software` (overview) and `/software/<slug>` for the five services. Content lives in `src/data/software.ts`;
  homepage entry point is `src/components/home/TechnologySolutions.tsx` (placed after the HR solutions section).
  HR routes (`/services/...`) are unchanged.
- Copy rules: describe what Turvi *can scope and build*. No client names, projects, testimonials, statistics, awards,
  certifications or guaranteed outcomes. Add verified facts only via `src/data/verified.ts`.
- Photography: five local slots under `assets-src/images/software/` (see `ASSET_SOURCES.md`). Until a photo is added the
  pages use text-led layouts; add the JPG, record its source/licence in `assets-src/images/sources.json`, run `npm run images`.
- Enquiries: `/contact?type=software&service=<title>` pre-selects the enquiry type and prefills the message.

## Interactive tools (`src/components/tools/`)
- `SolutionConfigurator` (on /software): goal → scale → timeline → scope preview and a pre-filled consultation link. Ranges live in `src/data/configurator.ts` and are planning assumptions the owner must approve.
- `HiringCalculator` (on /hiring-calculator): assumptions and compliance checklist in `src/data/hiringModel.ts`; export via print/PDF, copy summary and CSV.
- `TechStackExplorer` and `CaseStudyExplorer` use the `SlideOver` drawer. Not placed on any page yet. Metrics (`techStack.ts`) and case studies (`caseStudies.ts`) are empty until real, sourced figures are added; `caseStudies.sample.ts` is illustrative only and is badged as such.
- Next.js: components carry `'use client'`; replace the body of `AppLink.tsx` with `next/link`.

## Pre-launch notes (Brief 3)
- Homepage order below the locked hero: trust, intro, services, why Turvi, process, industries, employers, candidates, technology, business tools, insights, trust information, final enquiry.
- HR service pages: `src/data/serviceDetails.ts` holds the extended content for the six priority services. Other services keep the shorter layout.
- `/services#compare` is the service comparison; WhatsApp links carry the enquiry type or service (`whatsappContext` in `site.ts`).
- Security headers: `vercel.json`, `public/_headers`, `public/.htaccess`. A strict Content-Security-Policy is not set; write and test one against the final third-party list first.
- Routes are lazy-loaded except Home.
