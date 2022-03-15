//---While---
var index = 0;
while(index < 11) {
    console.log(index);
    index++;
}

0
1
2
3
4
5
6
7
8
9
10

//---Do While---
var contador = 0;
do {
    contador++;
    console.log('Conteo:' + contador);
} while (contador < 10);

Conteo:1
Conteo:2
Conteo:3
Conteo:4
Conteo:5
Conteo:6
Conteo:7
Conteo:8
Conteo:9
Conteo:10

//---For----
var contador = 0;
for (var index = 1; index <= 10; index++){
    if (index % 2 == 0) {
        contador = contador + 1;
        console.log('${index} es múltiplo de 2');
    }
}
console.log('De 0 a 10 existen ${contador} múltiplos de 2');

2 es múltiplo de 2
4 es múltiplo de 2
6 es múltiplo de 2
8 es múltiplo de 2
10 es múltiplo de 2
De 0 a 10 existen 5 múltiplos de 2

//---Acumulador---
var acumulador = 0;
for (var index = 0; index <=4; index++) {
    acumulador = acumulador + index;
    console.log(acumulador);
}

0
1
3
6
10

//----Arrays----
var frutas = ['pera', 'manzana', 'plátano', 'naranja']
frutas[2]
'plátano'

// para reasignar
frutas[3] = 'uvas';

// iterar un arreglo
var arreglo = [´hola, 1, true, null]

for (var i = 0; i < arreglo.length; i++){
    console.log(arreglo[i])
}