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
    nombre: "Short + blusa tira + tanga",
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
    id: "p036",
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
    categoria: "Skincare",
    precio: 15000,
    stock: 0,
    tallas: [],
    descripcion:
      "Una caricia cremosa para tu piel con textura tipo helado que se derrite suavemente sobre el cuerpo. Su fórmula ligera hidrata en profundidad y deja la piel suave, sedosa y con un delicado aroma a durazno mielado irresistible.",
    imagen: "assets/products/mantequilla-durazno.jpg",
    destacado: true,
  },

{
    id: "m002",
    nombre: "Mantequilla Corporal Vainilla - 200 g",
    categoria: "Skincare",
    precio: 15000,
    stock: 1,
    tallas: [],
    descripcion:
      "Esta mantequilla corporal con fragancia de vainilla ayuda a nutrir profundamente la piel, dejándola suave, hidratada y con una sensación sedosa. Su textura rica es ideal para pieles secas o zonas que necesitan mayor hidratación.",
    imagen: "assets/products/mantequilla-vainilla.jpg",
    destacado: true,
  },

{
    id: "m003",
    nombre: "Kit Corporal Bioaqua Vainilla Ice Cream Exfoliante e Hidratante",
    categoria: "Skincare",
    precio: 30000,
    stock: 0,
    tallas: [],
    descripcion:
      "Este kit corporal combina sales exfoliantes y mantequilla corporal para limpiar, suavizar y nutrir la piel. Ideal para mejorar la textura, eliminar células muertas y dejar la piel hidratada con una fragancia tipo postre irresistible.",
    imagen: "assets/products/kit-corporal.jpg",
    destacado: true,
  },

{
  id: "m004",
    nombre: "Sales de baño Bioaqua Strawberry Cake Exfoliantes y Suavizantes",
    categoria: "Skincare",
    precio: 18000,
    stock: 3,
    tallas: [],
    descripcion:
      "Este kit corporal combina sales exfoliantes y mantequilla corporal para limpiar, suavizar y nutrir la piel. Ideal para mejorar la textura, eliminar células muertas y dejar la piel hidratada con una fragancia tipo postre irresistible.",
    imagen: "assets/products/sales-baño-fresa.jpg",
    destacado: true,
  },

{
    id: "m005",
    nombre: "Gel de Ducha Hidratante Luminoso Fabolai",
    categoria: "Skincare",
    precio: 18000,
    stock: 1,
    tallas: [],
    descripcion:
      "Este gel con glitter combina fragancia suave y fresca con partículas iluminadoras que dejan la piel con un brillo delicado y elegante. Su textura ligera se absorbe fácilmente, aportando luminosidad sin sensación pegajosa. Ideal para usar en el cuerpo, brazos, escote y piernas logrando un efecto glow instantáneo perfecto para el día o la noche",
    imagen: "assets/products/gel-ducha.jpg",
    destacado: true,
  },

{
    id: "m006",
    nombre: "Jabon de rosas con Acido Hialuronico Bioaqua",
    categoria: "Skincare",
    precio: 11000,
    stock: 1,
    tallas: [],
    descripcion:
      "Limpieza profunda que suaviza e ilumina. Jabón facial con extracto de rosas, ácido hialurónico y AHA para renovar la textura, retirar impurezas y dejar la piel fresca y radiante",
    imagen: "assets/products/jabon-rosas.jpg",
    destacado: true,
  },

{
    id: "m007",
    nombre: "Espuma Limpiadora Centella Asiática",
    categoria: "Skincare",
    precio: 16000,
    stock: 2,
    tallas: [],
    descripcion:
      "La Espuma Limpiadora Facial Centella Asiática Bioaqua limpia suavemente la piel mientras ayuda a eliminar impurezas, exceso de grasa y residuos de maquillaje. Su fórmula enriquecida con centella asiática aporta una sensación de frescura, hidratación y confort, dejando el rostro limpio, suave y con una apariencia saludable sin sensación de resequedad.",
    imagen: "assets/products/espuma-centella.jpg",
    destacado: true,
  },

{
    id: "m008",
    nombre: "Jabón Facial con Aminoácidos",
    categoria: "Skincare",
    precio: 16000,
    stock: 1,
    tallas: [],
    descripcion:
      "Fórmula espumosa con aminoácidos diseñada para limpiar a profundidad pieles grasas sin resecar. El aplicador con cepillo ayuda a retirar células muertas y suciedad para una piel más suave y luminosa..",
    imagen: "assets/products/jabon-aminoacidos.jpg",
    destacado: true,
  },

