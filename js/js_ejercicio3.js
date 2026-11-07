const form=document.querySelector('#lista-form');
const listaDinamica=document.querySelector('#lista-contenedor');
const listaTitulo= document.querySelector('#titulo-lista');

//funciones controladoras (DOM)
/**
 * Agrega un nuevo ítem a la lista de tareas y actualiza el título del contenedor si es necesario.
 * @param {string} textoTarea - Contenido de la tarea a agregar.
 */
const agregaTarea = (textoTarea) =>{
    
        // Control del título dinámico si es el primer elemento
        if (listaDinamica.children.length === 0) {
            listaTitulo.textContent = "📋 Mis Tareas Pendientes:";
            listaTitulo.classList.add('has-content');
        }
        //ahora voy a crear los li 
        const nuevoItem=document.createElement('li');
        nuevoItem.innerHTML=`
        <span>${textoTarea}</span>
        <button class="btn-eliminar">❌</button>`;
        //agregamos los item a la lista 
        listaDinamica.appendChild(nuevoItem);

};
/**
 * Elimina una tarea específica de la lista y limpia el título si ya no quedan elementos.
 * @param {HTMLElement} botonEliminar - El botón que disparó la acción.
 */
const eliminarTarea = (btnEliminar) =>{
     const itemAEliminar = btnEliminar.closest('li');
     itemAEliminar?.remove();
     // 3. Si borramos la última tarea y la lista se queda vacía, quitamos el título
     if (listaDinamica.children.length === 0) {
         listaTitulo.textContent = "";
         listaTitulo.classList.remove('has-content');
     }

};
// 3. ORQUESTACIÓN Y ESCUCHA DE EVENTOS (Cláusula de guarda multipágina)
if(form && listaDinamica && listaTitulo){
    form.addEventListener('submit',(event)=>{
        event.preventDefault();//para evitar que la pagina se recargue
        const nuevaTarea = document.querySelector('#tarea').value;
        agregaTarea(nuevaTarea);
        form.reset();
    });
    listaDinamica.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-eliminar')) {
            eliminarTarea(event.target);
        }
    });
}