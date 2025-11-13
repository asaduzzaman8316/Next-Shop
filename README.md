<!--
  README for: E-Commerce02 (Asad-Shop)
  Auto-generated: tailored to the repository contents (React + TypeScript + Vite + Tailwind)
-->

# Asad-Shop 

>A responsive, Vite + React + TypeScript e-commerce starter used as the project codebase for the Asad-Shop UI. This repository demonstrates a real-world web storefront with product grids, hero sections, sliders, cart functionality, and responsive layout powered by Tailwind CSS.

---

## Table of contents
- Project summary
- Quick start (install & run)
- Available scripts
- Project structure (high level)
- Key implementation details & patterns
- Responsive & accessibility notes
- Troubleshooting (common issues & fixes)
- Deploying
- Contributing
- License & contact

---

## Project summary

Asad-Shop is a client-side storefront built with:
- React (with TypeScript)
- Vite (fast dev server)
- Tailwind CSS for styling
- Redux Toolkit for state (cart counter slice present)
- react-slick for product carousels
- AOS for simple scroll animations

The app includes:
- Home page sections: hero, featured categories, popular products, daily best sells slider
- Product cards with hover states and quick actions
- Add-to-cart page with quantity management and subtotal calculation
- Footer and shared components

This README focuses on setting up, running, and maintaining the project.

---

## Quick start

Prerequisites
- Node.js (recommended 18.x or later)
- npm (bundled with Node) or yarn

Clone the repository and install dependencies:

```bash
git clone <repo-url> # or your fork
cd Asad-Shop
npm install
```

Run the dev server (Vite):

```bash
npm run dev
```

Open http://localhost:5173 (or the address Vite prints) to view the app.

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Lint the codebase (ESLint configured):

```bash
npm run lint
```

---

## Available scripts

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — TypeScript build then Vite production build (tsc -b && vite build)
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

Check `package.json` for the exact scripts and dependency versions.

---

## Project structure (high level)

Key folders/files you will use frequently:

- `src/` — application source
  - `main.tsx`, `App.tsx` — application bootstrap & routes
  - `Compomemts/` — shared and reusable components
    - `Share/Header/` — header, navbar, nav menu, header items
    - `Share/Footer/` — footer components
  - `Home/` — home page sections (Hero, Featured, ThreeCard, Popular Products, DailyBestSells)
  - `Pages/` — route pages (Shop, About, AddtoCart)
  - `Cart/` — Redux/cart slice and state management
  - `Loader/` — loading component and assets
- `public/` — static assets (contains loading.gif, Product.json, categories.json)
- `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`, `tailwind.config.*` — build & tooling configs
- `vercel.json` — small rewrite config for Vercel deployments

Note: Many components use Tailwind utility classes — the project also contains custom utility sizes (e.g. `w-150`) in some legacy locations; when editing, prefer responsive Tailwind utilities (e.g., `max-w-sm`, `w-full`, `sm:w-auto`) to avoid overflow.

---

## Key implementation details & patterns

- Data access
  - A `useData` custom hook is used across the site to fetch products and categories (check `src/Compomemts/Share/useData.tsx`). Some consumers expect an object return (e.g., `{ products, categories, isLoading }`). Avoid changing the hook's public API unless updating all callers.

- Cart state
  - Redux Toolkit is used for cart counters and actions (see `src/Cart/counterSlice.ts`). The cart page computes totals client-side and updates UI state.

- Responsive design
  - The project was progressively updated to be mobile-first. When implementing new UI, use Tailwind breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) and prefer `w-full`, `max-w-*`, responsive grids (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ...`) to avoid overflow.


- Sliders
  - `react-slick` is used. Configure `responsive` in settings to control `slidesToShow` per breakpoint (mobile should typically be `1`).

---

## Responsive & accessibility notes

- Accessibility
  - Add `alt` text for images (many components already do this), and ARIA attributes on interactive controls when appropriate (e.g., the mobile menu toggle has `aria-label`).

- Touch targets
  - Buttons and icons were updated for better touch size — use at least `44x44px` active tap area where possible.

- Overflow & horizontal scroll (common cause)
  - If the page shows horizontal overflow on mobile, inspect with devtools to find elements wider than the viewport (look for `width` greater than `100vw` or large `left/right` offsets). Common fixes:
    - Wrap app root with `overflow-x-hidden` (already added in `App.tsx`), but prefer fixing the root cause.
    - Replace fixed widths (e.g., `w-150`, large inline pixel widths) with responsive utilities (`w-full`, `max-w-*`).
    - Avoid `left-[25%]` / `top-[30%]` absolute offsets for action overlays; prefer transform centering (`left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`).
    - Remove unintended `overflow` or `transform` on parent elements when you need `position: sticky`/`fixed` children.

---

## Troubleshooting (common issues & fixes)

- Dev server crashes or exit code 130:
  - Try clearing caches and reinstalling:
    ```bash
    rm -rf node_modules package-lock.json
    npm install
    npm run dev
    ```

- Sticky navbar not sticking:
  - Ensure no ancestor of the navbar has `transform`, `filter`, or a CSS property that creates a new stacking context. Also prefer `position: fixed` with top padding on the main content if you need a reliable top bar.

- Horizontal overflow on mobile:
  - Use browser devtools to find the offending element (`Elements` tab → search for elements with width > viewport). Replace fixed widths, remove large absolute offsets, and add `overflow-hidden` to the smallest necessary container.

- Slider shows multiple slides on mobile:
  - Check `react-slick` `settings.responsive` and verify the smallest breakpoint sets `slidesToShow: 1` and `arrows: false`.

---

## Deploying

This project includes `vercel.json` for simple deployment rewrites. To deploy to Vercel:

1. Install the Vercel CLI (optional) and log in:
   ```bash
   npm i -g vercel
   vercel login
   ```
2. From the repo root run:
   ```bash
   vercel --prod
   ```

Vercel will run the `build` script and serve the `dist` output.

---

## Contributing

- Fork the repo, create a feature branch, and open a PR with a clear description.
- Keep changes focused and test at small and large viewport widths.
- If you change shared APIs (like `useData`), update all callers and add notes in the PR description.

Checklist for PRs:
- [ ] Runs locally: `npm install && npm run dev`
- [ ] No console errors in the browser
- [ ] Responsiveness verified at mobile/tablet/desktop
- [ ] Linting passes: `npm run lint`

---

## Contact & support

If you run into blockers, open an issue with:
- a short description of the problem
- reproduction steps
- browser/OS and Node version

---

## License

This project currently has no license file. Add one if you plan to distribute this project publicly (MIT is a common choice for starters).

---

If you'd like, I can also:
- Add a troubleshooting section with screenshots or devtools commands to find overflow elements
- Add automated linting/formatting (pre-commit hooks)
- Create a short CONTRIBUTING.md and CODE_OF_CONDUCT.md

Tell me which additions you want and I'll add them to the repo.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
