class Pessoa {
    constructor( nome, sobrenome ) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    get fullName() { return this.nome + ' ' + this.sobrenome }
    set fullName(valor) {
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join(' ')
    }
}

const p1 = new Pessoa()
p1.fullName = 'Juan Severiano'
console.log(p1)
console.log(p1.fullName)