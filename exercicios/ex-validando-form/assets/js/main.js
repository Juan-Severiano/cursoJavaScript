class ValidaForm {
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
        for (let errorText of this.form.querySelectorAll('.error-text') ) {
            errorText.remove()
        }

        for (let campo of this.form.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText
            if (!campo.value) {
                this.createError(campo, `Campo de ${label}, não pode estar em branco`)
                valid = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false
            }
        }
    }
    validaCPF(campo) {
        const cpf = new ValidarCPF(campo.value)

        if(!cpf.validaçao()) {
            this.createError(campo, 'CPF Inválido')
            return false
        }

        return true
    }

    createError(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaForm()