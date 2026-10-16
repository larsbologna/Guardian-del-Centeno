/**
 * CONFIGURACIÓN CENTRAL DEL NEGOCIO
 * ---------------------------------
 * Todo dato comercial vive acá. Los valores marcados `confirmado: false`
 * son de DEMOSTRACIÓN y se muestran en la web con la etiqueta "a confirmar".
 * Antes de publicar, reemplazalos por los datos reales y pasá `confirmado` a true.
 */

export const negocio = {
  nombre: 'El Guardián del Centeno',
  rubro: 'Panificados artesanales',
  ubicacion: 'Alta Gracia, Córdoba',
  instagram: {
    usuario: 'elguardiandelcenteno',
    url: 'https://www.instagram.com/elguardiandelcenteno/',
  },
  // Número en formato internacional sin "+" ni espacios (ej: 5493547000000).
  // Vacío = el botón avisa que falta configurarlo. NO inventar el número.
  whatsapp: '',
  publico: 'Cafeterías, almacenes, dietéticas y comercios que revenden',
};

export const condiciones = {
  confirmado: false, // ← todo este bloque es de ejemplo
  minimoCompra: 20000, // ARS
  envioGratisDesde: null as number | null, // null = no se ofrece
  localidades: [
    { nombre: 'Alta Gracia', habilitada: true, costoEnvio: null as number | null },
  ],
  diasEntrega: [] as string[], // ej: ['Martes', 'Viernes']
  franjasHorarias: [] as string[], // ej: ['8 a 11 h']
  anticipacionHoras: null as number | null,
  retiroCoordinado: false,
};
