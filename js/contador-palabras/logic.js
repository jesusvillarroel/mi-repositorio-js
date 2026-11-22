export function contarPalabras(texto){
    const limpio=texto.trim();
    if(limpio ===''){
        return 0;
    }
    else{
        return limpio.split(/\s+/).length;
    }
}
export function contarCaracteres(texto) {
  const sinEspacios = texto.replace(/\s+/g, '');//elimina espacio y salto de lineas
  return sinEspacios.length;
}