# Ken Suthat — Portfolio (handoff from the claude.ai "Portfolio website" chat)

Bilingual (TH/EN) portfolio + résumé site built with Astro. Live: https://kensukeimagery.github.io
Repo: Kensukeimagery/kensukeimagery.github.io — push to `main` → GitHub Actions builds and deploys (`.github/workflows/deploy.yml`).
Main focus of the content: on-camera (presenter/actor) and sales work.

## Commands
- `npm install`, `npm run dev` (http://localhost:4321), `npm run build`
- `npm run pdf` — generates résumé PDF/PNG into dist/ (run after build; uses Playwright Chromium, or Chrome/Edge installed locally); each PDF must stay 1 page.
- `npm run check` — privacy check on dist/ (no full birthdate, LINE ID, salary); runs in CI before deploy.
- `npm run add-image -- <file> <portraits|film|work> [key]` — resizes to 800/1600 WebP and registers in images.json.

## Where to edit
| What | File |
|---|---|
| Profile, work history, education, awards, contact | `src/data/profile.js` |
| Works / clips / reference links | `src/data/works.js` |
| Images | `src/data/images.json` + `public/img/` (800px and 1600px WebP) |
| Menu/button text | `src/data/i18n.js` |
| Colors, fonts, design | `src/styles/global.css` |

## Rules set by the owner
- No LINE ID on the site.
- Show age only, never the full birthdate.
- No salary on the site or in the public PDF/PNG (the "with salary" PDFs are private, not published).
- Design stays the ORIGINAL style (boxed cards, film grain + glows, ✦ bullets, boxed category buttons, red pulsing "coming soon" badge, "scroll" hint). Do NOT make it minimal — owner explicitly reverted that.
- Profile & Résumé page: keep the boxed look + work-history timeline.

## Recent state
- CIMB THAI "Reminder Man" clip + 4 event photos (lightbox) in the ads category are live. The 5th photo (group shot with staff) was left out.
- ENTAKU exhibition "อยากอวยให้ทุกครั้ง" (Palette Artspace floors 3–4, Bangkok, 14 Oct – 4 Nov 2026) is live with 4 photos; owner will add photos from the real show after visiting.
- Side projects section (Windows 11 Optimizer) on profile page.

## Open items (waiting on owner)
- Change "10+ brands" to "20+"?
- (done) Work email is set: contact.suthat@gmail.com.
- TECNO and POSEE clips once aired.
- 5th CIMB photo (group shot).

## Security
- gh is already logged in as Kensukeimagery (no token needed).
- Never paste GitHub tokens in chat/files. A token was exposed in the old chat — revoke it. Use `gh auth login` for pushing.
