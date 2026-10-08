# Segmented control animation examples

Recreated from the Figma Make file "Create segmented control animation".

A React + Vite + Tailwind CSS v4 playground comparing segmented control
selection animations (none, colour fade, slide, scale-fill variants) across
sizes, emphasis levels, icon/text variants and widths.

## Run

```sh
pnpm install
pnpm dev      # http://localhost:8443
pnpm build
```

- `src/App.tsx` – segmented control component and all animation examples
- `src/index.css` – Tailwind import and animation keyframes
- `src/imports/Frame15296` – original Figma frame import (reference, not used by the app)
- `.figma/make` – Figma Make tooling; `site.json` is read by `vite.config.ts`
