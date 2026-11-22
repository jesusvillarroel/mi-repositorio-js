import { contarPalabras, contarCaracteres } from './logic.js';
import { obtenerTexto, actualizarEstadisticas } from './ui.js';

export function iniciarContadorPalabras() {
  const contenedor = document.querySelector('#app-contador-palabras');
  if (!contenedor) return;

  const textarea = contenedor.querySelector('#texto-entrada');

  textarea.addEventListener('input', () => {
    const texto = obtenerTexto();
    const totalPalabras = contarPalabras(texto);
    const totalCaracteres = contarCaracteres(texto);

    actualizarEstadisticas(totalPalabras, totalCaracteres);
  });
}
