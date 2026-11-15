// FUNCIÓN 1: Validar los textos antes de convertirlos a número
export function validarDatos(num1,num2) {
  // 1. Revisamos si alguno llegó vacío (quitando espacios en blanco con .trim())
  if (num1.trim() === '' || num2.trim() === '') {
    return 'Ambos campos son obligatorios.';
  }

  // 2. Convertimos a número y revisamos si NO es un número válido (isNaN)
  if (isNaN(Number(num1)) || isNaN(Number(num2))) {
    return 'Debes escribir solo números.';
  }

  // 3. Si pasó todas las pruebas, devolvemos null (significa: "cero errores")
  return null;
}
export function calcularOperacion(num1,num2,operacion){
    if(operacion === 'dividir' && num2 ===0){
        return 'No se puede dividir entre 0';
    }    
    switch(operacion){
        case 'sumar':
            return num1 + num2;
        case 'restar':
            return num1 - num2;  
        case 'multiplicar':
            return num1 * num2;
        case 'dividir':
            return num1/num2; 
        default:
             return 'Operación no válida';            
        
    }
}