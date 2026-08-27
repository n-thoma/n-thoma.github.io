/* =========================================================
   PROJECT DATA
   Add, edit, or reorder projects here. Each project needs:

   - title      : string
   - slug       : short id, used for the image filename
   - blurb      : 1-2 sentence description
   - date       : "YYYY-MM-DD" (used only for sorting, newest first)
   - category   : "game" or "software"
   - statuses   : array of zero or more of "shipped", "wip", "private"
                  - a project can have more than one, e.g. a game that's
                    shipped but still being patched: ["shipped", "wip"]
                  - "private" is for anything not publicly released
                    (not on Steam, no public repo, etc.) - once you're
                    ready to offer a direct download, just add a
                    `download` link below and drop "private", or leave
                    it and add a download link alongside it, your call.
                  - leave the array empty ([]) for no badge at all
   - tags       : array of short strings, shown as flags
   - image      : path to a screenshot/gif, drop the file in
                  assets/img/projects/ and point to it here.
                  If the file doesn't exist yet, a placeholder
                  with the project's initial is shown instead.
   - links      : { repo: "...", play: "...", demo: "..." }
                  any of these keys are optional, omit ones
                  that don't apply.
   ========================================================= */

const PROJECTS = [
  {
    title: "Spell It Out",
    slug: "spell-it-out",
    blurb: "a Unity-powered dungeon crawler where you defeat skeletons by literally drawing spells with your mouse using gesture-based magic",
    date: "2025-12-05",
    category: "game",
    statuses: ["shipped", "wip"],
    tags: ["Unity", "C#", "Programming", "GitHub"],
    image: "assets/img/projects/spell-it-out/title-card.png",
    links: {
      play: "https://hyeonjoon-nam.itch.io/spell-it-out"
    }
  },
  {
    title: "Luminary",
    slug: "luminary",
    blurb: "a story-driven forest adventure in Unreal Engine 5, featuring puzzle-solving, potion crafting, and awesome VFX",
    date: "2025-04-24",
    category: "game",
    statuses: ["wip"],
    tags: ["Unreal Engine 5", "Blueprints", "PerForce", "Programming"],
    image: "assets/img/projects/luminary/title-card.png",
    links: {
    }
  },
  {
    title: "Cosmic Cargo",
    slug: "cosmic-cargo",
    blurb: "a sophomore-year team project: a custom C++/OpenGL engine built from scratch, wrapped around a 2D space-cargo game.",
    date: "2024-04-26",
    category: "game",
    statuses: ["shipped"],
    tags: ["Custom Engine", "C++", "OpenGL", "Programming", "TortoiseSVN"],
    image: "assets/img/projects/cosmic-cargo/title-card.png",
    links: {
      play: "https://store.steampowered.com/app/4056230/Cosmic_Cargo/"
    }
  },
  {
    title: "Battle Bond",
    slug: "battle-bond",
    blurb: "a top-down, co-op tank game where teamwork is key, featuring custom pixel art and challenging enemies",
    date: "2023-08-01",
    category: "game",
    statuses: ["private"],
    tags: ["C", "Programming", "GitHub"],
    image: "assets/img/projects/battle-bond/title-card.png",
    links: {
    }
  },
  {
    title: "LEFT 4 B4IT",
    slug: "left-4-b4it",
    blurb: "a short underwater survival game where you play as an angler fish, battling zombie fish and upgrading your abilities between levels",
    date: "2022-12-12",
    category: "game",
    statuses: ["private"],
    tags: ["C", "Programming", "TortoiseSVN"],
    image: "assets/img/projects/left-4-b4it/title-card.png",
    links: {
    }
  },
  {
    title: "Zombie Clicker",
    slug: "zombie-clicker",
    blurb: "a fast-paced reflex game where you move your character and click on increasingly speedy zombies to survive",
    date: "2022-10-14",
    category: "game",
    statuses: ["private"],
    tags: ["C", "Programming"],
    image: "assets/img/projects/zombie-clicker/title-card.png",
    links: {
    }
  },

  /* ---- Add your non-game / software projects below ---- */
  // {
  //   title: "Your Software Project",
  //   slug: "your-software-project",
  //   blurb: "One or two sentences on what it does and why it exists.",
  //   date: "2026-01-01",
  //   category: "software",
  //   statuses: ["shipped"],
  //   tags: ["Python", "CLI"],
  //   image: "assets/img/projects/your-software-project.jpg",
  //   links: { repo: "https://github.com/n-thoma/your-repo" }
  // },
];

/* ========================================================= */

const grid = document.getElementById("project-grid");
const emptyState = document.getElementById("empty-state");
const filterPills = document.querySelectorAll(".filter-pill");

function renderCard(project) {
  const initial = project.title.trim().charAt(0).toUpperCase();

  const linkEntries = Object.entries(project.links || {});
  const linksHtml = linkEntries
    .map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`)
    .join("");

  const tagsHtml = project.tags
    .map((t) => `<span class="flag">--${t.toLowerCase().replace(/\s+/g, "-")}</span>`)
    .join("");

  const year = new Date(project.date).getFullYear();

  const STATUS_LABELS = { shipped: "Shipped", wip: "WIP", private: "Private" };
  const statusesHtml = (project.statuses || [])
    .map((s) => `<span class="card-status ${s}">${STATUS_LABELS[s] || s}</span>`)
    .join("");

  const hasWriteup = typeof PROJECT_DETAILS !== "undefined" && PROJECT_DETAILS[project.slug];
  const detailHref = `project.html?slug=${encodeURIComponent(project.slug)}`;
  const titleHtml = hasWriteup
    ? `<a href="${detailHref}">${project.title}</a>`
    : project.title;
  const thumbWrapOpen = hasWriteup ? `<a href="${detailHref}" class="card-thumb-link">` : "";
  const thumbWrapClose = hasWriteup ? `</a>` : "";

  return `
    <article class="card" data-category="${project.category}">
      ${thumbWrapOpen}
      <div class="card-thumb">
        <div class="card-thumb-fallback">${initial}</div>
        <img
          src="${project.image}"
          alt="${project.title} screenshot"
          loading="lazy"
          onerror="this.classList.add('is-broken')"
        />
        <div class="card-status-group">${statusesHtml}</div>
      </div>
      ${thumbWrapClose}
      <div class="card-body">
        <h3 class="card-title">${titleHtml}</h3>
        <p class="card-blurb">${project.blurb}</p>
        <div class="card-flags">${tagsHtml}</div>
        <div class="card-footer">
          <span>${year}</span>
          <span class="card-links">${hasWriteup ? `<a href="${detailHref}">read more</a>` : ""}${linksHtml}</span>
        </div>
      </div>
    </article>
  `;
}

function render(filter = "all") {
  const sorted = [...PROJECTS].sort((a, b) => new Date(b.date) - new Date(a.date));
  const visible = filter === "all" ? sorted : sorted.filter((p) => p.category === filter);

  grid.innerHTML = visible.map(renderCard).join("");
  emptyState.hidden = visible.length !== 0;
}

if (grid) {
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => {
        p.classList.remove("is-active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("is-active");
      pill.setAttribute("aria-selected", "true");
      render(pill.dataset.filter);
    });
  });

  /* HUD readout */
  document.getElementById("hud-count").textContent = PROJECTS.length;
  document.getElementById("hud-build").textContent = new Date()
    .toISOString()
    .slice(0, 7)
    .replace("-", ".");

  render();
}
