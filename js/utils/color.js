// Usamos 'export' para que pueda ser usada en otros archivos
export function generarColorAleatorio() {
    // Genera un número hexadecimal aleatorio y lo convierte a string
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Nos aseguramos de que siempre tenga 6 caracteres rellenando con ceros a la izquierda si es necesario
    return color.padEnd(7, '0'); 
}
