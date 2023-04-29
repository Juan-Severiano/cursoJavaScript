// Filter
// filter sempre retorna array
//const numeros = [ 2, 45, 56, 3, 6 , 6 , 3456, 56, , 3, 4, 6, 7, 34, 2354 ]
//const maiorQue10 = numeros.filter(valor => valor > 10)

// for ( let i of numeros )  if ( i >= 10 ) maiorQue10.push(i)

// console.log(maiorQue10)

const pessoas = [
    { nome: 'juan', idade: 15 },
    { nome: 'mirela', idade: 8 },
    { nome: 'alguem', idade: 23 },
    { nome: 'ninguem', idade: 0 },
    { nome: 'vc', idade: 2345 },
    { nome: 'yoda', idade: 123456 },
]
const cincoOuMais = pessoas.filter(obj =>  obj.nome.length >= 5 )
const mais50 = pessoas.filter( obj => obj.idade > 50 )
const terminaComA = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('a') )

// for (let i of pessoas) {
//     if ( i.nome.length >= 5 ) cincoOuMais.push(i)
//     if ( i.idade > 50 ) mais50.push(i)
//     const terminaA = i.nome.slice(-1)
//     console.log(terminaA)
//     if ( terminaA === 'a' ) terminaComA.push(i)
// }
console.log(cincoOuMais, mais50, terminaComA)