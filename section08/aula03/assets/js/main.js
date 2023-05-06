const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', ()=>{
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
    
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
        loadPage(el)
    }
})

async function loadPage(el) {
    const href = el.getAttribute('href')
    console.log(href)

    const response = await request({
        method: 'GET',
        url: href,
    })
    loadResults(response)
}

function loadResults(response) {
    const res = document.querySelector('.res')
    res.innerHTML = response
}