export function actualizarPantalla(tiempoFormateado){
   const tiempoPantalla = document.querySelector("#pantalla-tiempo");
   tiempoPantalla.textContent = tiempoFormateado; 

}
export function actualizarEstadoBotones(estaCorriendo){
    const btnIniciar = document.querySelector('[data-accion="iniciar"]');
    const btnPausar = document.querySelector('[data-accion="pausar"]');

    btnIniciar.disabled = estaCorriendo;
    btnPausar.disabled = !estaCorriendo;
}