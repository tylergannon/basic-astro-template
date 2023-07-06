# My Astro Starter

This is basically a copy of the [Astroship](https://github.com/surjithctly/astroship) template for
[🚀 Astro](https://astro.build/), with a few minor modifications:

- Use the [Experimental Astro Assets](https://docs.astro.build/en/guides/assets/) features
  instead of the `@astrojs/image` component.
- Add basic [Picture component](https://github.com/tylergannon/astro-picture-element)
  for art direction.
- eslint configuration.
- prettier.
- Husky pre-commit to validate application.
- VSCode extensions configuration.
- Favicon configuration ... just plug in your image.

If you like this template, please consider purchasing a license from
[web3templates](https://web3templates.com/) (no affiliation).

## Getting Started

### Create New Astro App Using Template

```
pnpm create astro@latest \
  --template tylergannon/basic-astro-template \
  --install \
  --git \
  --skip-houston \
  --typescript strictest \
  my-app
```

### Basic Stuff

- [ ] Replace favicon and correct the url in Layout / head tag.
- [ ] Open appConfig.ts and set up data for your application.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm lint`            | Runs prettier and eslint to verify application.  |
| `pnpm format`          | Runs prettier to reformat files.                 |
| `pnpm check`           | Runs `astro check` to validate application.      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
