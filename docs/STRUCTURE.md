# Project Structure

## Folder Layout

```
bitexen-mvno-proposal/
├── docs/                          # Project documentation
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
├── public/
│   └── images/                    # Static images, logos, icons
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind + shadcn theme
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page (single-page proposal)
│   ├── components/
│   │   ├── sections/              # Page section components
│   │   │   ├── site-header.tsx
│   │   │   ├── executive-summary.tsx
│   │   │   ├── fintech-arsenal.tsx
│   │   │   ├── property-map.tsx
│   │   │   ├── dsg-ecosystem.tsx
│   │   │   ├── operating-model.tsx
│   │   │   ├── delivery-journey.tsx
│   │   │   ├── platform-capabilities.tsx
│   │   │   ├── gtm-enablement.tsx
│   │   │   ├── product-tiers.tsx
│   │   │   ├── crypto-rewards.tsx
│   │   │   ├── vas-services.tsx
│   │   │   ├── revenue-model.tsx
│   │   │   ├── commercial-model.tsx
│   │   │   ├── implementation-roadmap.tsx
│   │   │   └── cta.tsx
│   │   └── ui/                    # shadcn UI primitives
│   ├── content/                   # Static content data (TS)
│   │   └── proposal.ts
│   └── lib/
│       └── utils.ts               # Utility functions
├── components.json                # shadcn configuration
├── next.config.ts                 # Next.js configuration
├── package.json
├── tsconfig.json
└── pnpm-lock.yaml
```

## Section Composition Rules

1. **Each section is a self-contained component** in `src/components/sections/`
2. **Content data lives in `src/content/`** as TypeScript objects — sections import from here, not hardcode content
3. **UI primitives from shadcn** (`src/components/ui/`) are composed into section components — never modified directly
4. **The home page** (`src/app/page.tsx`) imports and stacks all section components in order
5. **No page routing** — this is a single-page proposal site with anchor-linked sections

## Content Management Approach

- All proposal content is stored as static TypeScript data in `src/content/proposal.ts`
- Content changes require code edits and redeployment
- No CMS, no database, no API calls for content
- Images are served from `public/images/`
- This approach is intentional — the site is a fixed proposal document, not a dynamic application
