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

  // Bar-nya nunjukkin proporsi tiap angka dibanding yang paling besar
  const values = [totalTemplate, totalAsset, totalTutorial];
  const max = Math.max(...values, 1);
  const minVisiblePercent = 6; // biar angka kecil tetap keliatan garisnya, gak nol total

  const setBar = (id, value) => {
    const el = document.getElementById(id);
    if (!el) return;
    const percent = Math.max((value / max) * 100, minVisiblePercent);
    requestAnimationFrame(() => { el.style.width = percent + "%"; });
  };

  setBar("stat-bar-template", totalTemplate);
  setBar("stat-bar-asset", totalAsset);
  setBar("stat-bar-kategori", totalTutorial);
}

function buildCardMedia(item) {
  return item.image
    ? `<img class="card-img" src="${item.image}" alt="${item.title}" loading="lazy">`
    : `<div class="card-placeholder">Ganti gambar di<br>data.js</div>`;
}

function renderGallery() {
  const grid = document.getElementById("gallery");

  if (!TEMPLATE_DATA || TEMPLATE_DATA.length === 0) {
    grid.innerHTML = '<div class="gallery-empty">Belum ada project. Tambahkan lewat data.js.</div>';
    return;
  }

  grid.innerHTML = "";
  TEMPLATE_DATA.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
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
