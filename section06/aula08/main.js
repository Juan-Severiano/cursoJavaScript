// Heranças

function Produto( nome, preco ) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(valor) {
    this.preco += valor
}
Produto.prototype.desconto = function(valor) {
    this.preco -= valor
}

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco)
}
Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa