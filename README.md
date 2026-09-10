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
- **Awards**: moved off Publications (a 2016 undergrad award sat oddly next to peer-reviewed
  output) to a one-line "Selected highlight" note on `about.html`'s Turning Points timeline, no
  photo link. `assets/img/awards/2016-grand-prize.jpg` is unused now but still on disk if you want
  to bring the photo back somewhere.
- **Conference poster PDFs**: both `assets/posters/*.pdf` files were removed — neither entry links
  to a PDF anymore. The Korea BioChip Society (Jeju) poster instead has a "View photo" lightbox
  button pointing at `assets/img/travel/biochip-jeju-2025.jpg` (also used as that trip's photo in
  `js/travel-data.js`, pin id `biochip-jeju`); the Summer Symposium entry is now text-only. If you
  want a poster PDF linked again, add the file back under `assets/posters/` and link it the same
  way the symposium entry used to (recompress large posters by rasterizing at 150dpi with PyMuPDF).
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
- **Lightbox / illustration gallery** (`.illus-grid` of `.illus-item`, used on `figures.html` and
  `publications.html`'s `#pub-illustration` section): a `<button class="illus-item" data-full="..."
  data-caption="...">` with an `.illus-thumb > img` (a small, fast-loading thumbnail) opens the
  full-resolution image in a full-screen lightbox on click — the logic lives in `js/main.js`
  (`.illus-item[data-full], .link-btn[data-full]`) and needs a `<div id="lightbox">...</div>` block
  before `<script src="js/main.js">` on any page that uses it. An inline text button ("View full
  figure →") uses `class="illus-item link-btn"` — the `link-btn` styles strip the card chrome, and
  keeping `illus-item` on it means a stale cached `main.js` still binds it. A placeholder tile
  (nothing to click yet) is a plain `<div class="illus-item" style="cursor:default;">` with no
  `data-full`. Dense publication figures use `class="illus-thumb contain"` so the whole figure
  shows on a white background instead of a `cover` crop.
- **Figures**: large source files go in `assets/img/figures/` alongside a web-sized thumbnail
  (`-thumb.jpg`, ~640-700px) and a capped full-res (`-full.jpg`, ~1600-2000px). Reference the thumb
  in `.illus-thumb img` and the full in `data-full`. `figures.html` shows a 2×2 grid: three
  first-author review figures (Microsystems & Nanoengineering, 2026) — `graphical-abstract`,
  `heart-organization` (Figure 1), `figure7-applications.svg` + `fig-readouts-thumb.png` (Figure 7) —
  and one second-author (`biohybrid-actuators`, npj Robotics 2025 Figure 1). Source figures were in
  `대학원/이력정리/Microsystems&nanoengineering/` and `Downloads/Fig 1.png`.
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
- **Figures & Illustration** (`figures.html`, titled "Scientific Illustration & Visual
  Communication"): positioned as a demonstrated skill (structuring a concept → composition → final
  artwork), not a commercial pitch. Four real review figures in a 2×2 grid (3 first-author +
  1 second-author). A compact "Process / Tools" line sits under the grid (no separate stats cards).
  `publications.html`'s `#pub-illustration` section mirrors the three cardiac thumbnails as a teaser
  and links here; the npj Robotics entry links to `figures.html#fig-2025`.

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
