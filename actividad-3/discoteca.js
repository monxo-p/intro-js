// si es mayor de edad puede entrar a la discoteca
// Si se llama  Mario y es mayor de edad entra a VIP

var nombre = "pedro";
var edad = 19;

if (nombre === "mario" && edad >= 18) {
  console.log("puedes entrar a la discoteca a la sala VIP");
} else if (edad >= 18) {
  console.log("hola", nombre, "bienvenido a la discoteca");
} else {
  console.log("no puedes entrar, no tienes la edad");
}
