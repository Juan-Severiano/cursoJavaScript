function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente rapaz, num insista nao')
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(valor) {
    console.log(`Ag.:${this.agencia}\nConta: ${this.conta}\nSaldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log('Saldo insuficiente rapaz, num insista nao')
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

ContaPoupanca.prototype.sacar = function(valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log('Saldo insuficiente rapaz, num insista nao')
        this.verSaldo()
        return
    }
    this.saldo -= valor
    this.verSaldo()
}


const  conta = new ContaCorrente(123, 321, 231, 200)
conta.depositar(234)
conta.sacar(200)
conta.sacar(456)
console.log()
const  cp = new ContaPoupanca(123, 321, 231, 200)
cp.depositar(234)
cp.sacar(200)
cp.sacar(456)