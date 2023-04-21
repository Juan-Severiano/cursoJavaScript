const Pessoa = {
    name: 'Juan',
    lastName: 'Severiano', 
    age: 15
}

function makePeople(name, age) {
    return {
        name: name,
        age: age
    }
}

const pessoaOne = makePeople('Juan', 15)
console.log(pessoaOne)

