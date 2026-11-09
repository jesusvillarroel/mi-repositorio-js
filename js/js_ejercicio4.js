/**
 * Estado interno de la aplicación.
 */
const estado = {
  elementos: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Sass', 'Vite', 'HTML', 'CSS'],
  filtroActual: ''
};

// Declaracion  de variables de referencia para el DOM (inicializadas en null)
let $formulario = null;
let $inputBuscador = null;
let $listaContenedor = null;
const renderizarLista = () =>{

    const filtro= estado.filtroActual.toLowerCase().trim();
    const elementosFiltrados = estado.elementos.filter(elemento => elemento.toLowerCase().includes(filtro));
    if (elementosFiltrados.length === 0) {
        $listaContenedor.innerHTML = '<li class="search-list__empty">No hay elementos</li>';
        return; // Frena la función aquí
    }

    $listaContenedor.innerHTML = elementosFiltrados
        .map(elemento => `<li class="search-list__item">${elemento}</li>`)
        .join('');
};
const manejarBusqueda = (event) => {
    // 1. COMPLETAR: Asigna a 'estado.filtroActual' el valor que viene dentro del input.
    // Pista: Accede a través de 'evento.target.value'
    estado.filtroActual = event.target.value;
    
    // 2. COMPLETAR: Llama a tu función 'renderizarLista()' para que la pantalla se actualice.
    renderizarLista();
};
const manejarEnvioFormulario = (event) => {
    // Pauta: Usa el método estándar de los eventos para prevenir la acción por defecto.
    event.preventDefault();//para evitar que la pagina se recargue
};
const inicializarBuscador = () =>{
    $formulario= document.querySelector('#form');
    $inputBuscador =document.querySelector('#buscador');
    $listaContenedor =document.querySelector('#lista-elementos');
    if(!$formulario || !$inputBuscador || !$listaContenedor) return;

    renderizarLista();
    $formulario.addEventListener('submit', (event) =>{
       manejarEnvioFormulario(event);
    });
    $inputBuscador.addEventListener('input', (event) =>{
        manejarBusqueda(event);
    });
    
};
inicializarBuscador();