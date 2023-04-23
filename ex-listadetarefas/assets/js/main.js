const inputTarefa = document.querySelector('.input-new')
const btn = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaLi() {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', (event) => {
    if ( event.keyCode === 13 ) {
        if ( !inputTarefa.value ) return
        criaTarefa(inputTarefa.value)
    }
})

function criaTarefa(tarefa) {
    const li = criaLi()
    li.innerText = tarefa
    tarefas.appendChild(li)
    limpaInput()
    criaBotao(li)
    salvarTarefas()
}

function criaBotao(li) {
    li.innerText += '       '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

btn.addEventListener('click', () => {
    if ( !inputTarefa.value ) return
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaText = tarefa.innerText
        tarefaText = tarefaText.replace('Apagar', '')
        listaTarefas.push(tarefaText)
    }

    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function addTarefas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)

    for (let tarefa of listaTarefas) {
        criaTarefa(tarefa)
    }
}

addTarefas()