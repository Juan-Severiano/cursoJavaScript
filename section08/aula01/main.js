// Promises

function esperaAiMan(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAiMan('negada', 2345).then(r => {
    console.log(r)
})