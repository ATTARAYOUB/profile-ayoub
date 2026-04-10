# Ayoub Attar — Portfolio

Premium portfolio website for **Attar Ayoub**, Healthcare Tech Expert & Full Stack Developer.

## 🌐 Live URLs

| Platform | URL | Status |
|----------|-----|--------|
| Vercel   | https://attarayoub.vercel.app | Primary ✅ |
| GitHub Pages | https://attarayoub.github.io/portfolio | Backup ✅ |
| Netlify  | https://ayoubattar.netlify.app | Extra ✅ |

## Tech Stack

React 18, Vite, Tailwind CSS v3, Framer Motion, React Icons

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

---

## 🚀 Deployment Guide

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio Ayoub Attar"
git branch -M main
git remote add origin https://github.com/ATTARAYOUB/portfolio.git
git push -u origin main
```

For updates:
```bash
git add .
git commit -m "Update portfolio"
git push
```

---

### Option 1 — Vercel (Recommended ⚡)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (free)
3. Click **Add New Project** → Import `ATTARAYOUB/portfolio`
4. Settings:
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click **Deploy**
6. Customize subdomain: Project Settings → Domains → Edit → `attarayoub.vercel.app`

Auto-deploys on every `git push` ✅

---

### Option 2 — GitHub Pages (Free forever)

**Method A — GitHub Actions (automatic):**

The `.github/workflows/deploy.yml` file is already configured.
Just push to `main` — it deploys automatically.

Then go to: **GitHub repo → Settings → Pages → Source → gh-pages branch**

Your URL: `https://attarayoub.github.io/portfolio`

**Method B — Manual deploy:**

```bash
npm install
npm run deploy
```

> Note: GitHub Pages uses `base: '/portfolio/'` via the `VITE_BASE_PATH` env variable set in the workflow.

---

### Option 3 — Netlify

**Method A — Drag & Drop (fastest, no GitHub needed):**

1. Run `npm run build` locally
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist/` folder onto the page
4. Instant deploy ✅
5. Site Settings → Change site name → `ayoubattar`
6. URL: `https://ayoubattar.netlify.app`

**Method B — GitHub auto-deploy:**

1. Go to [netlify.com](https://netlify.com) → New site from Git
2. Connect GitHub → Select `ATTARAYOUB/portfolio`
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy ✅

---

## 🆓 Free Custom Domain Options

| Option | Domain | Cost | Notes |
|--------|--------|------|-------|
| Vercel subdomain | `attarayoub.vercel.app` | Free forever | Instant |
| GitHub Pages | `attarayoub.github.io/portfolio` | Free forever | Instant |
| Netlify subdomain | `ayoubattar.netlify.app` | Free forever | Instant |
| is-a.dev | `ayoubattar.is-a.dev` | Free forever | PR approval ~1-2 days |
| GitHub Student Pack | `ayoubattar.me` | Free 1 year | Needs student email |

### Get ayoubattar.is-a.dev (free forever):

1. Go to [github.com/is-a-dev/register](https://github.com/is-a-dev/register)
2. Fork the repo
3. Create file: `domains/ayoubattar.json`
4. Content:
```json
{
  "owner": {
    "username": "ATTARAYOUB"
  },
  "record": {
    "CNAME": "attarayoub.vercel.app"
  }
}
```
5. Submit Pull Request
6. Wait 1–2 days → live at `https://ayoubattar.is-a.dev` ✅

---

## 🛠️ Troubleshooting

| Problem | Fix |
|---------|-----|
| White screen after deploy | Check `base` in `vite.config.js` — Vercel/Netlify: `'/'`, GitHub Pages: `'/portfolio/'` |
| Images not showing | `profile.png` must be in `public/` — use `src="/profile.png"` |
| 404 on page refresh | `vercel.json` rewrites ✅ / `netlify.toml` redirects ✅ / `404.html` trick ✅ |
| Build fails | Run `npm run build` locally first, fix errors, then push |
| CV not opening | `cv-print.html` must be in `public/` folder |
