function Calculadora() {
    this.display = document.querySelector('.display')
    this.btnClear = document.querySelector('.btn-del')

    this.start = () => {
        this.clickButtons()
        this.pressEnter()
    }

    this.pressEnter = () => {
        this.display.addEventListener('keyup', e => {
            if ( e.keyCode === 13 ) {
                this.fazConta()
            }
        })
    }

    this.fazConta = () => {
        let conta = this.display.value

        try {
            conta = eval(conta)

            if (!conta) {
                alert('Deu pau ai boy, ajeita isso')
                return
            }

            this.display.value = String(conta)
        } catch (e) {
            alert('Conta invalida')
            return
        }
    }

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1)
    }

    this.clearDisplay = () => {
        this.display.value =''
    }

    this.clickButtons = () => {
        document.addEventListener('click', e => {
            const el = e.target

            if (el.classList.contains('btn-num')) {
                this.btnToDisplay(el.innerText)
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay()
            }
            if ( el.classList.contains('btn-del') ) {
                this.deleteOne()
            }
            if (el.classList.contains('btn-eq')) {
                this.fazConta()
            }
        })
    }

    this.btnToDisplay = (valor) => {
        this.display.value += valor
    }
}

const calc = new Calculadora()
calc.start()