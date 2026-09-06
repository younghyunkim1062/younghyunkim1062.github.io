# Young Hyun Kim — Portfolio Site

Plain HTML/CSS/JS, no build step. Every page is a standalone `.html` file that shares
`css/style.css` and `js/main.js`.

## Structure

```
index.html            Main Page (hero video, research summary, featured pub, path teaser, blog teaser)
about.html             About (path narrative: maker -> international -> tissue engineer -> quant bioengineer)
research.html          Research overview + experience timeline
protocols.html         Research > Protocols (teaser cards, contact for full protocol)
figures.html           Research > Figures & Illustration (paper-figure portfolio)
publications.html      Publications + conference presentations
blog.html              Blog landing
blog-travel.html       Blog > Travel (interactive map)
blog-making.html       Blog > Making (robotics/education projects)
blog-gallery.html      Blog > Under the Scope (no-caption photo/video gallery)
grad-school.html       Blog > Grad School Notes, "From Bench to Paper" (self-study roadmap)
css/style.css          All styling (colors, fonts, layout)
js/main.js             Mobile nav + accordion behavior (shared across pages)
js/travel-data.js      Travel pin data — edit this to add trips
js/travel.js           Renders pins from travel-data.js onto the map SVG
assets/img/            Images (favicon included; add your own photos here)
assets/video/          Hero organoid clip (heart-organoid.webm/.mp4)
assets/CV_Younghyun_Kim.pdf   The actual CV, linked from every "Download CV" / nav "CV" link
```

### Nav structure

`Home | Research (Overview/Protocols/Figures & Illustration) | Publications | About | Blog (Overview/Travel/Making/Under the Scope/Grad School Notes) | CV`

`About` and `CV` are flat links (no dropdown) — About is a full page, CV opens the PDF in a new tab.
`Grad School Notes` lives only in the Blog dropdown + each Blog page's `.blog-subnav` pill row; it is
not a top-level nav item. To add a new flat nav item, edit the `<ul class="nav-links">` block in
every page (there's no shared include — this is plain HTML, so nav edits are find-and-replace across
files) and add an `active` class only on the page it points to.

## Things to fill in before you publish

- **Photo**: the profile-photo placeholder now lives in two places — the `about.html` hero
  (`.hero-photo-frame`) and a small circular avatar above "Connect" in every footer
  (`.footer-avatar`). Save an image to `assets/img/profile.jpg` and replace each `<div class="inner">`
  placeholder with `<img src="assets/img/profile.jpg" alt="Young Hyun Kim">`.
- **CV**: `assets/CV_Younghyun_Kim.pdf` is already the real CV — every "Download CV" button and the
  nav's "CV" link point there. Replace that file (same filename) whenever you have a newer version;
  no other changes needed.
- **About page milestone photos**: CreArtBot (video + 2 photos) and BirdBrain Technologies are filled
  in (see below); France (`.milestone-photo` in Turning Points and the Beyond the Lab card) is still
  a placeholder — replace it with a real `<img>` once you have a photo.
- **CreArtBot content (filled in)**: sourced from `대학원/이력정리/CreArtBot/` — `assets/video/creartbot.mp4`
  `.webm` (the 2017 project clip, silent/looping like the homepage organoid video) and
  `assets/img/about/{creartbot-exhibition,birdbrain-workshop}.jpg` on `about.html`'s Before the Bench;
  `assets/img/making/{carousel,commercialization,exhibition-snake}.jpg` as the 3 `blog-making.html`
  cards; and a real "business trip" pin (Pittsburgh — BirdBrain Technologies) on the travel map in
  `js/travel-data.js`, photo at `assets/img/travel/birdbrain-2018.jpg`. Many more CreArtBot
  photos/videos exist in that source folder (mostly HEIC/MOV, several projects per zip) if you want
  to swap in different ones later.
- **Awards photo + conference posters (filled in)**: `assets/img/awards/2016-grand-prize.jpg` on
  Publications' Awards entry (click to enlarge, via the shared lightbox). The Summer Symposium
  poster PDF is still linked at `assets/posters/2025-symposium-poster.pdf` (~26MB→recompressed
  posters should be rasterized at 150dpi with PyMuPDF; re-run that if you replace it with another
  large poster). The Korea BioChip Society (Jeju) poster's PDF was removed — that entry now links
  to the trip on `blog-travel.html` (pin id `biochip-jeju` in `js/travel-data.js`) instead; add a
  real photo to `assets/img/travel/` and the pin's `photos` array once you have one.
- **Contact links**: footer + hero buttons now use the real email (`younghyunkim@sju.ac.kr`) and
  Instagram (`@yh.bioatelier`). Google Scholar / LinkedIn / GitHub were removed for now since there's
  nothing to link yet — add them back into the footer `<p>` (same pattern as Email/Instagram) once
  you have profiles worth linking.
- **Travel pins**: edit `js/travel-data.js`. Each pin needs `name`, `tag`, `category` (one of the
  keys in `TRAVEL_CATEGORIES` — `home` / `exchange` / `business` / `personal`, or add your own),
  `lat`/`lon` (real-world decimal-degree coordinates — search "`<city name>` latitude longitude"
  to find them), `episode` (text), and `photos` (array of image paths in `assets/img/travel/`).
  The map itself (`blog-travel.html`) is a real equirectangular world map generated from
  public-domain (CC0) country boundary data, so any real lat/lon will land in the right place.
  Pins are color-coded by category, and a filter bar above the map (all/home/exchange/business/
  personal) is generated automatically from whatever categories your pins use — add a new key to
  `TRAVEL_CATEGORIES` and a matching filter button appears with no other changes needed.
