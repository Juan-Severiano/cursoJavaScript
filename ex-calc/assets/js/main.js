function criaCalculadora() {
    return {
        display: document.querySelector('.display'),


        start() {
            alert('começou')
        },
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target

                if( el.classList.contains('btn-num') ) {
                    
                }
            })
        }
    }
}

const calculadora = criaCalculadora()
calculadora.start()