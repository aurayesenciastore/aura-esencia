/* =========================================================================
   aura & ESENCIA — main.js
   Renderiza el catálogo desde catalog.js, maneja filtros, búsqueda, el panel
   lateral de producto ("subpestaña") y arma los enlaces de WhatsApp /
   Instagram / TikTok.

   Si existe una versión guardada por el Panel de administración
   (localStorage), se usa esa. Si no, se usa la lista de catalog.js.
   ========================================================================= */

(function () {
  const STORAGE_KEY = "auraesencia_catalogo";
  const CONTACT_KEY = "auraesencia_contacto";

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
  let terminoBusqueda = "";

  // Quita tildes y pasa a minúsculas: "Algodón" también coincide con "algodon"
  const normalizar = (s) =>
    String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Puntaje de coincidencia: nombre > categoría > descripción
  function puntaje(p, termino) {
    if (!termino) return 0;
    const nombre = normalizar(p.nombre);
    const categoria = normalizar(p.categoria);
    const descripcion = normalizar(p.descripcion);
    let pts = 0;
    if (nombre.startsWith(termino)) pts += 5;
    else if (nombre.includes(termino)) pts += 3;
    if (categoria.includes(termino)) pts += 2;
    if (descripcion.includes(termino)) pts += 1;
    return pts;
  }

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

  /* ------------------- subcategorías (sliders por sección) -------------------
     Cada producto puede tener un campo opcional  subcategoria: "Shorts"  en
     catalog.js. Si no lo tiene, se detecta solo por el nombre del producto.
     El orden en que aparecen las secciones se define aquí abajo.
  ---------------------------------------------------------------------------- */
  const ORDEN_SUBCATEGORIAS = {
    Pijamas: ["Pantalones", "Shorts", "Capris", "Batolas", "Enterizos", "Niños y niñas"],
    Skincare: ["Cuidado facial", "Cuidado corporal", "Cuidado capilar"],
  };

  function subcategoriaDe(p) {
    if (p.subcategoria && String(p.subcategoria).trim()) return String(p.subcategoria).trim();
    const n = normalizar(p.nombre);
    if (p.categoria === "Pijamas") {
      if (/ninos|ninas/.test(n)) return "Niños y niñas";
      if (/^capri/.test(n)) return "Capris";
      if (/enterizo/.test(n)) return "Enterizos";
      if (/batola/.test(n)) return "Batolas";
      if (/^pantalon/.test(n)) return "Pantalones";
      if (/short/.test(n)) return "Shorts";
      return "Otros";
    }
    if (p.categoria === "Skincare") {
      if (/antifrizz|shampoo|cabello|hair|capilar/.test(n)) return "Cuidado capilar";
      if (/corporal|bano|ducha|manos|shimmer|cuerpo/.test(n)) return "Cuidado corporal";
      return "Cuidado facial";
    }
    return p.categoria; // otras categorías: una sola sección con su nombre
  }

  function tarjetaHTML(p, termino) {
    const info = stockInfo(p.stock);
    const coincide = termino && puntaje(p, termino) > 0;
    const clase = termino ? (coincide ? "match" : "no-match") : "";
    return `
        <article class="product-card ${clase}">
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
  }

  const FLECHA_IZQ = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>`;
  const FLECHA_DER = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>`;

  function seccionHTML(titulo, lista, termino) {
    return `
      <section class="cat-section">
        <div class="sub-head">
          <h3 class="sub-title">${titulo}</h3>
          <span class="sub-line" aria-hidden="true"></span>
          <span class="sub-count">${lista.length}</span>
        </div>
        <div class="slider">
          <button class="slider-arrow prev" type="button" aria-label="Ver anteriores en ${titulo}" hidden>${FLECHA_IZQ}</button>
          <div class="slider-track" tabindex="0">
            ${lista.map((p) => tarjetaHTML(p, termino)).join("")}
          </div>
          <button class="slider-arrow next" type="button" aria-label="Ver más en ${titulo}" hidden>${FLECHA_DER}</button>
        </div>
      </section>`;
  }

  // Muestra/oculta las flechas según se pueda desplazar a cada lado
  function actualizarFlechas(slider) {
    const track = slider.querySelector(".slider-track");
    const prev = slider.querySelector(".slider-arrow.prev");
    const next = slider.querySelector(".slider-arrow.next");
    const max = track.scrollWidth - track.clientWidth;
    prev.hidden = track.scrollLeft <= 4;
    next.hidden = max <= 4 || track.scrollLeft >= max - 4;
  }

  function activarSliders() {
    grid.querySelectorAll(".slider").forEach((slider) => {
      const track = slider.querySelector(".slider-track");
      const mover = (dir) =>
        track.scrollBy({ left: dir * Math.max(track.clientWidth * 0.85, 200), behavior: "smooth" });
      slider.querySelector(".slider-arrow.prev").addEventListener("click", () => mover(-1));
      slider.querySelector(".slider-arrow.next").addEventListener("click", () => mover(1));
      track.addEventListener("scroll", () => actualizarFlechas(slider), { passive: true });
      actualizarFlechas(slider);
    });
  }

  window.addEventListener("resize", () => {
    grid.querySelectorAll(".slider").forEach(actualizarFlechas);
  });

  function renderGrid() {
    const termino = normalizar(terminoBusqueda.trim());

    let lista =
      categoriaActiva === "Todos" ? [...productos] : productos.filter((p) => p.categoria === categoriaActiva);

    if (!lista.length) {
      grid.classList.remove("catalog-sections");
      grid.innerHTML = `<p class="empty-state">Todavía no hay productos en esta categoría.</p>`;
      return;
    }

    // Agrupa: categoría → subcategoría → productos
    const porCategoria = new Map();
    lista.forEach((p) => {
      if (!porCategoria.has(p.categoria)) porCategoria.set(p.categoria, new Map());
      const subs = porCategoria.get(p.categoria);
      const sub = subcategoriaDe(p);
      if (!subs.has(sub)) subs.set(sub, []);
      subs.get(sub).push(p);
    });

    // Con búsqueda: dentro de cada slider los que coinciden van primero
    const ordenar = (arr) =>
      termino
        ? arr
            .map((p) => ({ p, pts: puntaje(p, termino) }))
            .sort((a, b) => b.pts - a.pts)
            .map((x) => x.p)
        : arr;
    const mejor = (arr) => (termino ? Math.max(...arr.map((p) => puntaje(p, termino))) : 0);

    let html = "";

    porCategoria.forEach((subs, categoria) => {
      const orden = ORDEN_SUBCATEGORIAS[categoria] || [];
      let nombres = [...subs.keys()].sort((a, b) => {
        const ia = orden.indexOf(a), ib = orden.indexOf(b);
        return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
      });
      // Con búsqueda, las secciones con mejores coincidencias suben
      if (termino) nombres = nombres.sort((a, b) => mejor(subs.get(b)) - mejor(subs.get(a)));

      const secciones = nombres.map((n) => seccionHTML(n, ordenar(subs.get(n)), termino)).join("");
      html += `<div class="cat-group">
        ${secciones}
      </div>`;
    });

    grid.classList.add("catalog-sections");
    grid.innerHTML = html;

    grid.querySelectorAll("[data-id]").forEach((el) => {
      el.addEventListener("click", () => abrirPanel(el.dataset.id));
    });
    activarSliders();
  }

  /* ------------------------------- búsqueda ------------------------------- */
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      terminoBusqueda = searchInput.value;
      renderGrid();
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

        ${
          p.tallas && p.tallas.length
            ? `<div class="panel-row">
                <span class="label">Tallas</span>
                <div class="size-list">
                  ${p.tallas.map((t) => `<span class="size-pill">${t}</span>`).join("")}
                </div>
              </div>`
            : ""
        }
        <div class="panel-row">
          <span class="label">Stock</span>
          <span class="stock-line ${info.clase}">${info.texto}</span>
        </div>

        <p class="ref-note">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
          Las imágenes son de referencia: no representan todos los colores y diseños disponibles. Escríbenos por WhatsApp y te mostramos más opciones.
        </p>

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
  }

  document.addEventListener("DOMContentLoaded", init);
})();