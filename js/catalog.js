/* =========================================================================
   CATÁLOGO — aura & ESENCIA
   =========================================================================
   Este archivo es el "corazón" editable de la tienda.
   Para actualizar el catálogo (agregar, quitar o modificar productos)
   solo tienes que editar la lista de abajo. No necesitas tocar ningún
   otro archivo del sitio.

   También puedes hacer todos estos cambios de forma visual, sin tocar
   código, desde el Panel de administración: admin.html
   (el panel guarda los cambios aquí mismo, en este archivo, cuando usas
   el botón "Descargar catalog.js actualizado").

   CÓMO AGREGAR UN PRODUCTO NUEVO:
   1) Copia uno de los bloques { ... } de abajo (desde { hasta la , final).
   2) Pégalo dentro de la lista, antes del corchete final "];".
   3) Cambia los datos (nombre, precio, tallas, stock, imagen, descripción).
   4) Dale a cada producto un "id" que no se repita.

   CAMPOS DE CADA PRODUCTO:
   - id          → identificador único (texto o número), no lo repitas.
   - nombre      → nombre del producto.
   - categoria   → texto libre, se usa para los filtros del catálogo.
   - precio      → número, sin puntos ni comas (ej: 89000).
   - tallas      → lista de tallas disponibles, ej: ["S","M","L"].
   - stock       → número de unidades disponibles (0 = agotado).
   - descripcion → texto corto que se ve en la ficha del producto.
   - imagen      → ruta al archivo de imagen (carpeta assets/products/).
   - destacado   → true / false → si true, aparece en "Destacados".
   ========================================================================= */

