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
    stock: 6,
    descripcion:
      "Elaborada en piel de durazno, cublimada de excelente calidad. Hermosos estampados full color que enamoran. Súper cómoda, fresca y perfecta para lucir divina en casa.",
    imagen: "assets/products/short-xia.jpeg",
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
      "Set de pijama en satén con caída fluida, blusa de tirantes y short a juego. Suave al tacto y fresca para dormir.",
    imagen: "assets/products/pijama-saten.jpg",
    destacado: true,
  },
  {
    id: "p003",
    nombre: "Short RENATA",
    categoria: "Pijamas",
    precio: 60000,
    tallas: ["M"],
    stock: 2,
    descripcion:
      "Body strapless con varillas internas para mayor soporte, tela con leve brillo y acabado en encaje en el escote.",
    imagen: "assets/products/body-strapless.jpg",
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
      "Conjunto básico en algodón elastizado, perfecto para el día a día. Transpirable, cómodo y de uso prolongado.",
    imagen: "assets/products/conjunto-algodon.jpg",
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
    imagen: "assets/products/bralette-triangulo.jpg",
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
      "Set en seda sintética premium, camisa manga larga y pantalón recto. Elegancia total para las noches más especiales.",
    imagen: "assets/products/pijama-seda.jpg",
    destacado: true,
  },
  {
    id: "p007",
    nombre: "Pantalón RENATA",
    categoria: "Pijamas",
    precio: 68000,
    tallas: ["L", "XL"],
    stock: 2,
    descripcion:
      "Set en seda sintética premium, camisa manga larga y pantalón recto. Elegancia total para las noches más especiales.",
    imagen: "assets/products/pijama-seda.jpg",
    destacado: true,
  },
  {
    id: "p008",
    nombre: "JAZMIN",
    categoria: "Lencería",
    precio: 38000,
    tallas: ["TALLA ÚNICA"],
    stock: 4,
    descripcion:
      "Set en seda sintética premium, camisa manga larga y pantalón recto. Elegancia total para las noches más especiales.",
    imagen: "assets/products/pijama-seda.jpg",
    destacado: true,
  },
  {
    id: "p009",
    nombre: "LAURA",
    categoria: "Lencería",
    precio: 40000,
    tallas: ["TALLA ÚNICA"],
    stock: 6,
    descripcion:
      "Set en seda sintética premium, camisa manga larga y pantalón recto. Elegancia total para las noches más especiales.",
    imagen: "assets/products/pijama-seda.jpg",
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