- **Making projects**: `blog-making.html` has 3 placeholder cards — copy/edit the
  `.card.post-card` blocks with your own robotics-education project photos and write-ups.
- **Under the Scope**: `blog-gallery.html` is a deliberately light, no-explanation photo/video
  gallery (`.scope-grid` of `.scope-item` tiles) — organoid footage, interesting microscope
  captures, etc. Replace a `.scope-placeholder` div with `<img src="assets/img/scope/...">` for a
  photo, or `<video src="..." muted loop autoplay playsinline>` for a short clip (keep clips light —
  a few seconds, compressed). Keep the `.video-badge` play icon on video tiles, drop it for stills.
  Captions (`.scope-caption`) are one line only, on purpose — this page is meant to be scanned, not
  read. Add `.wide` to a `.scope-item` for a 16:10 tile instead of square.
- **Lightbox / illustration gallery** (`.illus-grid` of `.illus-item`, used on `about.html`'s
  "Scientific Illustration" section and `figures.html`'s `#fig-2026` card): a `<button class="illus-item"
  data-full="..." data-caption="...">` with an `.illus-thumb > img` (a small, fast-loading thumbnail)
  opens `assets/CV`-style full-resolution image in a full-screen lightbox on click — the logic lives
  in `js/main.js` and needs a `<div id="lightbox">...</div>` block (copy it from `about.html`, right
  before `<script src="js/main.js">`) present on any page that uses `.illus-item`. A placeholder
  gallery tile (nothing to click yet) should be a plain `<div class="illus-item" style="cursor:default;">`
  with no `data-full`, not a `<button>`.
- **Figures**: large source files (e.g. hand-drawn schematics exported from Inkscape) go in
  `assets/img/figures/` alongside a pre-cropped, web-sized PNG thumbnail (keep the big source out of
  `.illus-thumb img` — only reference it via `data-full` for the lightbox, so the page itself stays
  light). `assets/img/figures/figure7-applications.svg` + `fig-readouts-thumb.png` is the first
  example of this pair.
- **Research > "Visual overview"**: a 2-column `.illus-grid` (4 placeholder tiles — Figure A–D,
  covering organoid fabrication, Ca²⁺ phenotype, iCAMAnalyzer, and multi-organoid scalability) sits
  in the Master's Thesis section. Each placeholder is a plain `<div class="illus-item"
  style="cursor:default;">`; once you have the real figure files, follow the same pattern as the
  Scientific Illustration gallery above — save a full-res source + a cropped/resized PNG thumbnail
  to `assets/img/figures/`, then swap the placeholder `<div>` for a `<button class="illus-item"
  data-full="..." data-caption="...">`.
- **Grad-school guide** (`grad-school.html`, titled "From Bench to Paper"): a self-study roadmap
  built as **shared Foundations → two tracks**. An inline SVG "fork" diagram at the top shows the
  split; below it are three `.accordion` groups, each preceded by a `.track-group-head`:
  Foundations (mustard step numbers), **Track A — Experimental research → thesis** (teal step
  numbers, `.step-num.track-a`), and **Track B — Review & synthesis → paper** (coral step numbers,
  `.step-num.track-b`). Track A/B steps are anchored to your real work and cross-link to
  Research / Figures / Publications. To add a study link, copy an
  `<a class="resource-link" ...><span class="arrow">↗</span> Label</a>` chip; to add a step, copy a
  `.accordion-item` inside the relevant track's `.accordion`. The "programs you'll live in" tool
  grid (ImageJ / Inkscape / Prism, each a `.card` with a `.tool-icon` SVG) sits at the bottom. If
  you edit the fork diagram's labels, update the matching track headers so they stay in sync.
- **Protocols**: `protocols.html` currently only shows public summaries + "request full protocol."
  If you'd rather make some protocols fully public (or sell them), edit that page directly.
- **Figures & Illustration**: `figures.html` has 3 placeholder cards — one per publication
  (`#fig-2026`, `#fig-2025`) plus one for the iCAMAnalyzer interface. Swap the `.thumb` gradient
  placeholders for `<img>` tags pointing to real figure images, and fill in the "Tools & Approach"
  cards at the bottom (software you use, how you approach a figure). Each publication card links to
  its full citation on `publications.html`, and each publication entry links back with "→ See the
  figure design" — both use matching `id` anchors (`#pub-2026`/`#fig-2026`, etc.), so keep the pair
  in sync if you rename or add publications. This page is deliberately positioned as a demonstrated
  research skill (tied to your real publications) rather than a commercial pitch — if you start
  taking paid figure commissions later, add that as a section on this same page rather than a new tab.
  (The iCAMAnalyzer card only shows a screenshot/diagram — it doesn't require the source code to be
  public.)

## Preview locally

No install needed beyond Python (already on your machine):

```
cd portfolio-site
python -m http.server 8080
```

Then open `http://localhost:8080` in a browser.

## Deploy to GitHub Pages

Already live at **https://younghyunkim1062.github.io** (repo:
`github.com/younghyunkim1062/younghyunkim1062.github.io`, GitHub Pages serving from `main` / `/(root)`).

Updating the live site after any local edit is just:
```
git add .
git commit -m "describe the change"
git push
```
GitHub Pages redeploys automatically within a minute or two.

Optional custom domain later: add a `CNAME` file with your domain, and point your domain's DNS to
GitHub Pages (GitHub's docs walk through the exact records) — the repo name stays
`younghyunkim1062.github.io` either way, only the domain in front of it changes.
