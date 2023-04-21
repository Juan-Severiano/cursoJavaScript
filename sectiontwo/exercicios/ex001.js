function myScope() {
    var form = document.querySelector('.form')
    const results = document.querySelector('.results')

    const pessoas = []
    function pessoa(nome, sobreNome, peso, altura) {
        return { nome, sobreNome, peso, altura }
    }

    function recebeForm(event) {
        event.preventDefault()
        const nome = form.querySelector('.name')
        const sobreNome = form.querySelector('.lastname')
        const peso = form.querySelector('.weight')
        const altura = form.querySelector('.height')
        const alguem = pessoa(nome.value, sobreNome.value, peso.value, altura.value)
        pessoas.push(alguem)
        console.log(pessoas)
        results.innerHTML += `<p>${nome.value} ${sobreNome.value} ${peso.value} ${altura.value}</p>`
    }
    form.addEventListener('submit', recebeForm)
}
myScope()