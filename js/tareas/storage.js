const STORAGE_KEY ='tareas_app_v1';
//verfificar si hay tareas guardadas
export function obtenerTareas(){
   const datos =localStorage.getItem(STORAGE_KEY);
    try{
       return datos !== null ? JSON.parse(datos) : [];
        
    }catch{
        return [];
    }

}
//guardar la tarea por si se cierra por accidente o se recarga la pagina
export function guardarTareas(tareas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tareas));
}