{
    id: "m009",
    nombre: "Caja de Mascarillas Faciales Bioaqua x30",
    categoria: "Skincare",
    precio: 50000,
    stock: 2,
    tallas: [],
    descripcion:
      "Estas mascarillas faciales incluyen diferentes activos como vitamina C, retinol y ácido hialurónico, ideales para hidratar, mejorar la textura de la piel y aportar luminosidad. Perfecto para una rutina constante de cuidado facial en casa.",
    imagen: "assets/products/kit-mascarillas.jpg",
    destacado: true,
  },

{
    id: "m010",
    nombre: "Mascarillas Faciales Bioaqua",
    categoria: "Skincare",
    precio: 2000,
    stock: 24,
    tallas: [],
    descripcion:
      "Estas mascarillas faciales incluyen diferentes activos como vitamina C, retinol y ácido hialurónico, ideales para hidratar, mejorar la textura de la piel y aportar luminosidad. Perfecto para una rutina constante de cuidado facial en casa.",
    imagen: "assets/products/mascarillas.jpg",
    destacado: true,
  },

{
    id: "m011",
    nombre: "Kit de Mascarillas Piel Luminosa x3",
    categoria: "Skincare",
    precio: 16000,
    stock: 2,
    tallas: [],
    descripcion:
      "Rutina de mascarillas para iluminar, calmar y revitalizar con fórmulas pensadas para distintas necesidades de tu piel.",
    imagen: "assets/products/mascarillas-piel.jpg",
    destacado: true,
  },

{
    id: "m012",
    nombre: "Mascarilla Piel Luminosa",
    categoria: "Skincare",
    precio: 5500,
    stock: 2,
    tallas: [],
    descripcion:
      "Rutina de mascarillas para iluminar, calmar y revitalizar con fórmulas pensadas para distintas necesidades de tu piel.",
    imagen: "assets/products/mascarillas-individual.jpg",
    destacado: true,
  },

{
    id: "m013",
    nombre: "Kit de Sueros Aclarantes Bioaqua x3",
    categoria: "Skincare",
    precio: 22000,
    stock: 2,
    tallas: [],
    descripcion:
      "Si buscas tratar manchas, acné y signos de edad al mismo tiempo, este set es una solución completa en sueros. Incluye 3 sueros concentrados que trabajan en conjunto para mejorar la textura, iluminar el tono y regenerar la piel.",
    imagen: "assets/products/sueros-aclarantes.jpg",
    destacado: true,
  },

{
    id: "m014",
    nombre: "Suero Aclarante Bioaqua",
    categoria: "Skincare",
    precio: 7500,
    stock: 3,
    tallas: [],
    descripcion:
      "Si buscas tratar manchas, acné y signos de edad al mismo tiempo, este set es una solución completa en sueros. Ideal para: piel con manchas, piel con marcas, piel con acné, piel opaca.",
    imagen: "assets/products/sueros-unidad.jpg",
    destacado: true,
  },

{
    id: "m015",
    nombre: "Parches Antiacné Invisibles Sadoer (36 und)",
    categoria: "Skincare",
    precio: 12000,
    stock: 1,
    tallas: [],
    descripcion:
      "Solución rápida, discreta y efectiva para granitos inesperados. Estos parches ayudan a absorber impurezas, proteger el brote y mejorar visiblemente su apariencia sin resecar la piel. Su diseño ultra delgado se adapta perfectamente al rostro y puedes usarlos incluso durante el día.",
    imagen: "assets/products/parches-acne.jpg",
    destacado: true,
  },

{
    id: "m016",
    nombre: "Parches para Puntos Negros Disunie",
    categoria: "Skincare",
    precio: 1200,
    stock: 3,
    tallas: [],
    descripcion:
      "Elimina eficazmente los puntos negros, exceso de grasa y suciedad acumulada en la nariz. Su fórmula con carbón de bambú y alfa-arbutina limpia en profundidad, ayuda a reducir los poros y deja la piel suave y luminosa.",
    imagen: "assets/products/parches-puntos-negros.jpg",
    destacado: true,
  },

