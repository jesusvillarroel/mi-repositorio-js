import { formatearTiempo } from './logic.js';
import { actualizarPantalla , actualizarEstadoBotones} from './ui.js';

export function iniciarTemporizador() {
  const contenedor = document.querySelector('#app-temporizador');
  if (!contenedor) return;
  const botones = contenedor.querySelectorAll('[data-accion]');
  let segundos=0;
  let intervaloId =null;
  actualizarEstadoBotones(false);//para pausar este desabilitado al comenzar el temporizador
  
  function iniciar(){
    if(intervaloId !==null) return; //evita doble intervalo
     actualizarEstadoBotones(true);
     intervaloId= setInterval(() =>{
         segundos++;
         actualizarPantalla(formatearTiempo(segundos));
     },1000);
  }  
   function pausar() {
    clearInterval(intervaloId);
    intervaloId = null;
    actualizarEstadoBotones(false);
  }

  function reiniciar() {
    clearInterval(intervaloId);
    intervaloId = null;
    segundos = 0;
    actualizarPantalla(formatearTiempo(0)); // Vuelve a "00:00:00"
    actualizarEstadoBotones(false);
  }    
 // 4. Escuchar los clics y decidir según data-accion
  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const accion = boton.dataset.accion;

      switch (accion) {
        case 'iniciar':
          iniciar();
          break;
        case 'pausar':
          pausar();
          break;
        case 'reiniciar':
          reiniciar();
          break;
      }
    }); 
    });
} 