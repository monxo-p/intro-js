// nombre es global
function miFuncion() {
    nombre = 'jose';  //variable global
    if (true) {
        nombre = "pedro";
    }
    return nombre;
}
var x = miFuncion();
console.log(nombre);

var tiene un scope de funciones - se puede redeclarar y reasignar
let tiene un scope de bloque - solo se puede reasignar
const también de bloque - se declaran con mayúsculas - no se puede ninguna de las dos

hay que llamar las funciones por niveles - de particular a general o de adentro hacia afuera

