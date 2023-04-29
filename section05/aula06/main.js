// Reduce

const pessoas = [
    { nome: 'juan', idade: 15 },
    { nome: 'mirela', idade: 8 },
    { nome: 'alguem', idade: 23 },
    { nome: 'ninguem', idade: 0 },
    { nome: 'vc', idade: 2345 },
    { nome: 'yoda', idade: 123456 },
]

const maisVelho = pessoas.reduce((ac, val) => {
    if (ac.idade > val.idade) return ac
    return val
})
console.log(maisVelho)




// const num = [ 2,3 ,5, 34,3, 54,65, 46,4567, 23,54 ,54,63 ,6,56 ,34,4, 52,563, 246,46 ,56 ]
// const total = num.reduce((acumulador, valor) => {
//     acumulador += valor
//     return acumulador
// }, 0)
// console.log(total)