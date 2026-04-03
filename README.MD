# Portfolio

This project is the source repository for the page published at `https://lucasischow.github.io/`.

## Publish flow

1. Push changes to `main`.
2. GitHub Actions builds the static export from this Next.js app.
3. The generated `out/` files are copied into `lucasischow/lucasischow.github.io`.
4. GitHub Pages serves the updated root site from that target repository.

## Demo hosting

Large demos can stay in the target Pages repository and be linked from this app.

- Default demo base URL in production: `https://lucasischow.github.io`
- Override it in GitHub repository variables with `NEXT_PUBLIC_DEMO_BASE_URL`

Example:

- Portfolio page: `https://lucasischow.github.io/`
- Demo link in data: `/demos/misc/paint-board`
- Resolved demo URL: `https://lucasischow.github.io/demos/misc/paint-board`

## Why this is simpler

- No more copying `out/` into another local repository by hand
- This repo stays focused on page code
- Demos can remain in the Pages repository

## Required GitHub secret

Add a repository secret named `PAGES_DEPLOY_TOKEN` in this source repository.

That token needs permission to push to `lucasischow/lucasischow.github.io`.
