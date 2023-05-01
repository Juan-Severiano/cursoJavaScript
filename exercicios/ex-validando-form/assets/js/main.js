class ValidacaoForm {
    constructor() {
        this.form = document.querySelector('.form')
        this.eventos()
    }
    eventos() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }
    handleSubmit(e) {
        e.preventDefault()
        const camposValidos = this.camposValidos()
    }
    camposValidos() {
        let valid = true

        for (let campo of this.form.querySelector('.validar')) {
            console.log(campo)
        }
    }
}

const valida = new ValidacaoForm()