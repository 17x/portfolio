# Portfolio

This project is a React + Vite source repository for the page published at `https://lucasischow.github.io/`.

## Publish flow

1. Push changes to `main`.
2. GitHub Actions runs the same `gh-pages` deployment flow used locally.
3. The generated `dist/` files are pushed into `lucasischow/lucasischow.github.io`.
4. GitHub Pages serves the updated root site from that target repository.

## Demo hosting

Large demos can stay in the target Pages repository and be linked from this app.

- Default env file: [`.env`](/Users/yahone/projects/portfolio/.env)
- Production env file: [`.env.production`](/Users/yahone/projects/portfolio/.env.production)
- Default demo base URL in production: `https://lucasischow.github.io`
- Override it in GitHub repository variables with `VITE_DEMO_BASE_URL`

Example:

- Portfolio page: `https://lucasischow.github.io/`
- Demo link in data: `/demos/misc/paint-board`
- Resolved demo URL: `https://lucasischow.github.io/demos/misc/paint-board`

## Why this is simpler

- No more copying build output into another local repository by hand
- This repo stays focused on page code
- Demos can remain in the Pages repository

## Required GitHub secret

Add a repository secret named `PAGES_DEPLOY_KEY` in this source repository.

It should be the private SSH key for a keypair that has push access to `lucasischow/lucasischow.github.io`.
