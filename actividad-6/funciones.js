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
