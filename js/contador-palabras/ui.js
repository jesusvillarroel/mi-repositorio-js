export function obtenerTexto(){
    const parrafo= document.querySelector('#texto-entrada');
    return parrafo.value;
}
export function actualizarEstadisticas(totalPalabras, totalCaracteres){
    const palabras= document.querySelector('#contador-palabras');
    const caracteres= document.querySelector('#contador-caracteres');
    palabras.textContent=totalPalabras;
    caracteres.textContent=totalCaracteres;

}