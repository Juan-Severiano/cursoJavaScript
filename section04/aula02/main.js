// Factory Function

function criaPessoa(nome, sobrenome,idade, peso, altura) {
    return {
        nome,
        sobrenome,
        set fullName(valor) {
            valor = valor.split(' ')
            this.nome = valor.unshift()
            console.log(valor)
        },
        get fullName() {
            return `${this.nome} ${sobrenome}`
        },
        idade,
        peso,
        altura,
        fala(assunto) {
            return `${this. nome} esta falando sobre ${assunto}`
        },
        get imc() {
            const indice = this.peso / ( this.altura **2 )
            return indice.toFixed(2)
        }
    }
}

// caso o use o get na fuyncao dentro da factory function, o metodo passa a ser um atributo, entao nao precisa de ()

const p1 = criaPessoa('Juan', 'Severiano', 15, 75.5, 1.80)
p1.fullName = 'Juan Severianio'
console.log(p1.fala('Marvel'), p1.imc, p1.fullName)