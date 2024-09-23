/* en data.html tenemos un elemento p que contiene un elemento span dentro con id="data", donde debe caer el input de index.html
tenemos que crear una función que tome la variable declarada en index.html y se introduzca en la etiqueta span (capaz utilizando inner.html)
*/

function getData(){
    // obtiene el valor de la key almacenado en el localstorage
    const dataInput = localStorage.getItem("input");
    // le adjudica ese valor al elemento data (id="data") utilizando innerHTML
    document.getElementById("data").innerHTML = dataInput;
}
// ejecuta la función al cargar la página
document.addEventListener("DOMContentLoaded", getData);