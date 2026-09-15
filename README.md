# ScrapCo

A full-stack web application for scrap material trading. Monorepo — merged from previously separate `ScrapCo_Frontend` and `ScrapCo_Backend` repos.

- [`frontend/`](./frontend) — React + Vite client (see [frontend/README.md](./frontend/README.md))
- [`backend/`](./backend) — Node/Express + Prisma API (see [backend/README.md](./backend/README.md))

Full commit history of both original repos is preserved in this repo.

**Security note:** the original frontend repo had a `.env` file committed to git history. It has since been scrubbed from history with `git filter-repo` and force-pushed. Any real credentials it held should still be rotated if that hasn't been done already.
