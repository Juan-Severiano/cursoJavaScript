// fetch('pessoas.json')
//   .then(res => res.json())
//   .then(json => loadElements(json))

axios('pessoas.json')
  .then(res => loadElements(res.data))

function loadElements(json) {
  const table = document.createElement('table')
  for (let pessoa of json) {
    const tr = document.createElement('tr')

    let td = document.createElement('td')
    td.innerHTML = pessoa.nome
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = pessoa.idade
    tr.appendChild(td)
    td = document.createElement('td')
    td.innerHTML = pessoa.salario
    tr.appendChild(td)

    table.appendChild(tr)
  }
  const res = document.querySelector('.resultado')
  res.appendChild(table)
}