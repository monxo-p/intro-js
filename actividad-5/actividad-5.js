// ejercicio 1 -- imprimir array mayor a 3
var arreglo = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
for (var i = 0; i < arreglo.length; i++) {
  if (arreglo[i] > 3) {
    console.log(arreglo[i]);
  }
}

//ejercicio 2
var arreglo = [];
var i = 0;

while (i < 5) {
  arreglo.push(i);
  i++;
}

//sin push
var arreglo = [];
var i = 0;

while (i < 5) {
  arreglo[i] = i;
  i++;
}
console.log(arreglo);
