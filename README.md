# ScrapCo

A full-stack web application for scrap material trading. Monorepo — merged from previously separate `ScrapCo_Frontend` and `ScrapCo_Backend` repos.

- [`frontend/`](./frontend) — React + Vite client (see [frontend/README.md](./frontend/README.md))
- [`backend/`](./backend) — Node/Express + Prisma API (see [backend/README.md](./backend/README.md))

Full commit history of both original repos is preserved in this repo.

**Security note:** the original frontend repo had a `.env` file committed to git history. It has been removed from the working tree and gitignored as part of this merge, but the file — and whatever it contained — still exists in git history until that history is scrubbed (e.g. with `git filter-repo`) and any real credentials it held are rotated.
