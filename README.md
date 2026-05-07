# dawsonriggs.com

A polished single-page professional website for Dawson Riggs, built as a living version of a LinkedIn profile and resume. The site focuses on healthcare interoperability, EHR integrations, customer-facing technical problem solving, implementation delivery, project work, and future writing.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static content for fast, simple deployment
- Vercel-ready project structure

## Setup

Install dependencies:

```bash
npm install
```

## Local development

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Production build

Create a production build locally:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Deployment to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js build settings:
   - Build command: `npm run build`
   - Output: managed by Next.js
4. Add `dawsonriggs.com` as the production domain in Vercel.
5. Update DNS records as instructed by Vercel.

## Where to edit content

Most website content lives in one editable configuration file:

- `src/data/site.ts`

Update this file to change:

- Hero copy and calls to action
- LinkedIn link and contact instructions
- Navigation labels
- About/story paragraphs
- Expertise cards
- Experience highlights and dates
- Project cards and placeholder GitHub/demo links
- Writing placeholders and article links
- Values and contact copy

Reusable UI components live in `src/components/`:

- `Section.tsx`
- `Card.tsx`
- `ProjectCard.tsx`
- `ExperienceItem.tsx`
- `CTAButton.tsx`

The home page route lives at `src/app/page.tsx`, with sitewide metadata in `src/app/layout.tsx`. The first writing article lives at `src/app/writing/healthcare-integrations-debugging/page.tsx`.

## Future improvements

This project is intentionally structured so it can grow beyond a single page. Good next additions include:

- Additional blog posts using MDX or a headless CMS
- Project detail pages under `/projects/[slug]`
- Downloadable resume page or asset
- Speaking/writing archive
- Contact form backed by a transactional email service
- Newsletter/content archive
- Real Open Graph image asset
- Analytics and privacy-friendly event tracking
