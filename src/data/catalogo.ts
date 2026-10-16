/**
 * CATÁLOGO — categorías y productos.
 * Las imágenes son PROVISIONALES (Unsplash) hasta tener las fotos del negocio.
 * Los productos con `demo: true` son de ejemplo: precio y presentación a confirmar.
 */

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

export const fotos = {
  hero: u('1555507036-ab1f4038808a', 1400),
  manos: u('1537734796389-e1fc293cf856', 1000),
  harina: u('1732565649629-eb4932a1ec09', 1000),
  negocio: u('1530610476181-d83430b64dcd', 1200),
};

export const categorias = [
  { id: 'panificados', nombre: 'Panificados artesanales', desc: 'Panes de todos los días, hechos con tiempo.', img: u('1566698629409-787a68fc5724') },
  { id: 'laminados', nombre: 'Laminados', desc: 'Capas de masa y manteca, crujientes y alveolados.', img: u('1747459707229-7b1b7c8367e0') },
  { id: 'medialunas', nombre: 'Medialunas', desc: 'Masa madre y harinas seleccionadas.', img: u('1623334044303-241021148842') },
  { id: 'pan-de-chocolate', nombre: 'Pan de chocolate', desc: 'Laminado con chocolate en su interior.', img: u('1778399980486-5262c74e5f2c') },
  { id: 'masa-madre', nombre: 'Masa madre', desc: 'Fermentaciones lentas, miga abierta.', img: u('1549413468-cd78edb7e75c') },
  { id: 'temporada', nombre: 'Especialidades de temporada', desc: 'Elaboraciones que cambian con la estación.', img: u('1775582662806-2972d4878175') },
];

export const productos = [
  { id: 'medialuna-90', nombre: 'Medialuna de manteca', categoria: 'medialunas', desc: 'Masa madre y harinas seleccionadas.', peso: '90 g c/u', variantes: ['x 12', 'x 24'], precio: 1200, unidad: 'por unidad', disponible: true, demo: true, img: u('1623334044303-241021148842', 700) },
  { id: 'pan-chocolate', nombre: 'Pan de chocolate', categoria: 'pan-de-chocolate', desc: 'Laminado con barras de chocolate.', peso: null, variantes: ['x 6', 'x 12'], precio: 1500, unidad: 'por unidad', disponible: true, demo: true, img: u('1778399980486-5262c74e5f2c', 700) },
  { id: 'hogaza', nombre: 'Hogaza de masa madre', categoria: 'masa-madre', desc: 'Corteza crocante y miga húmeda.', peso: null, variantes: [], precio: 4500, unidad: 'por unidad', disponible: true, demo: true, img: u('1549413468-cd78edb7e75c', 700) },
  { id: 'croissant', nombre: 'Croissant', categoria: 'laminados', desc: 'Laminado clásico de manteca.', peso: null, variantes: ['x 6', 'x 12'], precio: 1400, unidad: 'por unidad', disponible: false, demo: true, img: u('1747459707229-7b1b7c8367e0', 700) },
];
