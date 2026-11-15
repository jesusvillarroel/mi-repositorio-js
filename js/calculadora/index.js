import { validarDatos, calcularOperacion } from './logic.js';
import { obtenerValores, mostrarResultado } from './ui.js';

export function iniciarCalculadora() {
  const contenedor = document.querySelector('#app-calculadora');
  if (!contenedor) return;

  const botones = contenedor.querySelectorAll('[data-operacion]');

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      // 1. Obtener valores del DOM (ui.js)
      const {num1,num2}= obtenerValores();
      // 2. Validar entradas (logic.js) -> si hay error, mostrarResultado(error, true) y return
        const mensaje=validarDatos(num1,num2);
        if (mensaje !== null){
            mostrarResultado(mensaje,true);
            return;
        }
      // 3. Calcular operación (logic.js) -> convertir a Number()
      const operacion = boton.dataset.operacion;
      const resultado = calcularOperacion(Number(num1), Number(num2), operacion);

      // 4. Mostrar resultado (ui.js) -> recuerda revisar si devolvió texto (error de división por 0)
      const esError = typeof resultado === 'string';// si devuelve un string es porque entro en la division por 0 o operacio no valida
      mostrarResultado(resultado, esError);
    });
  });
}
