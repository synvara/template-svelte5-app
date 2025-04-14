# Svelte 5 Application Template (using Bun)

[![Use this template](https://img.shields.io/badge/use%20this-template-brightgreen)](https://github.com/synvara/template-svelte5-app/generate)

This repository provides the standard starting point for new Svelte 5 projects at Synvara, pre-configured to use **Bun** as the package manager and runtime. Built with SvelteKit, TypeScript, and Vite, it includes essential tooling configured out-of-the-box to ensure code quality and consistency.

## Included Features

- **Framework:** Svelte 5 / SvelteKit
- **Language:** TypeScript
- **Build Tool:** Vite
- **Package Manager & Runtime:** Bun
- **Linting:** ESLint configured with recommended rules
- **Formatting:** Prettier integrated for consistent code style
- **Unit Testing:** Vitest setup ready for writing unit tests

## Using This Template

1. Click the "**Use this template**" button above (or update and use [this link](https://github.com/synvara/template-svelte5-app/generate)) to create a **new repository** based on this template. Give your new project a unique name.
2. Clone your newly created repository (NOT the template itself):
   ```bash
   git clone <your-new-repository-url>
   cd <your-new-repository-name>
   ```
3. Install dependencies using **Bun**:
   ```bash
   bun install
   ```

## Development

To start the development server (powered by Vite):

```bash
bun run dev

# Or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Available Scripts

This template includes the following scripts defined in `package.json`. Use them with `bun run <script_name>`:

- `dev`: Starts the development server using `vite dev`.
- `build`: Builds the application for production using `vite build`.
- `preview`: Previews the production build locally using `vite preview`.
- `prepare`: A lifecycle script (runs automatically after `bun install`) that ensures SvelteKit type definitions are generated (`svelte-kit sync`).
- `check`: Syncs types (`svelte-kit sync`) and runs TypeScript type checking using `svelte-check`.
- `check:watch`: Syncs types (`svelte-kit sync`) and runs `svelte-check` in watch mode for continuous type checking during development.
- `format`: Formats code in the project using Prettier (`prettier --write .`).
- `format:check`: Checks code formatting using Prettier without modifying files (`prettier --check .`).
- `lint`: Checks formatting (`prettier --check .`) and then runs ESLint (`eslint .`) to identify potential code issues.
- `test:unit`: Runs unit tests using Vitest (`vitest`), likely starting in **watch mode** by default.
- `test`: Runs unit tests using Vitest **once** (`vitest --run`), suitable for CI environments or single test runs.

## Building for Production

To create an optimized production version of your app:

```bash
bun run build
```

You can preview the production build locally using `bun run preview`.

**Deployment:** To deploy your app, you will likely need to install a SvelteKit adapter suitable for your target environment (e.g., adapter-node, adapter-static, adapter-vercel). You can add one by running `bun add -D @sveltejs/adapter-<name>` and updating your svelte.config.js file accordingly.

## Contributing to the Template

(Optional: If you expect others to help improve this template repository itself, add contribution guidelines here. Otherwise, you can remove this section.)
