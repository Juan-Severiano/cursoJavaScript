function getTimeFromSecunds(seg) {
    const data = new Date(seg * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "UTC"
    })
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function iniciaRelogio() {
    relogio.style.color = 'black'
    timer = setInterval(() => {
        segundos ++
        relogio.innerHTML = getTimeFromSecunds(segundos)
    }, 1000)
}

iniciar.addEventListener('click', () => {
    iniciaRelogio()
    clearInterval(timer)
})
pausar.addEventListener('click', () => {
    clearInterval(timer)
    relogio.style.color = 'red'
})
zerar.addEventListener('click', () => {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    relogio.style.color = 'black'
})