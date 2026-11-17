export function formatearTiempo(segundosTotales){

    const hora = Math.floor(segundosTotales / 3600);
    const minuto =Math.floor((segundosTotales % 3600)/60);
    const segundo = segundosTotales % 60;

    const horaFormateada = String(hora).padStart(2, '0'); // si tiene menos de 2 caracteres relleno a la izq hasta llegar a 2
    const minutoFormateado = String(minuto).padStart(2, '0');
    const segundoFormateado = String(segundo).padStart(2, '0');

  return `${horaFormateada}:${minutoFormateado}:${segundoFormateado}`;
}