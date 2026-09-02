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
- **About page milestone photos**: `about.html`'s "The Road So Far" and "Before the Bench" sections
  have several `.milestone-photo` / `.scope-placeholder` boxes (CreArtBot, BirdBrain Technologies,
  France) — replace each with a real `<img>` once you have the photos.
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
