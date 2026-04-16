# Deployment

## Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)
- Git
- GitHub account
- Vercel account

## GitHub Setup

1. Create a new repository on GitHub (e.g., `bitexen-mvno-proposal`)
2. Initialise and push:

```bash
git init -b main
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-org>/bitexen-mvno-proposal.git
git push -u origin main
```

## Vercel Setup

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **Add New > Project**
3. Import the GitHub repository
4. Framework preset: **Next.js** (auto-detected)
5. Root directory: project root (leave blank)
6. Build command: `pnpm build`
7. Install command: `pnpm install`
8. Output directory: leave blank (Next.js default)
9. Click **Deploy**

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | Optional |

## Auto-Deployment

- Every push to `main` triggers a production deployment (~90 seconds)
- Pull requests create preview deployments automatically
- No `vercel.json` required — Next.js auto-configuration handles routing

## Custom Domain (Optional)

1. In Vercel project settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL is provisioned automatically

## Local Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Preview

```bash
pnpm build
pnpm start
```

## How to Redeploy

- **Automatic:** Push to `main` branch
- **Manual:** Vercel dashboard > Deployments > Redeploy
- **CLI:** `npx vercel --prod` (requires Vercel CLI login)

## Password Protection

To restrict access before stakeholder review, enable Vercel Password Protection:
1. Project Settings > General > Password Protection
2. Set a password
3. Share the password with authorised reviewers only
