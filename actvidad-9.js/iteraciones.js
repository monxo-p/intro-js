//------- forEach()----------

const items = ["item1", "item2", "item3"];
const copyItems = [];

// con for normal
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// con forEach
items.forEach((item) => {
  copyItems.push(item);
});

// --------map ----------
// crea una copia de un array con instrucciones de funcines
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
  return x * 2;
});

//doubles es [2,10,20,30]
// se conserva numbers [1,5,10,15]

// otro ejemplo:
const transformers = [
  {
    name: "Optimus Prime",
    team: "Autobot",
    form: "Trailer",
  },
  {
    name: "Bumblebee",
    team: "Autobot",
    form: "Camaro",
  },
  {
    name: "Megatron",
    team: "Decepticon",
    form: "Jet",
  },
];

// solo imprimir los nombres
// con for tradicional
const nombres = [];
for (let i = 0; i < transformers.length; i++) {
  nombres.push(transformers[i].name);
}
console.log(nombres);

// con map --   element == transformers[i]
const transformersName = transformers.map((element) => {
  return element.name;
});
console.log(transformersName);

//------- Filter --------
// encuentra algo dentro de un array y crea otro array copiando el elemento buscado
// ejemplo: buscar un elemento que su team sea decepticon

// con for tradicional
const team = [];
for (let i = 0; i < transformers.length; i++) {
  if (transformers[i].team == "Decepticon") {
    team.push(transformers[i]);
  }
}
console.log(team);

//con filter
const transformersTeam = transformers.filter(
  (element) => element.team === "Decepticon"
);
console.log(transformrsTeam);
