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
    nombre: "Short XIA",
    categoria: "Pijamas",
    precio: 30000,
    tallas: ["TALLA ÚNICA"],
    stock: 5,
    descripcion:
      "Elaborada en piel de durazno, sublimada de excelente calidad. Hermosos estampados full color que enamoran. Súper cómoda, fresca y perfecta para lucir divina en casa.",
    imagen: "assets/products/short-xia.jpg",
    destacado: true,
  },
  {
    id: "p002",
    nombre: "Short DANNA",
    categoria: "Pijamas",
    precio: 38000,
    tallas: ["TALLA ÚNICA"],
    stock: 4,
    descripcion:
      "Conjunto coordinado de dos piezas que combina la comodidad de una camiseta de manga corta con un short ajustado de estilo fresco y juvenil.",
    imagen: "assets/products/short-danna.jpg",
    destacado: true,
  },
  {
    id: "p003",
    nombre: "Short RENATA",
    categoria: "Pijamas",
    precio: 60000,
    tallas: ["S-M"],
    stock: 2,
    descripcion:
      "¡Dulce, fresca y súper coqueta! Conjunto de pijama corta de dos piezas tipo abotonada, diseñada con estampados divertidos que te harán lucir divina y sentirte ultra cómoda para un descanso perfecto.",
    imagen: "assets/products/short-renata.jpg",
    destacado: true,
  },
  {
    id: "p004",
    nombre: "Enterizo MICHELL",
    categoria: "Pijamas",
    precio: 38000,
    tallas: ["TALLA ÚNICA"],
    stock: 2,
    descripcion:
      "nterizo de pijama femenino, fresco, cómodo y encantador. Su diseño ajustado y estampado divertido resaltan la silueta, mientras que su estilo juvenil lo hace perfecto para descansar con un toque coqueto y femenino.",
    imagen: "assets/products/enterizo-michelle.jpg",
    destacado: true,
  },
  {
    id: "p005",
    nombre: "Enterizo ZOE",
    categoria: "Pijamas",
    precio: 38000,
    tallas: ["TALLA ÚNICA"],
    stock: 2,
    descripcion:
      "Bralette sin varillas con detalle floral bordado, tirantes ajustables y máxima comodidad sin sacrificar estilo.",
    imagen: "assets/products/enterizo-zoe.jpg",
    destacado: true,
  },
  {
    id: "p006",
    nombre: "Capri MILAGROS",
    categoria: "Pijamas",
    precio: 40000,
    tallas: ["TALLA ÚNICA"],
    stock: 2,
    descripcion:
      "Un conjunto fresco y femenino, con estampados encantadores y un short cómodo que aporta libertad de movimiento. Perfecto para descansar sintiéndote linda y cómoda.",
    imagen: "assets/products/capri-milagros.jpg",
    destacado: true,
  },
  {
    id: "p007",
    nombre: "Pantalón RENATA",
    categoria: "Pijamas",
    precio: 68000,
    tallas: ["L-XL"],
    stock: 2,
    descripcion:
      "Un conjunto delicado de dos piezas, con detalles encantadores y un diseño cómodo que combina suavidad, frescura y un toque muy femenino.",
    imagen: "assets/products/pantalon-renata (2).jpg",
    destacado: true,
  },
  {
    id: "p008",
    nombre: "Short AMOR",
    categoria: "Pijamas",
    precio: 38000,
    tallas: ["M-L"],
    stock: "Por encargo",
    descripcion:
      "Añade un toque coqueto y súper cómodo a tus noches con este conjunto de dos piezas. Diseñado con llamativos estampados, que resaltan su estilo moderno y juvenil.",
    imagen: "assets/products/short-amor.jpg",
    destacado: true,
  },
  {
    id: "p009",
    nombre: "ZARA",
    categoria: "Pijamas",
    precio: 38000,
    tallas: ["L"],
    stock: "Por encargo",
    descripcion:
      "Pijama corta con diseño estampado colorido, ideal para descansar con comodidad y estilo. Su diseño fresco y femenino la convierte en una opción perfecta para noches cómodas y relajadas.",
    imagen: "assets/products/zara.jpg",
    destacado: true,
  },
  {
    id: "p0010",
    nombre: "Pantalon ALISSON",
    categoria: "Pijamas",
    precio: 38000,
    tallas: ["S-M","L-LX"],
    stock: "Por encargo",
    descripcion:
      "Disfruta de tus momentos de descanso con la combinación perfecta entre estilo, frescura y máxima comodidad. Diseñada para brindarte un ajuste favorecedor y libertad de movimiento durante toda la noche o tus días de relax en casa.",
    imagen: "assets/products/pantalon-alisson.jpg",
    destacado: true,
  },
  {
    id: "p011",
    nombre: "JAZMIN",
    categoria: "Lencería",
    precio: 38000,
    tallas: ["TALLA ÚNICA"],
    stock: 4,
    descripcion:
      "Conjunto sensual de dos piezas en encaje floral. Incluye bralette triangular con tiras decorativas en el escote e hilo con diseño de tiras múltiples en las caderas. Perfecto para un look audaz y moderno.",
    imagen: "assets/products/lenceria-jazmin.jpg",
    destacado: true,
  },
  {
    id: "p012",
    nombre: "LAURA",
    categoria: "Lencería",
    precio: 40000,
    tallas: ["TALLA ÚNICA"],
    stock: 6,
    descripcion:
      "Conjunto romántico en encaje floral. Destaca por su top bralette de base ancha con escote en V e hilo a juego con detalles de lazos de satén. Combina comodidad, soporte y elegancia.",
    imagen: "assets/products/lenceria-laura.jpg",
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
