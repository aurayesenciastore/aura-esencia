/* =========================================================================
   aura & ESENCIA — admin.js
   Panel de administración: permite crear, editar y eliminar productos,
   guardarlos en localStorage y descargar un catalog.js actualizado.
   ========================================================================= */

(function () {
  const STORAGE_KEY = "auraesencia_catalogo";
  const CONTACT_KEY = "auraesencia_contacto";

  // Cambia esta contraseña por la que prefieras.
  const CLAVE_ADMIN = "auraesencia2026";

  /* ------------------------------- acceso ------------------------------- */
  const gateScreen = document.getElementById("gateScreen");
  const adminMain = document.getElementById("adminMain");
  const gateForm = document.getElementById("gateForm");
  const gateError = document.getElementById("gateError");

  gateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = document.getElementById("gatePassword").value;
    if (val === CLAVE_ADMIN) {
      sessionStorage.setItem("auraesencia_admin_ok", "1");
      gateScreen.classList.add("hidden");
      adminMain.classList.remove("hidden");
      init();
    } else {
      gateError.textContent = "Contraseña incorrecta, intenta de nuevo.";
    }
  });

  if (sessionStorage.getItem("auraesencia_admin_ok") === "1") {
    gateScreen.classList.add("hidden");
    adminMain.classList.remove("hidden");
  }

  /* ------------------------------- estado ------------------------------- */
  function getProductos() {
    const guardado = localStorage.getItem(STORAGE_KEY);
    if (guardado) {
      try { return JSON.parse(guardado); } catch (e) { /* usa default */ }
    }
    return JSON.parse(JSON.stringify(CATALOGO));
  }
  function setProductos(lista) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
  }

  function getContacto() {
    const guardado = localStorage.getItem(CONTACT_KEY);
    if (guardado) {
      try { return JSON.parse(guardado); } catch (e) { /* usa default */ }
    }
    return { ...CONTACTO };
  }
  function setContacto(c) {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(c));
  }

  let productos = [];

  const money = (n) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(n);

  /* ---------------------------- tabla productos ---------------------------- */
  const tbody = document.getElementById("adminTableBody");
  const countEl = document.getElementById("countProductos");

  function renderTabla() {
    countEl.textContent = productos.length;
    if (!productos.length) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; opacity:.6;">No hay productos todavía. Crea el primero con "+ Nuevo producto".</td></tr>`;
      return;
    }
    tbody.innerHTML = productos
      .map(
        (p) => `
      <tr>
        <td><img src="${p.imagen}" alt="${p.nombre}" /></td>
        <td>${p.nombre}</td>
        <td>${p.categoria}</td>
        <td>${money(p.precio)}</td>
        <td>${(p.tallas || []).join(", ")}</td>
        <td>${p.stock}</td>
        <td>${p.destacado ? '<span class="badge-si">Sí</span>' : '<span class="badge-no">No</span>'}</td>
        <td class="row-actions">
          <button data-edit="${p.id}">Editar</button>
        </td>
      </tr>`
      )
      .join("");

    tbody.querySelectorAll("[data-edit]").forEach((btn) => {
      btn.addEventListener("click", () => abrirFormulario(btn.dataset.edit));
    });
  }

  /* ---------------------------- formulario producto ---------------------------- */
  const formScrim = document.getElementById("formScrim");
  const formPanel = document.getElementById("formPanel");
  const productForm = document.getElementById("productForm");
  const formTitle = document.getElementById("formTitle");
  const btnEliminar = document.getElementById("btnEliminar");

  const fId = document.getElementById("fId");
  const fNombre = document.getElementById("fNombre");
  const fCategoria = document.getElementById("fCategoria");
  const fPrecio = document.getElementById("fPrecio");
  const fTallas = document.getElementById("fTallas");
  const fStock = document.getElementById("fStock");
  const fDescripcion = document.getElementById("fDescripcion");
  const fImagenArchivo = document.getElementById("fImagenArchivo");
  const fImagenRuta = document.getElementById("fImagenRuta");
  const fImagenPreview = document.getElementById("fImagenPreview");
  const fDestacado = document.getElementById("fDestacado");

  let imagenDataUrl = null;

  function abrirFormulario(id) {
    productForm.reset();
    imagenDataUrl = null;
    fImagenPreview.src = "";

    if (id) {
      const p = productos.find((x) => String(x.id) === String(id));
      formTitle.textContent = "Editar producto";
      fId.value = p.id;
      fNombre.value = p.nombre;
      fCategoria.value = p.categoria;
      fPrecio.value = p.precio;
      fTallas.value = (p.tallas || []).join(", ");
      fStock.value = p.stock;
      fDescripcion.value = p.descripcion || "";
      fImagenRuta.value = p.imagen;
      fImagenPreview.src = p.imagen;
      fDestacado.checked = !!p.destacado;
      btnEliminar.classList.remove("hidden");
    } else {
      formTitle.textContent = "Nuevo producto";
      fId.value = "";
      btnEliminar.classList.add("hidden");
    }

    formPanel.classList.add("open");
    formScrim.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function cerrarFormulario() {
    formPanel.classList.remove("open");
    formScrim.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.getElementById("btnNuevo").addEventListener("click", () => abrirFormulario(null));
  document.getElementById("formCloseBtn").addEventListener("click", cerrarFormulario);
  formScrim.addEventListener("click", cerrarFormulario);

  fImagenArchivo.addEventListener("change", () => {
    const file = fImagenArchivo.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      imagenDataUrl = reader.result;
      fImagenPreview.src = imagenDataUrl;
      fImagenRuta.value = "";
    };
    reader.readAsDataURL(file);
  });
  fImagenRuta.addEventListener("input", () => {
    if (fImagenRuta.value) {
      imagenDataUrl = null;
      fImagenPreview.src = fImagenRuta.value;
    }
  });

  productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tallas = fTallas.value.split(",").map((t) => t.trim()).filter(Boolean);
    const imagen = imagenDataUrl || fImagenRuta.value || "assets/products/conjunto-algodon.jpg";

    const data = {
      id: fId.value || "p" + Date.now(),
      nombre: fNombre.value.trim(),
      categoria: fCategoria.value.trim(),
      precio: Number(fPrecio.value),
      tallas,
      stock: Number(fStock.value),
      descripcion: fDescripcion.value.trim(),
      imagen,
      destacado: fDestacado.checked,
    };

    if (fId.value) {
      productos = productos.map((p) => (String(p.id) === String(fId.value) ? data : p));
    } else {
      productos.push(data);
    }

    setProductos(productos);
    renderTabla();
    cerrarFormulario();
  });

  btnEliminar.addEventListener("click", () => {
    if (!fId.value) return;
    if (!confirm("¿Eliminar este producto del catálogo?")) return;
    productos = productos.filter((p) => String(p.id) !== String(fId.value));
    setProductos(productos);
    renderTabla();
    cerrarFormulario();
  });

  /* ---------------------------- contacto ---------------------------- */
  const contactForm = document.getElementById("contactForm");
  const cWhatsapp = document.getElementById("cWhatsapp");
  const cInstagram = document.getElementById("cInstagram");
  const cTiktok = document.getElementById("cTiktok");
  const contactSaved = document.getElementById("contactSaved");

  function cargarContacto() {
    const c = getContacto();
    cWhatsapp.value = c.whatsapp;
    cInstagram.value = c.instagram;
    cTiktok.value = c.tiktok;
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    setContacto({
      whatsapp: cWhatsapp.value.trim(),
      instagram: cInstagram.value.trim(),
      tiktok: cTiktok.value.trim(),
    });
    contactSaved.classList.add("show");
    setTimeout(() => contactSaved.classList.remove("show"), 2000);
  });

  /* ---------------------------- exportar / restaurar ---------------------------- */
  document.getElementById("btnDescargar").addEventListener("click", () => {
    const contacto = getContacto();
    const contenido = `/* =========================================================================
   CATÁLOGO — aura & ESENCIA
   Generado desde el Panel de administración el ${new Date().toLocaleString("es-CO")}
   Sube este archivo a tu hosting reemplazando js/catalog.js para publicar
   los cambios para todas las personas que visiten la página.
   ========================================================================= */

const CATALOGO = ${JSON.stringify(productos, null, 2)};

const CONTACTO = ${JSON.stringify(contacto, null, 2)};
`;
    const blob = new Blob([contenido], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "catalog.js";
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("btnRestaurar").addEventListener("click", () => {
    if (!confirm("Esto reemplaza tus cambios guardados en este navegador por el catálogo original del archivo catalog.js. ¿Continuar?")) return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(CONTACT_KEY);
    productos = getProductos();
    renderTabla();
    cargarContacto();
  });

  /* --------------------------------- init --------------------------------- */
  function init() {
    productos = getProductos();
    renderTabla();
    cargarContacto();
  }

  if (sessionStorage.getItem("auraesencia_admin_ok") === "1") init();
})();
