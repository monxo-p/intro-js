// métodos

// push
//agrega elementos al final de la lista
var frutas ['pera', 'manzana', 'platano', 'uvas']
frutas.push('mandarina');

var frutas ['pera', 'manzana', 'platano', 'uvas', 'mandarina']


// pop
// elimina en último elemento de la lista
frutas.pop();

// unshift agrega un elemento al principio de la lista
frutas.unshift('naranja');



// shift
// elimina el elemento al principio de la lista
frutas.shift();



// split
// divide una cadena de array
var verduras = 'cebolla,perejil,tomate,calabaza';
var arregloVerduras = verduras.split(',');

arregloVerduras;
['cebolla', 'perejil', 'tomate', 'calabaza']



// slice
// quita una parte y devuelve otra
var verduras = ['cebolla', 'perejil', 'tomate', 'calabaza']
console.log(verduras.slice(2));
['tomate', 'calabaza']

var pocasVerduras = verduras.slice(2);

verduras.slice(1, 3)
perejil, tomate // solamente



// sort
// ordena listas - por default es de A-Z 1-10 etc  --- los convierte a strings
verduras.sort();
// los ordena por orden alfabético

// para números:
var numeros = [2,5,1,3,46,70,34]
numeros.sort(function (a, b) {
    return a - b
});
// ya los acomoda bien



// reverse
verduras.reverse();


// concat
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

