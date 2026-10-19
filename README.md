<div align="center">
  <img src="assets/gdgc.png" alt="gdgc logo" width="120" />

# GDGC Web

</div>

---

## Setting up the project

### Prerequisites

### Node.js installation

We use **[NVM (Node Version Manager)](https://github.com/nvm-sh/nvm)** to manage Node.js versions across the team.

Once NVM is available, install the Node.js version required by the project (as defined in `.nvmrc`):

```bash
nvm install
nvm use
```

If you already have the required version, simply run `nvm use` to switch to it. This ensures everyone runs the same Node.js version, avoiding version‑related issues.

#### PNPM installation

Install it by doing the following:

```bash
corepack enable
```

Depedency installation:

```bash
pnpm i
```

To start all applications in development mode:

```bash
pnpm dev
```

The development servers will be running at:

- Backend: `http://localhost:8000`

### Keeping a clean codebase

We rely on [oxc](https://github.com/oxc-project/oxc) to keep the codebase clean and consistent with linting and formatting.

If you want to manually run Biome commands yourself:

```bash
pnpm lint
pnpm lint:fix # fix formatting issues
```

#### Documentation

We recommend usage of the [`JSDoc`](https://jsdoc.app/) syntax to document code. This will help other developers understand the function of code more easily, as names can be misleading.

For example:

```ts
/**
 * Adds two numbers together
 *
 * @param a The first number
 * @param b The second number
 * @returns The sum of the two numbers
 */
export const add = (a: number, b: number): number => a + b;
```

### Environment Variables

The apps have a `.env.example` file that serves as a template. To set up your environment:

1. Copy each `.env.example` file to `.env` in its respective directory
2. Edit the values according to the keys in each file

For example:

```bash
# Within the directory
cp .env.example .env
```

Then edit each `.env` file with the appropriate values.

### Type Generation

We use Payload's built in code generation to generate types for our project. To do this, you can run the following command:

```bash
pnpm generate:types
```

## Tech Stack

The project is _mainly_ built around the following technologies:

- [Turborepo](https://turbo.build/repo)
  - Our monorepo build system that helps us manage multiple applications and packages efficiently, enabling faster builds and better dependency management.
- [Next.js](https://nextjs.org/)
  - Powers our frontend application using the [App Router](https://nextjs.org/docs/app) architecture. Note that you will need to have some understanding of [React](https://react.dev/learn) to work on this project.
- [PayloadCMS](https://payloadcms.com/)
  - Mostly used just for managing data and defining our data structure. You will have to familiarise yourself with how to use Payload's [local API](https://payloadcms.com/docs/local-api/overview).
- [React](https://react.dev/)
  - The UI library that Next.js builds upon, providing component‑based architecture, hooks, and state management. Essential for building interactive interfaces.
