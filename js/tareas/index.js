import { crearTarea,alternarTarea,limpiarCompletadas} from './logic.js';
import { obtenerTextoTarea,renderizarTareas ,limpiarInput} from './ui.js';
import { obtenerTareas,guardarTareas } from './storage.js';
export function iniciarTareas(){
    const contenedor = document.querySelector('#app-tareas');
    if (!contenedor) return;

    let tareas =obtenerTareas();
    renderizarTareas(tareas);
    const form =document.querySelector('#form-tarea');
    const lista=document.querySelector('#lista-tareas')
    const btnLimpiar =document.querySelector('#btn-limpiar');
    form.addEventListener('submit',(event)=>{
        event.preventDefault();//para evitar que la pagina se recargue
       const texto =obtenerTextoTarea();
       tareas =crearTarea(tareas,texto);
       guardarTareas(tareas);
       renderizarTareas(tareas);
       limpiarInput();
    });
    lista.addEventListener('change',(e)=>{
        if (e.target.type ==='checkbox'){
            const li=e.target.closest('li');
            const id =Number(li.dataset.id);
            tareas =alternarTarea(tareas,id);
            guardarTareas(tareas);
            renderizarTareas(tareas);
        }
    });
    btnLimpiar.addEventListener('click',() =>{
        tareas =limpiarCompletadas(tareas);
        guardarTareas(tareas);
        renderizarTareas(tareas);
    });

}