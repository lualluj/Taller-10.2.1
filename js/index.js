// tenemos que hacer que la información que se ingresa en index.html se pueda visualizar en data.html

/* en index.html tenemos un input con id="inputText" donde el usuario ingresa el dato, ese dato es el que debe migrar a data.html
tenemos que crear una variable que tome el dato (capaz getElementsById("inputText)) y guardarlo como key en el localstorage
*/

//funcion que guarda el valor del input en el local storage
function getInput(){
    // constante que toma el valor de lo ingresado en el input
    const userInput = document.getElementById("inputText").value;
    // crea una key de valor input y el valor como la constante declarada anteriormente
    localStorage.setItem("input", userInput);
    // selecciona con el DOM el elemento al que se le va a asginar el valor del localStorage y con inner.HTML establece el contenido 
    document.getElementById("inputText").innerHTML = localStorage.getItem("input");
    console.log(userInput);
    ;
}

// hace que la función getInput se ejecute cada vez que se clickea el botón
document.getElementById("buttonText").addEventListener("click", getInput)