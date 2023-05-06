const nome = "juan"
const sobrenome = 'severiano'

const falaNome = () => {
    console.log(nome, sobrenome)
}

// module.exports.nome = nome

exports.nome = nome
exports.sobrenome = sobrenome

console.log(module.exports)
