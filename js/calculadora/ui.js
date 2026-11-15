export function obtenerValores(){
    const num1= document.querySelector('#primerNumero');
    const num2= document.querySelector('#segundoNumero');
    return{
        num1: num1.value,
        num2: num2.value,
    }
}
export function mostrarResultado(mensaje, esError=false){
    const resp=document.querySelector('#resultado');
    resp.textContent = mensaje;
    resp.classList.toggle('error',esError);

}