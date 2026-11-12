# Kishan | The Signal

A cinematic, Netflix-inspired portfolio for Kishan D Salian, with an animated opening sequence, a viewer profile selector, and profile-tailored content. Built with React and Vite.

**Live site:** https://saliankishan.github.io/portfolio/

## Stack

- React 18
- Vite 6
- CSS (responsive layouts, motion, reduced-motion support)
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Deploy

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages whenever changes are pushed to `main`.

In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. The Vite base path is configured for this repository at `/portfolio/`.

## Personalise

Update project details, skills and contact links in `src/main.jsx`. Replace the GitHub avatar in the hero with a preferred portrait when ready.

---

Built as a living portfolio: honest about what is complete, and open about what is still being learned.
