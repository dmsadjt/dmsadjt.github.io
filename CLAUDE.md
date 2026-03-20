# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website deployed via GitHub Pages. No build tooling, no package manager, no compilation step — edit files and push to deploy.

## Architecture

Single-page site (`index.html`) with:
- **Bootstrap 5.2.2** loaded from CDN for layout and components
- **Google Fonts** (Montserrat) loaded from CDN
- `index.css` — custom styles and responsive media queries (breakpoint: 900px)
- `app.js` — currently empty
- `style.css` — currently empty
- `img/` — all local image assets (social icons, backgrounds, project screenshots, profile photos)

Content sections in order: Hero → About → Stacks → Projects → Contact.

Responsive visibility is handled with custom classes `r-hide` / `r-show` to swap desktop vs. mobile layouts.

## Development

No build step. Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
# or
python -m http.server
```

Deploy by pushing to the `main` branch — GitHub Pages serves the repo root automatically.
