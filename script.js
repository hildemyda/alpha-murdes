/* ==========================================================
   ALPHA'S MURDES -- LOGIC
   Baca komentar di data.js kalau mau nambah/edit project.
   File ini biasanya TIDAK perlu diubah.
   ========================================================== */

function renderStats() {
  const totalTemplate = TEMPLATE_DATA.length;
  const totalAsset = (typeof TOTAL_ASSET_OVERRIDE !== "undefined" && TOTAL_ASSET_OVERRIDE !== null)
    ? TOTAL_ASSET_OVERRIDE
    : totalTemplate;
  const totalTutorial = (typeof TOTAL_TUTORIAL !== "undefined" && TOTAL_TUTORIAL !== null)
    ? TOTAL_TUTORIAL
    : 0;

  document.getElementById("stat-template").textContent = totalTemplate + "+";
  document.getElementById("stat-asset").textContent = totalAsset + "+";
  document.getElementById("stat-kategori").textContent = totalTutorial + "+";
}

function buildCardMedia(item) {
  return item.image
    ? `<img class="card-img" src="${item.image}" alt="${item.title}">`
    : `<div class="card-placeholder">Ganti gambar di<br>data.js</div>`;
}

function renderGallery() {
  const featuredWrap = document.getElementById("gallery-featured");
  const grid = document.getElementById("gallery");

  if (!TEMPLATE_DATA || TEMPLATE_DATA.length === 0) {
    featuredWrap.innerHTML = "";
    grid.innerHTML = '<div class="gallery-empty">Belum ada project. Tambahkan lewat data.js.</div>';
    return;
  }

  const featured = TEMPLATE_DATA[0];
  const rest = TEMPLATE_DATA.slice(1);

  featuredWrap.innerHTML = `
    <div class="featured-card">
      ${buildCardMedia(featured)}
      <div class="featured-badge">Terbaru</div>
      <div class="featured-title">${featured.title}</div>
    </div>
  `;

  grid.innerHTML = "";
  rest.forEach(item => {
    const card = document.createElement("div");
    card.className = "card " + (item.size || "medium");
    card.innerHTML = `
      ${buildCardMedia(item)}
      <div class="card-title">${item.title}</div>
    `;
    grid.appendChild(card);
  });
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("nav-links-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("nav-links-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  });
}

function renderTools() {
  const track = document.getElementById("tools-track");
  if (!track || typeof TOOLS_DATA === "undefined" || TOOLS_DATA.length === 0) return;

  const buildIcon = (tool) => {
    const initials = tool.name
      .split(" ")
      .map(w => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    return tool.icon
      ? `<div class="tool-icon"><img src="${tool.icon}" alt="${tool.name}"></div>`
      : `<div class="tool-icon"><span>${initials}</span></div>`;
  };

  // digandakan 2x biar animasi marquee-nya nyambung mulus tanpa putus
  const doubled = [...TOOLS_DATA, ...TOOLS_DATA];
  track.innerHTML = doubled.map(buildIcon).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderGallery();
  renderTools();
  initMobileNav();
});
