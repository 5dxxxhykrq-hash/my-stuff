# My Stuff

Personal dashboard for 2026–2028 study, fieldwork, polar / marine projects, applications, certifications, visas and travel.

## Structure

- `index.html` — single-page dashboard
- `styles.css` — responsive visual system
- `app.js` — project data, filters, timeline, local status + notes

## Publishing with GitHub Pages

This site is static and can be published directly from the repository root.

1. Open **Settings → Pages**
2. Under **Build and deployment**, choose **Deploy from a branch**
3. Select **main** and **/(root)**
4. Save

After Pages is enabled, GitHub will provide the public URL.

## Editing

Project content lives in the `projects` array in `app.js`. Status selections and notes made in the webpage are saved only in the current browser via `localStorage`.
