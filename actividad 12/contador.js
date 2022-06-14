// inicializando nuestro contador
let count = 0;

let value = document.getElementById("contador");

function increment() {
  // al mandarse llamar la función con el click inmediatamente aumentamos el contador
  // y luego asignamos
  count++;
  value.textContent = count;
}

function decrement() {
  count--;
  value.textContent = count;
}

/**
 * textContent
 * Get all the textual content of an <ul> element with id="myList": https://www.w3schools.com/jsref/prop_node_textcontent.asp
ejemplo: 
let text = document.getElementById("myList").textContent;
 */
