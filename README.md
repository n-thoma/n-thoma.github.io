# n-thoma.github.io

Source for my portfolio site. Plain HTML/CSS/JS, no build step, no Jekyll.

## Adding a project

Open `script.js` and add an entry to the `PROJECTS` array at the top of the file.
Each project needs a title, blurb, date, category (`"game"` or `"software"`),
status (`"shipped"` or `"wip"`), a list of tags, an image path, and any links.
Comments in the file walk through each field. There's a commented-out template
at the bottom of the list for the next software project.

## Adding a screenshot

Drop an image (jpg/png, ~1280x800 works well) into `assets/img/projects/`,
named to match the `image` path you set for that project, e.g.:

```
assets/img/projects/spell-it-out.jpg
```

Until an image exists at that path, the card shows a placeholder with the
project's initial — nothing breaks if you add the project before the image.

## Adding a full write-up (project detail page)

Every project can optionally get its own page — like a mini dev blog post,
with an overview, a video/Steam embed, sections you write yourself, and a
media gallery.

1. Open `project-details.js` and add an entry keyed by the project's `slug`
   (the same slug used in `script.js`). Comments in the file explain each
   field — sections are just a heading + a chunk of HTML, so you can write
   however much or little you want.
2. Drop gallery images in `assets/img/projects/<slug>/gallery/` and list
   them under `media` in that same entry.
3. That's it — the card on the homepage automatically grows a "Read more"
   link and a clickable thumbnail once an entry exists for that slug, and
   the page itself lives at `project.html?slug=your-slug`.

If a project doesn't have an entry in `project-details.js` yet, its card
just behaves like before (no link) — nothing to break by adding write-ups
gradually, one project at a time.

## Local preview

No build step needed, but browsers block some things (like `fetch`) over
`file://`, so serve it locally instead of double-clicking `index.html`:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying

This repo *is* the site — GitHub Pages serves `index.html` directly from the
root of the `main` branch. Push to `main` and it deploys automatically:

```
git add .
git commit -m "Update portfolio"
git push
```

Since there's no Jekyll processing, this repo doesn't need `_config.yml`,
`_posts/`, or a `Gemfile` — you can remove those once you're happy with the
new site (keep a backup branch first if you want an easy way back to the
old Chirpy-based version).
