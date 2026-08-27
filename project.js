function getSlugFromUrl() {
  return new URLSearchParams(window.location.search).get("slug");
}

function notFoundView(slug) {
  return `
    <div class="project-missing">
      <h1>Write-up not found</h1>
      <p>${slug ? `No project matches "${slug}".` : "No project was specified."}
      Head back to <a href="index.html">all projects</a>.</p>
    </div>
  `;
}

function comingSoonView(project) {
  return `
    <header class="project-hero">
      <h1 class="project-title">${project.title}</h1>
      <p class="project-tagline">${project.blurb}</p>
    </header>
    <p class="project-missing">
      The full write-up for this one isn't live yet — check back soon,
      or head to <a href="index.html">all projects</a>.
    </p>
  `;
}

function renderMedia(media) {
  if (!media || media.length === 0) return "";
  const items = media
    .map(
      (m, i) => `
        <button class="media-item" data-index="${i}">
          <img src="${m.src}" alt="${m.caption || ""}" loading="lazy" />
          ${m.caption ? `<span class="media-caption">${m.caption}</span>` : ""}
        </button>
      `
    )
    .join("");
  return `
    <section class="project-section">
      <h2>Media</h2>
      <div class="media-grid">${items}</div>
    </section>
  `;
}

function renderSections(sections) {
  if (!sections) return "";
  return sections
    .map((s) => `
      <section class="project-section">
        <h2>${s.heading}</h2>
        <div class="project-section-body">${s.body}</div>
      </section>
    `)
    .join("");
}

function renderCredits(credits) {
  if (!credits || credits.length === 0) return "";
  const names = credits
    .map((c) => (c.url ? `<a href="${c.url}" target="_blank" rel="noopener">${c.name}</a>` : c.name))
    .join(", ");
  return `<p class="project-credits">Built with: ${names}</p>`;
}

function fullView(project, detail) {
  const STATUS_LABELS = { shipped: "Shipped", wip: "WIP", private: "Private" };
  const statusesHtml = (project.statuses || [])
    .map((s) => `<span class="card-status ${s}">${STATUS_LABELS[s] || s}</span>`)
    .join("");

  const tagsHtml = project.tags
    .map((t) => `<span class="flag">--${t.toLowerCase().replace(/\s+/g, "-")}</span>`)
    .join("");

  const linksHtml = Object.entries(project.links || {})
    .map(([label, url]) => `<a class="project-link" href="${url}" target="_blank" rel="noopener">${label}</a>`)
    .join("");

  const videoHtml = detail.video
    ? `<div class="video-wrap"><iframe src="${detail.video.embed}" title="${project.title} video" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    : "";

  const DEFAULT_EMBED_HEIGHT = { steam: 190, itch: 167 };
  const storeHtml = detail.storeEmbed
    ? `<div class="store-embed"><iframe src="${detail.storeEmbed.url}" frameborder="0" width="100%" height="${detail.storeEmbed.height || DEFAULT_EMBED_HEIGHT[detail.storeEmbed.platform] || 190}"></iframe></div>`
    : "";

  return `
    <header class="project-hero">
      <div class="project-hero-top">
        <h1 class="project-title">${project.title}</h1>
        <div class="card-status-group project-status-group">${statusesHtml}</div>
      </div>
      <p class="project-tagline">${detail.tagline || project.blurb}</p>
      <div class="card-flags project-flags">${tagsHtml}</div>
      <div class="project-links">${linksHtml}</div>
    </header>

    ${videoHtml}
    ${storeHtml}

    <div class="project-body">
      ${renderSections(detail.sections)}
      ${renderMedia(detail.media)}
      ${renderCredits(detail.credits)}
    </div>
  `;
}

function renderCarouselMarkup(id, images) {
  const slides = images
    .map(
      (img, i) => `
        <div class="carousel-slide" data-index="${i}">
          <img src="${img.src}" alt="${img.caption || ""}" loading="lazy">
        </div>
      `
    )
    .join("");
  const dots = images
    .map((_, i) => `<button class="carousel-dot${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Go to image ${i + 1}"></button>`)
    .join("");
  return `
    <div class="carousel" data-carousel-id="${id}">
      <div class="carousel-track">${slides}</div>
      <button class="carousel-arrow carousel-prev" aria-label="Previous image">&larr;</button>
      <button class="carousel-arrow carousel-next" aria-label="Next image">&rarr;</button>
      <p class="carousel-caption"></p>
      <div class="carousel-dots">${dots}</div>
    </div>
  `;
}

function initCarousels(carouselsData) {
  document.querySelectorAll("[data-carousel]").forEach((placeholder) => {
    const id = placeholder.dataset.carousel;
    const images = carouselsData && carouselsData[id];
    if (!images || images.length === 0) return;
    placeholder.outerHTML = renderCarouselMarkup(id, images);
  });

  document.querySelectorAll(".carousel").forEach((el) => {
    const images = carouselsData[el.dataset.carouselId];
    const track = el.querySelector(".carousel-track");
    const dots = el.querySelectorAll(".carousel-dot");
    const caption = el.querySelector(".carousel-caption");
    let index = 0;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
      caption.textContent = images[index].caption || "";
    }

    el.querySelector(".carousel-prev").addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      update();
    });
    el.querySelector(".carousel-next").addEventListener("click", () => {
      index = (index + 1) % images.length;
      update();
    });
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        index = Number(dot.dataset.index);
        update();
      });
    });

    let touchStartX = null;
    el.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", (e) => {
      if (touchStartX === null) return;
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) {
        index = diff < 0 ? (index + 1) % images.length : (index - 1 + images.length) % images.length;
        update();
      }
      touchStartX = null;
    });

    update();
  });
}

function initLightbox(media) {
  if (!media || media.length === 0) return;
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("lightbox-close");

  document.querySelectorAll(".media-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = media[Number(btn.dataset.index)];
      lightboxImg.src = item.src;
      lightboxImg.alt = item.caption || "";
      lightboxCaption.textContent = item.caption || "";
      lightbox.hidden = false;
    });
  });

  function close() {
    lightbox.hidden = true;
    lightboxImg.src = "";
  }
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

(function init() {
  const slug = getSlugFromUrl();
  const container = document.getElementById("project-page");
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    container.innerHTML = notFoundView(slug);
    return;
  }

  document.getElementById("page-title").textContent = `${project.title} — Nathaniel Thoma`;

  const detail = (typeof PROJECT_DETAILS !== "undefined" && PROJECT_DETAILS[slug]) || null;

  if (!detail) {
    container.innerHTML = comingSoonView(project);
    return;
  }

  container.innerHTML = fullView(project, detail);
  initCarousels(detail.carousels || {});
  initLightbox(detail.media);
})();