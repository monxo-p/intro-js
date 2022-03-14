var numero1 = Number(prompt("Ingrese un número"));
var numero2 = Number(prompt("Ingrese un número"));
var numero3 = Number(prompt("Ingrese un número"));

if (numero1 == numero2 && numero1 == numero3) {
  console.log("Todos los números son iguales")
} else if (numero1 > numero2) {
    if (numero1 > numero3) {
        console.log('El número 1', numero1, 'es el mayor')
    } else if (numero3 > numero1) {
        console.log('El número 3', numero3, 'es el mayor')
    } elese {
        console.log('El número 1 y el número 3 son iguales', numero1, numero3)
    }
} else if (numero2 > numero1) {
    if (numero2 > numero3) {
        console.log('El número 2', numero2,'es el mayor')
    } else if (numero3 > numero2) {
        console.log('El número 3', numero3, 'es el mayor')
    } else {
        console.log('El número 2 y el 3 son iguales', numero2, numero3)
    }
} else {
    console.log('El número 2 y el 1 son iguales', numero1, numero2)
}
