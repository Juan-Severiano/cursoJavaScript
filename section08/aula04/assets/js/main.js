// Fetch API


document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
        loadPage(el)
    }
})

async function loadPage(el) {
    try {
        const href = el.getAttribute('href')
        const response = await fetch(href)
        const html = await response.text()
        loadResults(html)
    } catch(e) {
        console.log(e)
    }
    
}

function loadResults(response) {
    const res = document.querySelector('.res')
    res.innerHTML = response
}