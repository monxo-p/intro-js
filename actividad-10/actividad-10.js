//------ Ejercicio 1-------------
//Find the difference in age between the oldest and youngest family members,
//and return their respective ages and the age difference.

const Family = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

const ages = Family.map((edades) => edades.age);
let min = Math.min(...ages);
let max = Math.max(...ages);
let diff = max - min;

//console.log(ages);
console.log("La edad mínima es: " + min);
console.log("La edad máxima es: " + max);
console.log("La diferencia de edad es de: " + diff);


//------------- Ejercicio 2-------------------------
//If the given input is an array of numbers, return the sum of all the positives ones.
//If the array is empty or there aren't any positive numbers, return 0.

const numbers = [1, -4, 12, 0, -3, 29, -150];

function resultado(numbers) {
  let suma = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      suma += numbers[i];
    }
  }
  return suma;
}
console.log(resultado(numbers));


//----------------Ejercicio 3 ------------------------
// Escriba una función de JavaScript que tomará una serie de números almacenados
// y encontrará el segundo números más bajos y segundos más altos, respectivamente
// del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]

const arr = [3, 4, 6, 1, 5, 2, 9, 10, 23, 12];

function resultado(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  arr.pop();
  let max = Math.max(...arr);
  arr.shift();
  let min = Math.min(...arr);
  //console.log(arr);
  console.log("El segundo número más alto es: " + max);
  console.log("El segundo número más bajo es: " + min);
}
resultado(arr);
