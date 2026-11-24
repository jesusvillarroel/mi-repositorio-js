export function crearTarea(tareas,texto){
    const textoLimpio =texto.trim();
    if(textoLimpio ===''){
        return tareas;
    }
    
       const  nuevaTarea={
            id:Date.now(),
            texto:textoLimpio,
            completada:false
        };
   
    return [...tareas, nuevaTarea];
}
export function alternarTarea(tareas,id){
    return tareas.map((tarea) => tarea.id ===id ?{...tarea,completada: !tarea.completada}:tarea);
    
}
export function limpiarCompletadas(tareas) {
  return tareas.filter((tarea) => !tarea.completada);
}
