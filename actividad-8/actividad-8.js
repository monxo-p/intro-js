// 
//function buscar(uno, palabra) {
//   for (var i = 0; i < uno.length; i++) {
//     var array = uno.split(" ");

//     if (array[i] == palabra) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// var resultado = buscar("Hola mundo", "mundo");
// console.log(resultado);

// Solucion posible

// function buscarPalabra(oracion, palabra) {
//   if (oracion.includes(palabra)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// buscarPalabra('Hola mundo', 'mundo');


// ejercicio 1 con arrow function
const findWord = (text, word) => {
  return text.includes(word);
};

console.log(findWord("Hola mundo", "mundo"));



// ejercicio 2
//solucion de Gaby
const arr = [1, 2, 3, 4, 10, 11];
funtion sumaArreglo(arreglo){
  let suma = 0;
  for (var index = 0; index < arreglo.length; index++){
    suma += arreglo[index];
  }
  return suma;
}
console.log(sumaArreglo(arr));




// ejercicio 3
const revisar = (word1, word2) => {
  

}

console.log(revisar('madam', 'computadora'));


// ejercicio 4
function CaF(celsius) 
{
  var cTemp = celsius;
  var CaFar = cTemp * 9 / 5 + 32;
  var message = cTemp+'C is ' + CaFar + ' F.';
    console.log(message);
}

function FaC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var FaCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'F is ' + FaCel + 'C.';
    console.log(message);
} 
CaF(60);
FaC(45);
