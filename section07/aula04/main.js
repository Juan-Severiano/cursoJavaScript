// Metodos de Instancias e Estaticos

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume() {
        this.volume +=2
    }
    // Instacia
    diminuirvolume() {
        this.volume -= 2
    }
    
    // Static
    static trocaPilha() {
        console.log('Partiu trocar as pilhas hein')
    }
}

const controle = new ControleRemoto('LG')
controle.aumentarVolume()
ControleRemoto.trocaPilha()
console.log(controle)


//  O metodo de instancia eh referente a instancia
//  o metodo Estatico eh referente a classe em si, e nao a sua instancia