{
    id: "m017",
    nombre: "Spray Shimmer Tornasol",
    categoria: "Skincare",
    precio: 14000,
    stock: 3,
    tallas: [],
    descripcion:
      "Refresca tu piel y eleva tu mood al instante con este body splash con destellos. Perfuma suavemente y deja un glow sutil que realza tu piel bajo el sol o la luz.",
    imagen: "assets/products/spray-brillo.jpg",
    destacado: true,
  },

  {
    id: "m018",
    nombre: "Crema de Manos OneSpring",
    categoria: "Skincare",
    precio: 2500,
    stock: 25,
    tallas: [],
    descripcion:
      "Un kit completo para consentir tus manos con 5 fragancias frutales y florales irresistibles. Fórmula ligera de rápida absorción que hidrata intensamente sin dejar sensación grasosa, ideal para llevar siempre contigo.",
    imagen: "assets/products/cremas-manos.jpg",
    destacado: true,
  },

{
    id: "m019",
    nombre: "Labios Glossy con Efecto Brillo + Lavero Diseño Osito",
    categoria: "Skincare",
    precio: 15000,
    stock: 1,
    tallas: [],
    descripcion:
      "Un gloss que resalta tus labios mientras se convierte en un accesorio llamativo y único. Aporta un acabado brillante que hace que los labios se vean más hidratados, suaves y luminosos desde la primera aplicación. Su diseño en forma de osito con llavero lo convierte en un producto práctico, ideal para llevar contigo o regalar.",
    imagen: "assets/products/labial-glossy-osito.jpg",
    destacado: true,
  },
  
{
    id: "m020",
    nombre: "Labios Glossy + Efecto Volumen en Segundos (Brillo Kiss Glow con Llavero)",
    categoria: "Skincare",
    precio: 15000,
    stock: 2,
    tallas: [],
    descripcion:
      "Brillo que transforma el aspecto de tus labios al instante, haciéndolos ver más voluminosos, hidratados y luminosos. Su acabado ultra brillante crea un efecto jugoso que mejora visualmente la forma de los labios desde la primera aplicación. Incluye un diseño con llavero funcional que te permite llevarlo contigo y reaplicar fácilmente durante el día.",
    imagen: "assets/products/labial-glossy.jpg",
    destacado: true,
  },

