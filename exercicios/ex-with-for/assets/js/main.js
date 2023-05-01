const conteudo = document.querySelector('.container div')
const elements = [
    {tag:'p', text:'frase 1'},
    {tag:'div', text:'frase 2'},
    {tag:'footer', text:'frase 3'},
    {tag:'section', text:'frase 4'},
]
for (let i = 0; i < elements.length ; i++) {
    conteudo.innerHTML += `<${elements[i].tag}>${elements[i].text}</${elements[i].tag}>`
}