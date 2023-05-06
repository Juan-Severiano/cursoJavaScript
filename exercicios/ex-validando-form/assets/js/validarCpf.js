class ValidarCPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D/g, '')
    }
    valida() {
        if ( typeof this.cpf === 'undefined' ) return false
        if ( this.cpf.length !== 11 ) return false

        const cpfParcial = this.cpf.slice(0, -2)
        const d1 = this.criaDigito(cpfParcial)
        const d2 = this.criaDigito(cpfParcial + String(d1))

        const newCpf = cpfParcial + d1 + d2
        if(newCpf === this.cpf) return true
        return false
    }
    criaDigito(cpfParcial) {
        const arrayCpf = Array.from(cpfParcial)
        let regresso = arrayCpf.length + 1
        const total = arrayCpf.reduce((ac, val) => {
            ac += ( regresso * Number(val) )
            regresso --
            return ac
        }, 0)

        const digito = 11 - ( total % 11 )
        return digito > 9 ? '0' : String(digito)
    }
}

// const cpf = new ValidarCPF('075.408.303-95')
// console.log(cpf.validaçao())
