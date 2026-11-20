import { validarLongitud, generarContrasena } from './logic.js';
import { obtenerLongitud, mostrarResultado } from './ui.js';

export function iniciarGenerador() {
  const contenedor = document.querySelector('#app-generador');
  if (!contenedor) return;

  const boton = contenedor.querySelector('[data-generar]');

  boton.addEventListener('click', () => {
    const valorTexto = obtenerLongitud();
    const error = validarLongitud(valorTexto);

    if (error !== null) {
      mostrarResultado(error, true);
      return;
    }

    const contrasena = generarContrasena(Number(valorTexto));
    mostrarResultado(contrasena, false);
  });
}
