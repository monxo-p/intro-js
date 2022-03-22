const transformers = [
    {
        name: 'Optimus Prime',
        team: 'Autobot',
        form: 'Trailer'
    },
    {
        name: 'Bumblebee',
        team: 'Autobot',
        form: 'Camaro'
    },
    {
        name: 'Megratron',
        team: 'Decepticon',
        form: 'Jet'
    }
]
​
​
// Arreglo que solo imprima los nombres de los transformers
​
// for tradicional
// const nombres = []
// for(let i = 0; i < transformers.length; i++) {
//     nombres.push(transformers[i].name)
// }
​
// console.log(nombres)
​
// map  -> element == transformers[i]
const transformersName = transformers.map(element => element.name )
​
// console.log(transformersName)
​
​
// buscar el element que su team sea Decepticon
​
/** For tradicional */
​
const team = []
​
for(let i = 0; i < transformers.length; i++) {
    if(transformers[i].team == 'Decepticon') {
        team.push(transformers[i])
    }
}
​
console.log(team)
​
​
// filter:
​
const transformersTeam = transformers.filter(transformer => transformer.team === 'Decepticon')
​
console.log(transformersTeam)