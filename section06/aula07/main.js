// Manipulando prototypes

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(porcento) { this.preco = this.preco + ( this.preco * (porcento/100) ) }

p1 = new Produto('Camisa', 123) 
p1.desconto(100)
console.log(p1.preco)










// const objA = {
//     chaveA: 'A'
// }
// 
// const objB = {
//     chaveB: 'B'
// }
// 
// Object.setPrototypeOf(objB, objA)
// console.log(objA, objB)