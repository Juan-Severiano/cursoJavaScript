// Função construtora - objetos
// Construtora -> Pessoa

function Pessoa(nome, sobrenome) {
    // somrenteoque tem this eh retornado para fora, qualquer atributo ou metodo que eh usado no escopo  sem o self eh privado

    const kkk = 'kkk' // interno
    this.nome = nome // externo
    this.sobrenome = sobrenome

}

p1 = new Pessoa('Luis', 'Felipe')
p2 = new Pessoa('Juan', 'Severiano')