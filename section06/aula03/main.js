// getter e setter

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // mostra a chave
        get: () => estoquePrivado,
        set: valor => { if (typeof valor !== 'number') throw new TypeError ('Valor Incorreto, Por favor Insira um numero')},
        configurable: false  // configuravel
    })
}

const p1 = new Produto('camisa', 20, 3)


// get so pegar o valor e retornar, geralmente