const CATALOGO = [
  {
    id: "p001",
    nombre: "Short + top + tanga",
    categoria: "Pijamas",
    precio: 35000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Conjunto fresco y femenino, ideal para descansar con comodidad y estilo.",
    imagen: "assets/products/short-top-tanga.jpg",
    destacado: true,
  },
  {
    id: "p002",
    nombre: "Trio bata + top + short",
    categoria: "Pijamas",
    precio: 49000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Un conjunto completo y cómodo, perfecto para disfrutar tus momentos de descanso.",
    imagen: "assets/products/bata-top-short.jpg",
    destacado: true,
  },
  {
    id: "p003",
    nombre: "Short + top ruedo",
    categoria: "Pijamas",
    precio: 30000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Diseño ligero y delicado que combina comodidad con un toque femenino.",
    imagen: "assets/products/Short-topruedo.jpg",
    destacado: true,
  },
  {
    id: "p004",
    nombre: "Short bolero + blusa tira",
    categoria: "Pijamas",
    precio: 30000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Un conjunto fresco y encantador, ideal para noches cómodas y relajadas.",
    imagen: "assets/products/Short bolero-blusatira.jpg",
    destacado: true,
  },
    {
    id: "p005",
    nombre: "Short bolero + blusa tira",
    categoria: "Pijamas",
    precio: 30000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Un conjunto fresco y encantador, ideal para noches cómodas y relajadas.",
    imagen: "assets/products/Short bolero-blusa tiraG.jpg",
    destacado: true,
  },
  {
    id: "p006",
    nombre: "Short ruedo + blusa tira",
    categoria: "Pijamas",
    precio: 30000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Cómodo y ligero, perfecto para descansar con libertad y frescura.",
    imagen: "assets/products/short ruedo-blusa tira.jpg",
    destacado: true,
  },
  {
    id: "p007",
    nombre: "Short ruedo + blusa tira",
    categoria: "Pijamas",
    precio: 30000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Cómodo y ligero, perfecto para descansar con libertad y frescura.",
    imagen: "assets/products/Short ruedo-blusa tiraG.jpg",
    destacado: true,
  },
  {
    id: "p008",
    nombre: "Pantalón RENATA",
    categoria: "Pijamas",
    precio: 68000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Un conjunto delicado de dos piezas, con detalles encantadores y un diseño cómodo que combina suavidad, frescura y un toque muy femenino.",
    imagen: "assets/products/pantalon-renata (2).jpg",
    destacado: true,
  },
  {
    id: "p009",
    nombre: "Short ruedo + camisa manga",
    categoria: "Pijamas",
    precio: 32000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Una opción cómoda y versátil con un estilo clásico para tus noches de descanso.",
    imagen: "assets/products/shortruedo-camisamanga.jpg",
    destacado: true,
  },
  {
    id: "p010",
    nombre: "Short ruedo + camisa manga",
    categoria: "Pijamas",
    precio: 36000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Una opción cómoda y versátil con un estilo clásico para tus noches de descanso.",
    imagen: "assets/products/Short ruedo-camisamangaG.jpg",
    destacado: true,
  },
  {
    id: "p011",
    nombre: "Short pretina + blusa tira",
    categoria: "Pijamas",
    precio: 40000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Diseño cómodo y moderno, ideal para sentirte fresca y relajada durante toda la noche.",
    imagen: "assets/products/Shortpretina-blusatira.jpg",
    destacado: true,
  },
  {
    id: "p012",
    nombre: "Short pretina + blusa manga",
    categoria: "Pijamas",
    precio: 41000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Una combinación cómoda y elegante para disfrutar de un descanso agradable.",
    imagen: "assets/products/shortpretina-blusamanga.jpg",
    destacado: true,
  },
  {
    id: "p013",
    nombre: "Short pretina + top pretina",
    categoria: "Pijamas",
    precio: 41000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Conjunto moderno y cómodo, perfecto para quienes buscan un estilo sencillo y femenino.",
    imagen: "assets/products/short pretina-toppretina.jpg",
    destacado: true,
  },
  {
    id: "p014",
    nombre: "Short pretina + top pretina",
    categoria: "Pijamas",
    precio: 43000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Conjunto moderno y cómodo, perfecto para quienes buscan un estilo sencillo y femenino.",
    imagen: "assets/products/Short pretina-top pretina.jpg",
    destacado: true,
  },
  {
    id: "p015",
    nombre: "Short satin + blusa tira",
    categoria: "Pijamas",
    precio: 47000,
    tallas: ["S-M-L-XL"],
    stock: "Por encargo",
    descripcion:
      "Suave y delicado, con un acabado satinado que aporta un toque elegante y especial.",
    imagen: "assets/products/Short satin-blusa tira.jpg",
    destacado: true,
  },
  {
    id: "p016",
    nombre: "Short satin + blusa tira estampada",
    categoria: "Pijamas",
    precio: 62000,
    tallas: ["S-M-L-XL"],
    stock: "Por encargo",
    descripcion:
      "Diseño sofisticado y femenino que combina la suavidad del satín con un estampado llamativo.",
    imagen: "assets/products/Short satin-blusa tira estampada.jpg",
    destacado: true,
  },
  {
    id: "p017",
    nombre: "Capri + blusa tira",
    categoria: "Pijamas",
    precio: 38000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Cómoda y fresca, perfecta para descansar con un estilo sencillo y femenino.",
    imagen: "assets/products/Capri-blusa tira.jpg",
    destacado: true,
  },
  {
    id: "p018",
    nombre: "Capri + blusa tira",
    categoria: "Pijamas",
    precio: 42000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Cómoda y fresca, perfecta para descansar con un estilo sencillo y femenino.",
    imagen: "assets/products/capri-blusa tiraG.jpg",
    destacado: true,
  },
  {
    id: "p019",
    nombre: "Capri + camisa manga",
    categoria: "Pijamas",
    precio: 48000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Una combinación cómoda y versátil, ideal para noches tranquilas y relajadas.",
    imagen: "assets/products/Capri-camisa manga.jpg",
    destacado: true,
  },
  {
    id: "p020",
    nombre: "Capri + camisa manga",
    categoria: "Pijamas",
    precio: 50000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Una combinación cómoda y versátil, ideal para noches tranquilas y relajadas.",
    imagen: "assets/products/Capri-camisa mangaG.jpg",
    destacado: true,
  },
  {
    id: "p021",
    nombre: "Pantalón + blusa mangas",
    categoria: "Pijamas",
    precio: 43000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Conjunto cómodo y acogedor, ideal para descansar sintiéndote cómoda durante toda la noche.",
    imagen: "assets/products/Pantalon-blusa mangas.jpg",
    destacado: true,
  },
  {
    id: "p022",
    nombre: "Pantalón + top",
    categoria: "Pijamas",
    precio: 36000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Diseño sencillo y fresco que ofrece comodidad sin perder el estilo.",
    imagen: "assets/products/pantalon-top.jpg",
    destacado: true,
  },
  {
    id: "p023",
    nombre: "Pantalón + blusa tiras",
    categoria: "Pijamas",
    precio: 40000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Una opción ligera y femenina para disfrutar de tus momentos de descanso.",
    imagen: "assets/products/Pantalon-blusa tiras.jpg",
    destacado: true,
  },
  {
    id: "p024",
    nombre: "Pantalón + blusa tiras",
    categoria: "Pijamas",
    precio: 45000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Una opción ligera y femenina para disfrutar de tus momentos de descanso.",
    imagen: "assets/products/Pantalón-blusa tirasG.jpg",
    destacado: true,
  },
  {
    id: "p025",
    nombre: "Pantalón + camisa manga",
    categoria: "Pijamas",
    precio: 50000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Cómodo y versátil, perfecto para quienes prefieren un estilo más cubierto y relajado.",
    imagen: "assets/products/Pantalón-camisa manga.jpg",
    destacado: true,
  },
  {
    id: "p026",
    nombre: "Pantalón + camisa manga",
    categoria: "Pijamas",
    precio: 55000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Cómodo y versátil, perfecto para quienes prefieren un estilo más cubierto y relajado.",
    imagen: "assets/products/Pantalón-camisa mangaG.jpg",
    destacado: true,
  },
  {
    id: "p027",
    nombre: "Pantalón pretina + blusa tira",
    categoria: "Pijamas",
    precio: 50000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Diseño moderno y cómodo, pensado para brindarte libertad y comodidad al descansar.",
    imagen: "assets/products/Pantalón pretina-blusa tira.jpg",
    destacado: true,
  },
  {
    id: "p028",
    nombre: "Pantalón satín + blusa tiras",
    categoria: "Pijamas",
    precio: 65000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Suave, elegante y femenino, ideal para darle un toque especial a tus noches.",
    imagen: "assets/products/Pantalón satín-blusa tiras.jpg",
    destacado: true,
  },
  {
    id: "p029",
    nombre: "Pantalón satín + blusa tiras",
    categoria: "Pijamas",
    precio: 68000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Suave, elegante y femenino, ideal para darle un toque especial a tus noches.",
    imagen: "assets/products/Pantalón satín-blusa tirasG.jpg",
    destacado: true,
  },
  {
    id: "p030",
    nombre: "Batola manga",
    categoria: "Pijamas",
    precio: 68000,
    tallas: ["XL-XXL"],
    stock: "Por encargo",
    descripcion:
      "Cómoda y práctica, perfecta para descansar con una sensación agradable y relajada.",
    imagen: "assets/products/batola-manga.jpg",
    destacado: true,
  },
  {
    id: "p031",
    nombre: "Batola tira",
    categoria: "Pijamas",
    precio: 30000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Ligera y fresca, ideal para noches cálidas y momentos de descanso.",
    imagen: "assets/products/batola-tira.jpg",
    destacado: true,
  },
  {
    id: "p032",
    nombre: "Batola Sisa",
    categoria: "Pijamas",
    precio: 40000,
    tallas: ["L-XL"],
    stock: "Por encargo",
    descripcion:
      "Diseño cómodo y fresco que te permite descansar con total libertad.",
    imagen: "assets/products/batola-sisa.jpg",
    destacado: true,
  },
  {
    id: "p033",
    nombre: "Batola Satín",
    categoria: "Pijamas",
    precio: 35000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Delicada y elegante, con un acabado satinado perfecto para sentirte cómoda y sofisticada.",
    imagen: "assets/products/batola-satin.jpg",
    destacado: true,
  },
  {
    id: "p034",
    nombre: "Enterizo Push",
    categoria: "Pijamas",
    precio: 30000,
    tallas: ["S-M"],
    stock: "Por encargo",
    descripcion:
      "Diseño ajustado y femenino que combina comodidad con un toque moderno y atractivo.",
    imagen: "assets/products/Enterizo-Push.jpg",
    destacado: true,
  },
  {
    id: "p035",
    nombre: "Pantalón + camisa niños y niñas",
    categoria: "Pijamas",
    precio: 35000,
    tallas: ["2/4", "6/8", "10/12", "14/16"],
    stock: "Por encargo",
    descripcion:
      "Diseño ajustado y femenino que combina comodidad con un toque moderno y atractivo.",
    imagen: "assets/products/pantalon-niño.jpg",
    destacado: true,
  },
  {
    id: "p035",
    nombre: "Short + camisa niños y niñas",
    categoria: "Pijamas",
    precio: 28000,
    tallas: ["2/4", "6/8", "10/12", "14/16"],
    stock: "Por encargo",
    descripcion:
      "Diseño ajustado y femenino que combina comodidad con un toque moderno y atractivo.",
    imagen: "assets/products/short-niño.jpg",
    destacado: true,
  },
  {
    id: "m001",
    nombre: "Mantequilla Corporal Durazno - 180 g",
    categoria: "Maquillaje",
    precio: 15000,
    stock: 4,
    tallas: [],
    descripcion:
      "Una caricia cremosa para tu piel con textura tipo helado que se derrite suavemente sobre el cuerpo. Su fórmula ligera hidrata en profundidad y deja la piel suave, sedosa y con un delicado aroma a durazno mielado irresistible.",
    imagen: "assets/products/mantequilla-durazno.jpg",
    destacado: true,
  },
  {
    id: "m002",
    nombre: "Spray Shimmer Tornasol",
    categoria: "Maquillaje",
    precio: 14000,
    stock: 4,
    tallas: [],
    descripcion:
      "Refresca tu piel y eleva tu mood al instante con este body splash con destellos. Perfuma suavemente y deja un glow sutil que realza tu piel bajo el sol o la luz.",
    imagen: "assets/products/spray-brillo.jpg",
    destacado: true,
  },

  {
    id: "m003",
    nombre: "Crema de Manos OneSpring",
    categoria: "Maquillaje",
    precio: 2500,
    stock: 50,
    tallas: [],
    descripcion:
      "Un kit completo para consentir tus manos con 5 fragancias frutales y florales irresistibles. Fórmula ligera de rápida absorción que hidrata intensamente sin dejar sensación grasosa, ideal para llevar siempre contigo.",
    imagen: "assets/products/cremas-manos.jpg",
    destacado: true,
  },

  {
    id: "m004",
    nombre: "Kit Corporal Bioaqua Vainilla Ice Cream Exfoliante e Hidratante",
    categoria: "Maquillaje",
    precio: 30000,
    stock: 2,
    tallas: [],
    descripcion:
      "Este kit corporal combina sales exfoliantes y mantequilla corporal para limpiar, suavizar y nutrir la piel. Ideal para mejorar la textura, eliminar células muertas y dejar la piel hidratada con una fragancia tipo postre irresistible.",
    imagen: "assets/products/kit-corporal.jpg",
    destacado: true,
  },

  {
    id: "m005",
    nombre: "Mascarilla Piel Luminosa",
    categoria: "Maquillaje",
    precio: 5500,
    stock: 12,
    tallas: [],
    descripcion:
      "Rutina de mascarillas para iluminar, calmar y revitalizar con fórmulas pensadas para distintas necesidades de tu piel.",
    imagen: "assets/products/mascarillas-piel.jpg",
    destacado: true,
  },

  {
    id: "m006",
    nombre: "Suero Aclarante Bioaqua",
    categoria: "Maquillaje",
    precio: 7500,
    stock: 12,
    tallas: [],
    descripcion:
      "Si buscas tratar manchas, acné y signos de edad al mismo tiempo, este set es una solución completa en sueros. Incluye 3 sueros concentrados que trabajan en conjunto para mejorar la textura, iluminar el tono y regenerar la piel.",
    imagen: "assets/products/sueros-aclarantes.jpg",
    destacado: true,
  },

  {
    id: "m007",
    nombre: "Mascarillas Faciales Bioaqua",
    categoria: "Maquillaje",
    precio: 2000,
    stock: 120,
    tallas: [],
    descripcion:
      "Estas mascarillas faciales incluyen diferentes activos como vitamina C, retinol y ácido hialurónico, ideales para hidratar, mejorar la textura de la piel y aportar luminosidad. Perfecto para una rutina constante de cuidado facial en casa.",
    imagen: "assets/products/mascarillas.jpg",
    destacado: true,
  },
];

/* =========================================================================
   DATOS DE CONTACTO Y REDES
   Cambia aquí tu número de WhatsApp (con código de país, sin + ni espacios)
   y los enlaces de Instagram y TikTok.
   ========================================================================= */
const CONTACTO = {
  whatsapp: "573012323671", // ← reemplaza por tu número real
  instagram: "https://www.instagram.com/aurayesencia_store/", // ← reemplaza por tu usuario real
  tiktok: "https://www.tiktok.com/@aura.esencia.store?_r=1&_t=ZS-98eEShmdg05", // ← reemplaza por tu usuario real
};
