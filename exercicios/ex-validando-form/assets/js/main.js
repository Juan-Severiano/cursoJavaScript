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
        const senhasValidas = this.senhasValidas()

        if (camposValidos && senhasValidas ) {
            alert('form enviado')
            this.form.submit()
        }
    }
    senhasValidas() {
        let valid = true

        const senha = this.form.querySelector('#senha')
        const rsenha = this.form.querySelector('#rsenha')

        if( senha.value !== rsenha.value ) {
            valid = false
            this.createError(senha, 'Campos senha e Repetir senha precisam ser iguais')
            this.createError(rsenha, 'Campos senha e Repetir senha precisam ser iguais')
        }
        if ( senha.length < 6 || senha.length > 12 ) {
            valid = false 
            this.createError(senha, ' A senha deve estra entre 6 e 12 caracteres')
        }

        return valid
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

            if (campo.classList.contains('usuario')) {
                if (!this.validaUser(campo)) valid = false
            }
        }

        return valid
    }
    validaCPF(campo) {
        const cpf = new ValidarCPF(campo.value)

        if(!cpf.valida()) {
            this.createError(campo, 'CPF Inválido')
            return false
        }

        return true
    }
    validaUser(campo) {
        const user = campo.value
        let valid = true

        if (user.length < 3 || user.lentgh > 12 ) {
            this.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
            valid = false
        }

        if ( !user.match(/^[a-zA-Z0-9]+$/g) ) {
            this.createError(campo, 'Usuário precisa ter apenas letras e numeros')
            valid = false
        }

        return valid
    }

    createError(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaForm()