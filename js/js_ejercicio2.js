//selecionamos los elementos del html
const contador=document.querySelector('#contador-valor');
const btnIncrementar=document.querySelector('#btn-incrementar');
let contadorClick=0;
if(contador && btnIncrementar){
    btnIncrementar.addEventListener('click',() =>{
    contadorClick++;
    contador.textContent= contadorClick;
});
}
