# MV's Upskilling - Salesforce

A no-build, static 100-question multiple-choice Salesforce quiz app. Correct-answer positions are randomized and balanced across A/B/C/D.

## Files

Upload these files to the root of your GitHub repo:

- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `README.md`

Do not add `package.json`, `build.js`, `public/`, or `dist/`.

## Vercel settings

- Framework Preset: Other
- Build Command: leave blank
- Install Command: leave blank
- Output Directory: leave blank
- Root Directory: leave blank

## Certificate

The certificate unlocks when all 100 questions are answered and the final score is over 70%.

## Progress

Progress is saved in the browser using localStorage. Use the same browser/device to keep progress.

## Version notes

This corrected version uses only multiple-choice questions. Correct answer positions are distributed evenly: 25 answers in A, 25 in B, 25 in C, and 25 in D. The storage key was updated, so prior progress from the earlier version will not carry over.
