// 1. Muestra en pantalla el valor de la propiedad name mediante dot notation
//  2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
//  3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"

/*
var student = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ["Sky", "football", "walking my dog"],
};
student.name = "Steve Jobs";
console.log(student.name);
console.log(student["age"]);
*/

// Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
/*
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log(Object.keys(student).length);
*/

// Verifica si la propiedad name se encuentra dentro del siguiente objeto:
/*
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
};
    
console.log(student.hasOwnProperty('name'));
*/

// Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto.
// Imprima también el objeto antes o después de eliminar la propiedad.
/*
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

delete student.rollno;
console.log(student);
*/

//Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
//La nueva edad debe ser 35.
/*
var student = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ["Sky", "football", "walking my dog"],
};

student.age = "35";
console.log(student);
*/

// Escriba un programa para añadir una nueva propiedad al siguiente objeto:
// La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.

var student = {
  name: "David Rayy",
  age: 34,
  job: "engineer",
  hobbies: ["Sky", "football", "walking my dog"],
};
student.pet = ["cat", "dog"];
console.log(student);

