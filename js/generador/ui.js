export function obtenerLongitud(){
    const inputValor= document.querySelector('#longitud');
    return inputValor.value;
}
export function mostrarResultado(mensaje, esError=false){
    const resp=document.querySelector('#resultado');
    resp.textContent = mensaje;
    resp.classList.toggle('error',esError);

}