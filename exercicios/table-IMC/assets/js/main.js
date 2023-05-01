function calcularImc() {
    const form = document.querySelector('.form')
    const resposta = form.querySelector('.resposta')
    resposta.style.display = 'block'
    function calc(event) {
        event.preventDefault()
        const peso = Number(form.querySelector('#input-1').value)
        const altura = Number(form.querySelector('#input-2').value)
        const imc = peso / altura**2
        let result
        if (peso > 0 && altura > 0){
            if (imc < 18.5) {
                result = 'Abaixo do Peso'
            } else if (imc > 18.5 && imc < 24.9) {
                result = 'Peso Normal'
            } else if (imc > 24.9 && imc < 29.9) {
                result = 'Sobrepeso'
            } else if (imc > 30 && imc < 34.9) {
                result = 'Obsidade Grau 1'
            } else if (imc > 35 && imc < 39.9) {
                result = 'Obsidade Grau 2'
            } else if (imc > 40) {
                result = 'Obsidade Grau 3'
            }
            form.querySelector('.resposta').style.background = '#05c283'
            return resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${result})`
        } else {
            form.querySelector('.resposta').style.background = 'red'
            return resposta.innerHTML = `<h3>inválido, que nem você, digita essa merda ai de novo</h3>`
        }
        // return resposta.innerHTML = `Seu IMC é ${result.toFixed(2)} ()`
        
    }
    form.addEventListener('submit', calc)
}
calcularImc()