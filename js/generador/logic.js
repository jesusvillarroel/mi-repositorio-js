// FUNCIÓN 1: Validar los textos antes de convertirlos a número
export function validarLongitud(valorTexto) {
  // 1. Revisamos si alguno llegó vacío (quitando espacios en blanco con .trim())
  if (valorTexto.trim() === '') {
    return 'Campo obligatorio.';
  }
  const numero= Number(valorTexto);
  // 2. Convertimos a número y revisamos si NO es un número válido (isNaN)
  if (isNaN(numero)) {
    return 'Debes escribir solo números.';
  }
   if (!Number.isInteger(numero) || numero < 4) {
    return 'La longitud debe ser un número entero mayor o igual a 4.';
  }
  

  // 3. Si pasó todas las pruebas, devolvemos null (significa: "cero errores")
  return null;
}
export function generarContrasena(longitud) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  let contrasena = '';
  
  for (let i=0; i<longitud;i++){
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[indiceAleatorio];
  }
  return contrasena;
}
