// Promises

function rand(min=0, max=3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAiMan(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
                return
            }

            resolve(msg.toUpperCase() + '- Passei na promise')
        }, tempo)
    })
}

async function executa() {
    try {
        const fase1 = await esperaAiMan('fase 1', rand())
        console.log(fase1)
        const fase2 = await esperaAiMan('fase 2', rand())
        console.log(fase2)
        const fase3 = await esperaAiMan('fase 3', rand())
        console.log(fase3)
        console.log('terminamos na fase:', fase3)
    } catch(e) {
        console.log(e)
    }
}
executa()


// esperaAiMan('fase 1', rand(0, 3))
//   .then(valor => {
//     console.log(valor)
//     return esperaAiMan('FASE 2', rand())
//   })
//   .then(fase => {
//     console.log(fase)
//     return esperaAiMan('FASE 3', rand())
//   })
//   .then(fase => {
//     console.log(fase)
//   })
//   .catch(e => {
//     console.log(e)
//   })