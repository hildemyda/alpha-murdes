/* ==========================================================
   ALPHA'S MURDES -- LOGIC
   Baca komentar di data.js kalau mau nambah/edit template.
   File ini biasanya TIDAK perlu diubah.
   ========================================================== */

const CATEGORY_COLORS = {
  Logo: "var(--cat-logo)",
  Mascot: "var(--cat-mascot)",
  Banner: "var(--cat-banner)",
  GFX: "var(--cat-gfx)",
  Lainnya: "var(--cat-lainnya)"
};

const CATEGORIES = ["Semua", "Banner", "Logo", "Mascot", "GFX", "Lainnya"];

let activeFilter = "Semua";

function renderStats() {
  const totalTemplate = TEMPLATE_DATA.length;
  const totalAsset = (TOTAL_ASSET_OVERRIDE !== null && TOTAL_ASSET_OVERRIDE !== undefined)
    ? TOTAL_ASSET_OVERRIDE
    : totalTemplate;
  const totalKategori = new Set(TEMPLATE_DATA.map(t => t.category)).size;

  document.getElementById("stat-template").textContent = totalTemplate + "+";
  document.getElementById("stat-asset").textContent = totalAsset + "+";
  document.getElementById("stat-kategori").textContent = totalKategori;
}

function renderFilters() {
  const container = document.getElementById("filters");
  container.innerHTML = "";

  CATEGORIES.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeFilter ? " active" : "");
    btn.textContent = cat;
    btn.setAttribute("aria-pressed", cat === activeFilter ? "true" : "false");
    btn.addEventListener("click", () => {
      activeFilter = cat;
      renderFilters();
      renderGallery();
    });
    container.appendChild(btn);
  });
}

function renderGallery() {
  const grid = document.getElementById("gallery");
  grid.innerHTML = "";

  const items = activeFilter === "Semua"
    ? TEMPLATE_DATA
    : TEMPLATE_DATA.filter(t => t.category === activeFilter);

  if (items.length === 0) {
    grid.innerHTML = '<div class="gallery-empty">Belum ada template di kategori ini.</div>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card " + (item.size || "medium");

    const tagColor = CATEGORY_COLORS[item.category] || "var(--amber)";

    const media = item.image
      ? `<img class="card-img" src="${item.image}" alt="${item.title}">`
      : `<div class="card-placeholder">Ganti gambar di<br>data.js</div>`;

    card.innerHTML = `
      ${media}
      <span class="card-tag" style="background:${tagColor}">${item.category}</span>
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
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderFilters();
  renderGallery();
  initMobileNav();
});
