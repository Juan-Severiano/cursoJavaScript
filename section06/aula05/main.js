// Prototype

function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
    //this.fullName = () => `${this.nome} ${this.sobrenome}`
}

Pessoa.prototype.fullName = function() { return this.nome + ' ' + this.sobrenome }
const p1 = new Pessoa('Francisco Juan', 'severiano')
const p2 = new Pessoa('Sla', 'SlaJunior')

console.dir(p1.fullName())
console.dir(p2)