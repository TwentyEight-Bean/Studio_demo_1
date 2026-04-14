
# High-End Photography Portfolio

This project has been migrated to Next.js App Router with SSR + SSG split by module, while preserving the original UI style.

## Stack

- Next.js 15 (App Router)
- React 18
- Tailwind CSS v4
- Prisma + Neon PostgreSQL
- Cloudinary for image hosting and delivery

## Run locally

1. Install dependencies:

   `npm install`

2. Create env file from template:

   `cp .env.example .env.local`

3. Start dev server:

   `npm run dev`

4. Build production:

   `npm run build`

## Data and media

- Prisma schema: `prisma/schema.prisma`
- Cloudinary helper: `src/lib/cloudinary.ts`
- Upload signing endpoint: `src/app/api/upload/sign/route.ts`

## SEO + posts

- Blog index: `src/app/blog/page.tsx`
- Blog post SSG page: `src/app/blog/[slug]/page.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- SEO rollout guide: `guidelines/SEO_POST_PLAN.md`
  