//importamos el archivo para generar colores aleatorio
import { generarColorAleatorio } from './utils/color.js';
//selecciono el boton
const miBoton=document.querySelector('#btn-cambiar');

//luego lo pongo a la escucha del evento click
miBoton.addEventListener('click',()=>{
    const nuevoColor=generarColorAleatorio();
    document.body.style.backgroundColor=nuevoColor;
});