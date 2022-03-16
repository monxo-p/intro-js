// declarar
function saludo(nombre = "Juanito", pais, edad = "12") {
  console.log(
    "Hola " + nombre + " ¿cómo está " + pais + " a tus " + edad + " años?"
  );
  return "Tu nombre es" + nombre;
}
// para llamar función
saludo("Ramón", "México", 40);

var nuevoSaludo = saludo("Ramón", "México", 40);
console.log(nuevoSaludo);

// valores por defecto
saludo(undefined, "España", undefined);

// ejemplo
function obtenerGoles(p1, p2) {
  var partido1 = p1;
  var partido2 = p2;

  function agregar() {
    var nombre = "juanito";
    return nombre + "anotó " + (partido1 + partido2) + " goles";
  }
  return agregar();
}

var temp1 = obtenerGoles(4, 5);
console.log(temp1);

// otro ejemplo con números
function suma(num1, num2) {
  var total = num1 + num2;
  return "La suma es:" + total;
}
Suma(2, 2);
("La suma es: 4");

// otro ejemplo
function hacerSonido() {
  return "Pliiiing";
}
var sonido = hacerSonido();
console.log("El sonido del celular es: " + sonido);

// Expresión de función (anónima) ------------
const hacerSonido = function () {
  return "Pliiing";
};
var sonido = hacerSonido();
console.log("El sonido del celular es: " + sonido);

// otro ejemplo
const square = function (number) {
  return number * number;
};
var x = square(4); // retorna el valor 16

// arrow functions  ---- son anónimas e incluye un return
const sumarDos = (num1, num2) => {
  console.log(num1 + num2);
};
sumarDos(10, 50);

// arrow function con el ejemplo de arriba
const hacerSonido = () => {
  return "Pliiing";
};
var sonido = hacerSonido();
console.log("El sonido del celular es: " + sonido);

// también se puede hacer sin llaves {}
const hacerSonido = () => "Pliiing";
var sonido = hacerSonido();
console.log("El sonido del celular es: " + sonido);

// ejemplo con if
const hacerSonido = (cel, color) => {
  if (cel == "iphone") {
    return cel + "hacer pling";
  } else {
    return "no se como suena ese celular";
  }
};
var sonido = hacerSonido("iphone");
console.log(hacerSonido);
