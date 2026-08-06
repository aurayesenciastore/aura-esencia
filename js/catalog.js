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
    nombre: "Conjunto de Encaje Aura",
    categoria: "Conjuntos",
    precio: 129000,
    tallas: ["S", "M", "L"],
    stock: 8,
    descripcion:
      "Conjunto de brasier y panty en encaje delicado, forro interior en algodón y ajuste suave. Ideal para uso diario o una ocasión especial.",
    imagen: "assets/products/conjunto-encaje.jpg",
    destacado: true,
  },
  {
    id: "p002",
    nombre: "Pijama Satinada Esencia",
    categoria: "Pijamas",
    precio: 149000,
    tallas: ["S", "M", "L", "XL"],
    stock: 5,
    descripcion:
      "Set de pijama en satén con caída fluida, blusa de tirantes y short a juego. Suave al tacto y fresca para dormir.",
    imagen: "assets/products/pijama-saten.jpg",
    destacado: true,
  },
  {
    id: "p003",
    nombre: "Body Strapless Midnight",
    categoria: "Bodies",
    precio: 99000,
    tallas: ["S", "M"],
    stock: 0,
    descripcion:
      "Body strapless con varillas internas para mayor soporte, tela con leve brillo y acabado en encaje en el escote.",
    imagen: "assets/products/body-strapless.jpg",
    destacado: false,
  },
  {
    id: "p004",
    nombre: "Conjunto Algodón Suave",
    categoria: "Conjuntos",
    precio: 79000,
    tallas: ["S", "M", "L", "XL"],
    stock: 15,
    descripcion:
      "Conjunto básico en algodón elastizado, perfecto para el día a día. Transpirable, cómodo y de uso prolongado.",
    imagen: "assets/products/conjunto-algodon.jpg",
    destacado: false,
  },
  {
    id: "p005",
    nombre: "Bralette Triángulo Flor",
    categoria: "Bralettes",
    precio: 65000,
    tallas: ["Única"],
    stock: 3,
    descripcion:
      "Bralette sin varillas con detalle floral bordado, tirantes ajustables y máxima comodidad sin sacrificar estilo.",
    imagen: "assets/products/bralette-triangulo.jpg",
    destacado: true,
  },
  {
    id: "p006",
    nombre: "Pijama Seda Nocturna",
    categoria: "Pijamas",
    precio: 189000,
    tallas: ["M", "L"],
    stock: 2,
    descripcion:
      "Set en seda sintética premium, camisa manga larga y pantalón recto. Elegancia total para las noches más especiales.",
    imagen: "assets/products/pijama-seda.jpg",
    destacado: false,
  },
];

/* =========================================================================
   DATOS DE CONTACTO Y REDES
   Cambia aquí tu número de WhatsApp (con código de país, sin + ni espacios)
   y los enlaces de Instagram y TikTok.
   ========================================================================= */
const CONTACTO = {
  whatsapp: "573001234567", // ← reemplaza por tu número real
  instagram: "https://instagram.com/aura.esencia", // ← reemplaza por tu usuario real
  tiktok: "https://tiktok.com/@aura.esencia", // ← reemplaza por tu usuario real
};
