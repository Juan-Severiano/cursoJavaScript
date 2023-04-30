// defineProperty  -  defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco


    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        value: estoque,   // valor da chave
        writable: true,  // pode alterar
        configurable: false  // configuravel
    })
}