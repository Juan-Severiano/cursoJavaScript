const produto = {
    nome: 'caneca',
    preco: 2.0
}

// const outraCoisa = produto
// quando se faz isso as duas constantes apontam para o mesmo valor na memoria

// pode se copiar um objeto sem linkar dessas formas

// usando o restOperator
// const outraCoisa = {...produto, tipo: 'coisado'}

// usando o object.assing()
// const caneca = Object.assign({}, produto, {material: 'coisado})

// object.freeze() congela aquele objeto
