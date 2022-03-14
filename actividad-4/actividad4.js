/* 
----Ejercicio 1----cuenta de 5 en 5-----
var numero = Number(prompt("Ingrese un número"));
var index = 1;
while (index <= numero) {
    if (index % 5 === 0)
        console.log(index);
    index++;
}

---Ejercicio 2-----cuenta de 5 en 5-----
var numero = Number(prompt("Ingrese un número"));
var index = 1;
do{
    if(index % 5 === 0) {
    console.log(index)
    }
    index++;
}while (index <= numero)

---Ejercicio 3----- cuenta números impares---
for (var numero=1; numero<= 50; numero++){
    if(numero % 2 !==0){
        console.log(numero, 'es número impar');
    }
}

*/
