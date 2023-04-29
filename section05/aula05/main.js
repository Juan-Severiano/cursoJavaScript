// map

// const num = [ 2,3 ,5, 34,3, 54,65, 46,4567, 23,54 ,54,63 ,6,56 ,34,4, 52,563, 246,46 ,56 ]
// const dobro = num.map(valor => valor * 2)
// console.log(dobro)

const pessoas = [
    { nome: 'juan', idade: 15 },
    { nome: 'mirela', idade: 8 },
    { nome: 'alguem', idade: 23 },
    { nome: 'ninguem', idade: 0 },
    { nome: 'vc', idade: 2345 },
    { nome: 'yoda', idade: 123456 },
]
const nome = pessoas.map(valor => valor.nome)
console.log(nome)
const idade = pessoas.map(valor => ({ idade: valor.idade}))
console.log(idade)
const id = pessoas.map((obj, index) => ({nome: obj.nome, idade:obj.idade, id:index}))
console.log(id)
console.log(pessoas)