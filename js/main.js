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

  // Puntaje de coincidencia con palabras clave: todas las palabras deben aparecer
  // en el nombre, la categoría, la subcategoría o la descripción del producto.
  function puntaje(p, termino) {
    if (!termino) return 0;
    const palabras = termino.split(/\s+/).filter(Boolean);
    const nombre = normalizar(p.nombre);
    const categoria = normalizar(p.categoria + " " + subcategoriaDe(p));
    const descripcion = normalizar(p.descripcion);
    let total = 0;
    for (const w of palabras) {
      let pts = 0;
      if (nombre.startsWith(w)) pts += 5;
      else if (nombre.includes(w)) pts += 3;
      if (categoria.includes(w)) pts += 2;
      if (descripcion.includes(w)) pts += 1;
      if (pts === 0) return 0;
      total += pts;
    }
    return total;
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
      const d = normalizar(p.descripcion);
      if (/antifrizz|shampoo|cabello|hair|capilar|crecimiento/.test(n) || /cabello|cuero cabelludo|shampoo/.test(d)) return "Cuidado capilar";
      if (/corporal|bano|ducha|manos|shimmer|cuerpo/.test(n)) return "Cuidado corporal";
      return "Cuidado facial";
    }
    return p.categoria; // otras categorías: una sola sección con su nombre
  }

  function tarjetaHTML(p, termino) {
    const info = stockInfo(p.stock);
    const clase = "";
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

    if (termino) lista = lista.filter((p) => puntaje(p, termino) > 0);

    const resumen = termino
      ? `<div class="search-summary">
           <span>Resultados para “${escapar(terminoBusqueda.trim())}” · ${lista.length} producto${lista.length === 1 ? "" : "s"}</span>
           <button type="button" class="search-summary-clear">Quitar búsqueda</button>
         </div>`
      : "";

    if (!lista.length) {
      grid.classList.remove("catalog-sections");
      grid.innerHTML = termino
        ? `${resumen}<p class="empty-state">No encontramos productos con esas palabras. Prueba con otra, por ejemplo “short”, “facial” o “kit”.</p>`
        : `<p class="empty-state">Todavía no hay productos en esta categoría.</p>`;
      enlazarResumen();
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
    grid.innerHTML = resumen + html;
    enlazarResumen();

    grid.querySelectorAll("[data-id]").forEach((el) => {
      el.addEventListener("click", () => abrirPanel(el.dataset.id));
    });
    activarSliders();
  }

  /* ------------------------------- búsqueda -------------------------------
     Al escribir aparece una lista con sugerencias (foto, nombre y precio).
     Con Enter o "Ver todos los resultados" el catálogo muestra solo los
     productos que coinciden con las palabras clave.
  ---------------------------------------------------------------------------- */
  const escapar = (t) =>
    String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function enlazarResumen() {
    const btn = grid.querySelector(".search-summary-clear");
    if (btn) btn.addEventListener("click", limpiarBusqueda);
  }

  const searchInput = document.getElementById("searchInput");
  let sugerencias = null;
  let botonBorrar = null;

  function buscar(texto) {
    const termino = normalizar(texto.trim());
    if (!termino) return [];
    return productos
      .map((p) => ({ p, pts: puntaje(p, termino) }))
      .filter((x) => x.pts > 0)
      .sort((a, b) => b.pts - a.pts)
      .map((x) => x.p);
  }

  function cerrarSugerencias() {
    if (sugerencias) sugerencias.hidden = true;
  }

  function pintarSugerencias() {
    const texto = searchInput.value;
    botonBorrar.hidden = !texto;
    if (!texto.trim()) { cerrarSugerencias(); return; }

    const encontrados = buscar(texto);
    if (!encontrados.length) {
      sugerencias.innerHTML = `<div class="sr-empty">No encontramos “${escapar(texto.trim())}”. Prueba con otra palabra.</div>`;
    } else {
      sugerencias.innerHTML =
        encontrados
          .slice(0, 5)
          .map(
            (p) => `
          <button type="button" class="sr-item" data-id="${p.id}">
            <img src="${p.imagen}" alt="" loading="lazy" />
            <span class="sr-name">${escapar(p.nombre)}</span>
            <span class="sr-price">${money(p.precio)}</span>
          </button>`
          )
          .join("") +
        `<button type="button" class="sr-all">Ver todos los resultados (${encontrados.length})</button>`;
    }
    sugerencias.hidden = false;
  }

  function aplicarBusqueda() {
    terminoBusqueda = searchInput.value.trim();
    cerrarSugerencias();
    renderGrid();
    if (terminoBusqueda) grid.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function limpiarBusqueda() {
    searchInput.value = "";
    terminoBusqueda = "";
    botonBorrar.hidden = true;
    cerrarSugerencias();
    renderGrid();
  }

  if (searchInput) {
    const barra = searchInput.closest(".search-bar");

    botonBorrar = document.createElement("button");
    botonBorrar.type = "button";
    botonBorrar.className = "search-clear";
    botonBorrar.setAttribute("aria-label", "Borrar búsqueda");
    botonBorrar.textContent = "×";
    botonBorrar.hidden = true;
    barra.appendChild(botonBorrar);

    sugerencias = document.createElement("div");
    sugerencias.className = "search-results";
    sugerencias.hidden = true;
    barra.appendChild(sugerencias);

    searchInput.addEventListener("input", () => {
      // Si borran todo el texto, se vuelve al catálogo completo
      if (!searchInput.value.trim() && terminoBusqueda) {
        terminoBusqueda = "";
        renderGrid();
      }
      pintarSugerencias();
    });
    searchInput.addEventListener("focus", pintarSugerencias);
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { e.preventDefault(); aplicarBusqueda(); }
      if (e.key === "Escape") cerrarSugerencias();
    });

    botonBorrar.addEventListener("click", () => { limpiarBusqueda(); searchInput.focus(); });

    sugerencias.addEventListener("click", (e) => {
      const item = e.target.closest(".sr-item");
      if (item) { cerrarSugerencias(); abrirPanel(item.dataset.id); return; }
      if (e.target.closest(".sr-all")) aplicarBusqueda();
    });

    // Cierra la lista al tocar fuera de la barra
    document.addEventListener("click", (e) => { if (!barra.contains(e.target)) cerrarSugerencias(); });
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