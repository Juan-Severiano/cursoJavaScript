function ValidarCPF(cpf) {
    Object.defineProperty(this, 'clearCpf', {
        enumerable: true,
        get: () =>  cpf.replace(/\D/g, ''),
    })
}
ValidarCPF.prototype.valida = function() {
    if (typeof this.clearCpf === 'undefined') return false
    if (this.clearCpf.length !== 11) return false
    if (this.isSequencia()) return false

    const cpfParcial = this.clearCpf.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + String(digito1))

    const newCpf = cpfParcial + digito1 + digito2
    if (newCpf === this.clearCpf) return 'Válido'
    return 'Inválido'
}
ValidarCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray =  Array.from(cpfParcial)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += ( regressivo * Number(val))
        regressivo --
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito > 9 ? '0':String(digito)
}
ValidarCPF.prototype.isSequencia = function(){
    const sequencia = this.clearCpf[0].repeat(this.clearCpf.length)
    return sequencia === this.clearCpf
}

cpf = new ValidarCPF('075.408.303-95')
console.log(cpf.valida())