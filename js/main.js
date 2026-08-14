/* =========================================================================
   aura & ESENCIA — main.js
   Renderiza el catálogo desde catalog.js, maneja filtros, el panel lateral
   de producto ("subpestaña") y arma los enlaces de WhatsApp / Instagram / TikTok.

   Si existe una versión guardada por el Panel de administración
   (localStorage), se usa esa. Si no, se usa la lista de catalog.js.
   ========================================================================= */

(function () {
  const STORAGE_KEY = "auraesencia_catalogo";
  const CONTACT_KEY = "auraesencia_contacto";

  // Cambia esto a "true" si quieres que el aviso emergente aparezca SIEMPRE
  // que alguien abra la página (incluso si ya lo cerró antes en esa visita).
  // Con "false", aparece una sola vez por sesión de navegación (se vuelve a
  // mostrar si la persona cierra el navegador y vuelve otro día).
  const MOSTRAR_AVISO_SIEMPRE = false;
  const AVISO_SESSION_KEY = "auraesencia_aviso_visto";

  function getProductos() {
    const guardado = localStorage.getItem(STORAGE_KEY);
    if (guardado) {
      try { return JSON.parse(guardado); } catch (e) { /* ignora y usa el default */ }
    }
    return CATALOGO;
  }

  function getContacto() {
    const guardado = localStorage.getItem(CONTACT_KEY);
    if (guardado) {
      try { return JSON.parse(guardado); } catch (e) { /* ignora */ }
    }
    return CONTACTO;
  }

  const money = (n) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

  function stockInfo(stock) {
    if (stock <= 0) return { clase: "out", texto: "Agotado" };
    if (stock <= 2) return { clase: "low", texto: `Pocas unidades (${stock})` };
    return { clase: "in", texto: `Disponible (${stock})` };
  }

  function waLink(numero, mensaje) {
    return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  }

  /* ---------------------- enlaces sociales / whatsapp ---------------------- */
  function pintarEnlacesSociales() {
    const contacto = getContacto();
    document.querySelectorAll("[data-social='whatsapp']").forEach((el) => {
      el.href = waLink(contacto.whatsapp, "¡Hola! Quiero más información sobre sus productos ✨");
    });
    document.querySelectorAll("[data-social='instagram']").forEach((el) => { el.href = contacto.instagram; });
    document.querySelectorAll("[data-social='tiktok']").forEach((el) => { el.href = contacto.tiktok; });
  }

  /* ---------------------------- catálogo / grid ---------------------------- */
  const grid = document.getElementById("catalogGrid");
  const filtersWrap = document.getElementById("filters");
  let productos = [];
  let categoriaActiva = "Todos";

  function renderFiltros() {
    const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];
    filtersWrap.innerHTML = categorias
      .map(
        (cat) =>
          `<button class="filter-chip ${cat === categoriaActiva ? "active" : ""}" data-cat="${cat}">${cat}</button>`
      )
      .join("");

    filtersWrap.querySelectorAll(".filter-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        categoriaActiva = btn.dataset.cat;
        renderFiltros();
        renderGrid();
      });
    });
  }

  function renderGrid() {
    const lista =
      categoriaActiva === "Todos" ? productos : productos.filter((p) => p.categoria === categoriaActiva);

    if (!lista.length) {
      grid.innerHTML = `<p class="empty-state">Todavía no hay productos en esta categoría.</p>`;
      return;
    }

    grid.innerHTML = lista
      .map((p) => {
        const info = stockInfo(p.stock);
        return `
        <article class="product-card">
          <button class="product-media" data-id="${p.id}" aria-label="Ver detalles de ${p.nombre}">
            <span class="stock-badge ${info.clase}">${info.texto}</span>
            <img src="${p.imagen}" alt="${p.nombre}" loading="lazy" />
            <span class="zoom-hint">
              <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.47 6.47 0 0 0 1.57-4.23A6.5 6.5 0 1 0 9.5 16a6.47 6.47 0 0 0 4.23-1.57l.27.28v.79l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"/></svg>
            </span>
          </button>
          <div class="product-info">
            <span class="product-cat">${p.categoria}</span>
            <h3 class="product-name">${p.nombre}</h3>
            <span class="product-price">${money(p.precio)}</span>
            <button class="btn btn-ghost" data-id="${p.id}" data-open>Ver detalles</button>
          </div>
        </article>`;
      })
      .join("");

    grid.querySelectorAll("[data-id]").forEach((el) => {
      el.addEventListener("click", () => abrirPanel(el.dataset.id));
    });
  }

  /* ------------------------ panel lateral (subpestaña) ------------------------ */
  const scrim = document.getElementById("overlayScrim");
  const panel = document.getElementById("productPanel");

  function abrirPanel(id) {
    const p = productos.find((x) => String(x.id) === String(id));
    if (!p) return;
    const info = stockInfo(p.stock);
    const contacto = getContacto();
    const mensaje = `¡Hola! Me interesa "${p.nombre}" (${money(p.precio)}). ¿Está disponible?`;

    panel.innerHTML = `
      <button class="panel-close" id="panelCloseBtn" aria-label="Cerrar">
        <svg viewBox="0 0 24 24"><path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.88 18.3 9.17 12 2.88 5.71 4.3 4.29l6.29 6.3 6.29-6.3z"/></svg>
      </button>
      <div class="panel-media"><img src="${p.imagen}" alt="${p.nombre}" /></div>
      <div class="panel-body">
        <span class="product-cat">${p.categoria}</span>
        <h3>${p.nombre}</h3>
        <div class="panel-price">${money(p.precio)}</div>
        <p class="panel-desc">${p.descripcion || ""}</p>

        <div class="panel-row">
          <span class="label">Tallas</span>
          <div class="size-list">
            ${p.tallas.map((t) => `<span class="size-pill">${t}</span>`).join("")}
          </div>
        </div>
        <div class="panel-row">
          <span class="label">Stock</span>
          <span class="stock-line ${info.clase}">${info.texto}</span>
        </div>

        <div class="panel-actions">
          <a class="btn btn-whatsapp" href="${waLink(contacto.whatsapp, mensaje)}" target="_blank" rel="noopener">
            Consultar por WhatsApp
          </a>
          <button class="btn btn-ghost" id="panelCloseBtn2">Seguir viendo el catálogo</button>
        </div>
      </div>
    `;

    document.getElementById("panelCloseBtn").addEventListener("click", cerrarPanel);
    document.getElementById("panelCloseBtn2").addEventListener("click", cerrarPanel);

    panel.classList.add("open");
    scrim.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function cerrarPanel() {
    panel.classList.remove("open");
    scrim.classList.remove("open");
    document.body.style.overflow = "";
  }

  scrim.addEventListener("click", cerrarPanel);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarPanel(); });

  /* ---------------------------- aviso emergente ---------------------------- */
  const noticeScrim = document.getElementById("noticeScrim");
  const noticeCloseBtn = document.getElementById("noticeCloseBtn");
  const noticeDismissBtn = document.getElementById("noticeDismissBtn");

  function cerrarAviso() {
    noticeScrim.classList.remove("open");
    document.body.style.overflow = "";
    sessionStorage.setItem(AVISO_SESSION_KEY, "1");
  }

  function mostrarAvisoSiCorresponde() {
    if (!noticeScrim) return;
    const yaVisto = sessionStorage.getItem(AVISO_SESSION_KEY) === "1";
    if (yaVisto && !MOSTRAR_AVISO_SIEMPRE) return;

    setTimeout(() => {
      noticeScrim.classList.add("open");
      document.body.style.overflow = "hidden";
    }, 500);
  }

  if (noticeCloseBtn) noticeCloseBtn.addEventListener("click", cerrarAviso);
  if (noticeDismissBtn) noticeDismissBtn.addEventListener("click", cerrarAviso);
  if (noticeScrim) {
    noticeScrim.addEventListener("click", (e) => {
      if (e.target === noticeScrim) cerrarAviso();
    });
  }

  /* ------------------------------- menú móvil ------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  if (navToggle) {
    navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
    mainNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mainNav.classList.remove("open")));
  }

  /* --------------------------------- init --------------------------------- */
  function init() {
    productos = getProductos();
    pintarEnlacesSociales();
    renderFiltros();
    renderGrid();
    document.getElementById("year").textContent = new Date().getFullYear();
    mostrarAvisoSiCorresponde();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
