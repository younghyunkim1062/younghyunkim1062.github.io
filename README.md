# Young Hyun Kim — Portfolio Site

Plain HTML/CSS/JS, no build step. Every page is a standalone `.html` file that shares
`css/style.css` and `js/main.js`.

## Structure

```
index.html            Main Page (hero, research summary, featured pub, year timeline, blog teaser)
grad-school.html       How to Start Graduate School (accordion guide)
research.html          Research overview + experience timeline
protocols.html         Research > Protocols (teaser cards, contact for full protocol)
figures.html           Research > Figures & Illustration (paper-figure portfolio)
publications.html      Publications + conference presentations
blog.html              Blog landing
blog-travel.html       Blog > Travel (interactive map)
blog-making.html       Blog > Making (robotics/education projects)
css/style.css          All styling (colors, fonts, layout)
js/main.js             Mobile nav + accordion behavior (shared across pages)
js/travel-data.js      Travel pin data — edit this to add trips
js/travel.js           Renders pins from travel-data.js onto the map SVG
assets/img/            Images (favicon included; add your own photos here)
```

## Things to fill in before you publish

- **Photo**: replace the "Add your photo here" box in `index.html` — save an image to
  `assets/img/profile.jpg` and swap the placeholder `<div class="inner">` for
  `<img src="assets/img/profile.jpg" alt="Young Hyun Kim">` (same `.inner` class/wrapper).
- **CV**: export your CV as a PDF and save it as `assets/CV_Younghyun_Kim.pdf` (the "Download CV"
  buttons already link there).
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

1. Create a new GitHub repo (e.g. `yourusername.github.io` for a root user site, or any name for
   a project site).
2. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/REPO_NAME.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from branch → `main` / `/(root)`**.
4. Your site will be live at:
   - `https://yourusername.github.io/` (if the repo is named `yourusername.github.io`), or
   - `https://yourusername.github.io/REPO_NAME/` (any other repo name).
5. Optional custom domain: add a `CNAME` file with your domain, and point your domain's DNS to
   GitHub Pages (GitHub's docs walk through the exact records).

After the first push, updating the live site is just: edit a file → `git add` → `git commit` →
`git push`. GitHub Pages redeploys automatically within a minute or two.
