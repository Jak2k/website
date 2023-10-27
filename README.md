# Jak2k's Website

## 🚀 Project Structure

- `src` - All the source
  - `components/demo` - Components I use in my posts
  - `content` - The content
    - `posts` - The posts of my site
    - `tags` - Additional details for the tags
  - `layouts` & `pages` - Some stuff for rendering the site
- `astro.config.mjs` - The config for the build tool
- `public` - static files
  - `BingSiteAuth.xml` & `google*******.html` - site verification for the search console

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm i`                  | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build the production site to `./dist/`          |
| `pnpm preview`            | Preview the build locally, before deploying     |
| `pnpm run astro ...`      | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help`| Get help using the Astro CLI                     |
