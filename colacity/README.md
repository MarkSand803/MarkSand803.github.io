# Cola City Buccaneers — Franchise Website

A responsive, official-style franchise website built with **HTML, CSS, JavaScript, and Node.js**. The site uses the provided Buccaneers logo and Minecraft/YFL game screenshots.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

No external packages are required. Google Fonts are loaded from the web; system fallbacks are included.

## Deploy to GitHub Pages

GitHub Pages serves static files, so it does not run `server.js`. To publish this site:

1. Create a GitHub repository, for example `cola-city-buccaneers`.
2. Upload `index.html`, `styles.css`, `script.js`, and the `assets/` folder to the repository root.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the Pages deployment to finish. The site URL will appear in the Pages settings.

Keep `server.js` and `package.json` in the repository if you also want to run it locally or deploy to a Node.js host such as Render. GitHub Pages itself only hosts the static front end.

## Updating the season schedule

The schedule section is intentionally marked **Season Schedule Pending**. When the schedule is announced, edit the schedule content in `index.html` and replace the status panel with game dates, opponents, and kickoff times.

## Project structure

```text
cola-city-buccaneers/
├── index.html
├── styles.css
├── script.js
├── server.js
├── package.json
├── README.md
└── assets/
    ├── buccaneers-logo.jpeg
    └── game screenshots...
```

## Content notes

- Franchise records, awards, dates, and lore are based on the information supplied for this site.
- Season 20 is shown as the current season with a 0–0 record and pending schedule.
- The provided all-time record is shown as 21–28.