{
    id: "m021",
    nombre: "Stick Antifrizz Control Cabello",
    categoria: "Skincare",
    precio: 18000,
    stock: 2,
    tallas: [],
    descripcion:
      "Controla el frizz y fija peinados con acabado suave y natural. Este hair wax stick está diseñado para domar baby hairs, controlar el frizz y mantener peinados pulidos sin dejar el cabello rígido. Su formato en barra permite una aplicación rápida y precisa. Ideal para coletas, moños, trenzas o para mantener el cabello en su lugar durante todo el día con un acabado natural y sin sensación pegajosa.",
    imagen: "assets/products/stick-antifrizz.jpg",
    destacado: true,
  },

  {
    id: "m022",
    nombre: "Kit Crecimiento Shampoo Disaar",
    categoria: "Skincare",
    precio: 40000,
    stock: 1,
    tallas: [],
    descripcion:
      "Limpieza y nutrición revitalizante para un cabello con aspecto más fuerte, brillante y con sensación de mayor densidad. El jengibre ayuda a estimular el cuero cabelludo. Cabello con aspecto más fuerte y menos quiebre. Equilibra el cuero cabelludo. Aporta brillo y suavidad. Este dúo es ideal para: Cabello con caída o debilitado  (ayuda a fortalecer desde la raíz.). Cabello fino  (aporta sensación de mayor volumen.). Cabello graso o mixto: (equilibra el cuero cabelludo.). Cabello seco (nutre y mejora la textura.)",
    imagen: "assets/products/kit-crecimiento-capilar.jpg",
    destacado: true,
  },

  {
    id: "m023",
    nombre: "Potector Solar Doble Efecto",
    categoria: "Skincare",
    precio: 26000,
    stock: 0,
    tallas: [],
    descripcion:
      "¡Luce una piel radiante y protegida! -  Descubre Haolika Sunscreen SPF 50+, tu aliado para proteger tu piel del sol, ayudar a unificar el tono y revelar una apariencia más luminosa. Su textura ligera y no grasa deja tu piel suave, fresca y radiante todos los días.",
    imagen: "assets/products/protector-solar.jpg",
    destacado: true,
  },

  {
    id: "m024",
    nombre: "Gel de Baño Hidratante y Exfoliante",
    categoria: "Skincare",
    precio: 25000,
    stock: 0,
    tallas: [],
    descripcion:
      "Gel de Ducha Exfoliante FABOL’AI – 1000 ml - Convierte tu baño en un ritual de spa. Exfolia suavemente, limpia e hidrata tu piel, dejándola suave, fresca y radiante con una fragancia irresistible.",
    imagen: "assets/products/hidratante-exfoliante.jpg",
    destacado: true,
  },

  {
    id: "m025",
    nombre: "Bálsamo Labial con Propóleo SADOER",
    categoria: "Skincare",
    precio: 11000,
    stock: 2,
    tallas: [],
    descripcion:
      "Bálsamo labial con propóleo SADOER que ofrece nutrición intensa y reparación para labios secos o agrietados. Hidrata profundamente, aporta suavidad inmediata y protege contra la deshidratación para lucir unos labios más saludables día a día.",
    imagen: "assets/products/balsamo-labial.jpg",
    destacado: true,
  },

  {
    id: "m026",
    nombre: "Bálsamo de Miel Restaurador de Labios",
    categoria: "Skincare",
    precio: 13000,
    stock: 2,
    tallas: [],
    descripcion:
      "Hidratación profunda y duradera para rostro y cuerpo. Con tallow batido y miel, este bálsamo transforma las zonas secas o agrietadas aportando suavidad inmediata con una textura ligera de rápida absorción.",
    imagen: "assets/products/balsamo-miel.jpg",
    destacado: true,
  },

  {
    id: "m027",
    nombre: "Tónico Rosas + Ácido hialurónico Bioaqua tonifica e hidrata",
    categoria: "Skincare",
    precio: 14000,
    stock: 1,
    tallas: [],
    descripcion:
      "Tónico hidratante con ácido hialurónico y extracto de rosa que tonifica, suaviza y deja la piel fresca y luminosa. Gracias a sus propiedades antioxidantes y antiarrugas, ayuda a minimizar poros, mejorar la elasticidad y proteger tu piel contra el daño externo.",
    imagen: "assets/products/tonico-rosa.jpg",
    destacado: true,
  },

  {
    id: "m028",
    nombre: "Tónico Facial Niacinamida + Sandía 40% Hidratación & Luminosidad – Sadoer (120 ml)",
    categoria: "Skincare",
    precio: 17000,
    stock: 0,
    tallas: [],
    descripcion:
      "Tónico facial ligero y refrescante formulado con 40% de extracto de sandía y niacinamida para hidratar, calmar y equilibrar la piel. De rápida absorción, ayuda a unificar el tono, minimizar la apariencia de poros y potenciar el brillo natural de tu rostro.",
    imagen: "assets/products/tonico-facial.jpg",
    destacado: true,
  },

  {
    id: "m029",
    nombre: "Crema Hidratante de Vitamina C",
    categoria: "Skincare",
    precio: 12000,
    stock: 1,
    tallas: [],
    descripcion:
      "Crema facial con vitamina C que ilumina, combate la oxidación y ayuda a prevenir el envejecimiento prematuro. Activa la síntesis de colágeno para mejorar la firmeza, reduce líneas de expresión y atenúa manchas, dejando la piel más lisa, uniforme y reluciente.",
    imagen: "assets/products/crema-vitamina.jpg",
    destacado: true,
  },

  {
    id: "m030",
    nombre: "Crema Hidratante V7 multi beneficios nutre y revitaliza",
    categoria: "Skincare",
    precio: 16000,
    stock: 0,
    tallas: [],
    descripcion:
      "Crema iluminadora de textura ligera y no grasa que brinda un efecto tone-up instantáneo para un rostro uniforme y radiante. Enriquecida con ácido hialurónico, disimula manchas, rojeces e imperfecciones mientras hidrata profundamente y ofrece un sutil efecto lifting.",
    imagen: "assets/products/crema-hidratante.jpg",
    destacado: true,
  },

  {
    id: "m031",
    nombre: "Aceite Desmaquillante Jojoba Remueve Maquillaje Waterproof – Sadoer",
    categoria: "Skincare",
    precio: 19000,
    stock: 1,
    tallas: [],
    descripcion:
      "Aceite desmaquillante con jojoba que disuelve eficazmente el maquillaje (incluso waterproof) y el protector solar sin resecar la piel. De textura ligera y fácil enjuague, brinda una limpieza suave que deja el rostro limpio, hidratado, suave y luminoso.",
    imagen: "assets/products/aceite-desmaquillante.jpg",
    destacado: true,
  },

  {
    id: "m032",
    nombre: "Bálsamo Desmaquillante con Pomelo – Limpieza Profunda y Suavidad | Sadoer",
    categoria: "Skincare",
    precio: 19000,
    stock: 1,
    tallas: [],
    descripcion:
      "Bálsamo desmaquillante en crema con extracto de pomelo que derrite suavemente todo tipo de maquillaje, incluso el resistente al agua. Limpia la piel a profundidad sin resecarla ni dejar sensación grasosa, aportándole suavidad, frescura y vitalidad.",
    imagen: "assets/products/balsamo-desmaquillante.jpg",
    destacado: true,
  },

  {
    id: "m033",
    nombre: "Pañitos Húmedos Desmaquillantes",
    categoria: "Skincare",
    precio: 10000,
    stock: 1,
    tallas: [],
    descripcion:
      "Toallitas desmaquillantes pre-humedecidas con Aloe Vera y Vitamina E para una limpieza rápida, suave y efectiva. Eliminan el maquillaje e impurezas (incluso fórmulas a prueba de agua) mientras calman e hidratan la piel sin irritar ni resecar.",
    imagen: "assets/products/pañitos-aloe.jpg",
    destacado: true,
  },

  {
    id: "m034",
    nombre: "Limpiador Facial VEZE Volcanic Mud Purificante y Control de Grasa",
    categoria: "Skincare",
    precio: 15000,
    stock: 2,
    tallas: [],
    descripcion:
      "Limpiador facial con barro volcánico diseñado para limpiar profundamente los poros y controlar el exceso de grasa sin resecar la piel. Elimina impurezas, ayuda a reducir la apariencia de poros y deja el rostro fresco, limpio y revitalizado.",
    imagen: "assets/products/limpiador-facial.jpg",
    destacado: true,
  },

  {
    id: "m035",
    nombre: "Jabón Facial Vitamina C Bioaqua",
    categoria: "Skincare",
    precio: 12000,
    stock: 2,
    tallas: [],
    descripcion:
      "Jabón facial cremoso y suave enriquecido con Vitamina C que elimina impurezas y exceso de grasa sin resecar la piel. Su poder antioxidante combate el estrés oxidativo, estimula la producción de colágeno y retrasa signos de envejecimiento, dejando la piel firme, luminosa, uniforme y joven.",
    imagen: "assets/products/jabon-vitaminac.jpg",
    destacado: true,
  },

  {
    id: "m036",
    nombre: "Pomos Desmaquillantes x 222 Pcs",
    categoria: "Skincare",
    precio: 14000,
    stock: 3,
    tallas: [],
    descripcion:
      "Pomos desmaquillantes de algodón 100% puro, ultra suaves, resistentes y delicados con la piel. Ideales para retirar maquillaje, aplicar tónicos o esencias y limpiar impurezas sin deshacerse ni soltar pelusa, incluso al estar húmedos.",
    imagen: "assets/products/pomos-desmaquillante.jpg",
    destacado: true,
  },

  {
    id: "m037",
    nombre: "Crema Facial Detox Sal Rosada + Centella 18% Reafirmante & Poros – Sadoer",
    categoria: "Skincare",
    precio: 15000,
    stock: 1,
    tallas: [],
    descripcion:
      "Crema ligera detox formulada con sal rosada del Himalaya y 18% de centella asiática que nutre en profundidad y reafirma el rostro. Ayuda a minimizar los poros dilatados, mejorar la elasticidad y revitalizar la piel para un acabado suave, firme y luminoso.",
    imagen: "assets/products/crema-reafirmante.jpg",
    destacado: true,
  },

  {
    id: "m038",
    nombre: "Protector Solar Gel Cream Disaar – protege la piel del sol",
    categoria: "Skincare",
    precio: 16000,
    stock: 0,
    tallas: [],
    descripcion:
      "Protector solar hidratante SPF50 PA+++ que ofrece alta protección contra rayos UVA, UVB y la luz azul de pantallas. Su textura gel-cream de rápida absorción hidrata, calma y aporta un toque de luminosidad natural sin dejar sensación grasosa.",
    imagen: "assets/products/prptector-solar-gel.jpg",
    destacado: true,
  },

  {
    id: "m039",
    nombre: "Protector Solar Vitamina C Glow",
    categoria: "Skincare",
    precio: 13000,
    stock: 1,
    tallas: [],
    descripcion:
      "Sunscreen serum con SPF 50 PA+++ que combina protección solar de amplio espectro con la acción antioxidante de las vitaminas C y E. Su textura ligera tipo suero se absorbe rápidamente sin dejar sensación pesada ni grasa, ayudando a prevenir el envejecimiento prematuro, reparar la piel e iluminar el rostro.",
    imagen: "assets/products/protector-serum.jpg",
    destacado: true,
  },

  {
    id: "m040",
    nombre: "Protector solar Anti Acné - Con Aloe vera, Té Verde y Ácido Sálicilico",
    categoria: "Skincare",
    precio: 16000,
    stock: 0,
    tallas: [],
    descripcion:
      "Sunscreen serum con SPF 50 PA+++ que combina protección solar de amplio espectro con la acción antioxidante de las vitaminas C y E. Su textura ligera tipo suero se absorbe rápidamente sin dejar sensación pesada ni grasa, ayudando a prevenir el envejecimiento prematuro, reparar la piel e iluminar el rostro.",
    imagen: "assets/products/protector-acne.jpg",
    destacado: true,
  },

  {
    id: "m041",
    nombre: "Contorno ojos vitamina C piel luminosa y firme",
    categoria: "Skincare",
    precio: 6000,
    stock: 1,
    tallas: [],
    descripcion:
      "Contorno de ojos con vitamina C de textura ligera y rápida absorción que hidrata profundamente e ilumina la mirada. Combate la sequedad, ayuda a aclarar ojeras y mejora la textura de la piel opaca sin dejar sensación grasosa, ideal para preparar la zona antes del maquillaje.",
    imagen: "assets/products/contorno-ojos.jpg",
    destacado: true,
  },

  {
    id: "m042",
    nombre: "Contorno de ojos rosas AH Bioaqua reduce ojeras",
    categoria: "Skincare",
    precio: 6000,
    stock: 0,
    tallas: [],
    descripcion:
      "Contorno de ojos con ácido hialurónico (98%) y extracto de rosa que hidrata intensamente y rellena líneas de expresión. Su fórmula ligera y no grasa ayuda a desinflamar bolsas, reducir ojeras y devolverle la frescura a la mirada, siendo ideal para usar antes del maquillaje.",
    imagen: "assets/products/contorno-rosa.jpg",
    destacado: true,
  },

  {
    id: "m043",
    nombre: "Contorno Centella Asiática Bioaqua",
    categoria: "Skincare",
    precio: 6000,
    stock: 0,
    tallas: [],
    descripcion:
      "Contorno de ojos con centella asiática de textura ligera y rápida absorción que hidrata, calma y refuerza la barrera de la piel. Ayuda a desinflamar, refrescar e iluminar la mirada, suavizando la apariencia de ojeras, bolsas y líneas finas sin dejar sensación grasosa.",
    imagen: "assets/products/contorno-asia.jpg",
    destacado: true,
  },

  {
    id: "m044",
    nombre: "Sales de Baño Bioaqua Vainilla Exfoliantes y Suavizantes",
    categoria: "Skincare",
    precio: 18000,
    stock: 3,
    tallas: [],
    descripcion:
      "Contorno de ojos con centella asiática de textura ligera y rápida absorción que hidrata, calma y refuerza la barrera de la piel. Ayuda a desinflamar, refrescar e iluminar la mirada, suavizando la apariencia de ojeras, bolsas y líneas finas sin dejar sensación grasosa.",
    imagen: "assets/products/sales-vainilla.jpg",
    destacado: true,
  },

  {
    id: "m045",
    nombre: "Combo Vitamina C Bioaqua",
    categoria: "Skincare",
    precio: 50000,
    stock: 0,
    tallas: [],
    descripcion:
      "Contorno de ojos con centella asiática de textura ligera y rápida absorción que hidrata, calma y refuerza la barrera de la piel. Ayuda a desinflamar, refrescar e iluminar la mirada, suavizando la apariencia de ojeras, bolsas y líneas finas sin dejar sensación grasosa.",
    imagen: "assets/products/combo-vitamina.jpg",
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
