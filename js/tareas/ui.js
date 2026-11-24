export function obtenerTextoTarea(){
    const inputTarea= document.querySelector('#nueva-tarea');
    return inputTarea.value;
}
export function limpiarInput(){
    const inputTarea= document.querySelector('#nueva-tarea');
    inputTarea.value="";
    inputTarea.focus();
}
export function renderizarTareas(tareas){
    const lista= document.querySelector('#lista-tareas');
    const titulo=document.querySelector('#titulo-lista');
    lista.innerHTML ='';
    if(tareas.length ===0){
        titulo.textContent ="No hay tareas pendientes";
        return;
    }
    titulo.textContent ="Tus tareas:";
    tareas.forEach((tarea) => {
        const nuevoItem =document.createElement('li');
        nuevoItem.dataset.id= tarea.id;
        nuevoItem.classList.toggle('completada',tarea.completda);
       
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.completada;

        const textoSpan = document.createElement('span');
        textoSpan.textContent = tarea.texto;

        nuevoItem.append(checkbox, textoSpan);
        lista.appendChild(nuevoItem);
    });

}