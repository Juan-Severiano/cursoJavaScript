// Heranças

class DispEletronico {
    constructor(nome) {
        this.nome = nome 
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} está ligado`)
            return
        }

        this.ligado = true
    }

    desligar() {
        if (this.ligado === false) {
            console.log(`${this.nome} está desligado`)
            return
        }

        this.ligado = false
    }
}

class Smartphone extends DispEletronico {
    constructor(nome, cor, model) {
        super(nome, ligado)

        this.cor = cor
        this.model = model
    }
}

/*
    A herança em classes eh bem mais simples
    nela se usa extends na class filha
    e na constructor se usa o metodo super para trazer os atributos setados na classe pai
*/