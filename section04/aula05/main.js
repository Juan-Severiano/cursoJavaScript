// funcoes geradoras

function* geradora01() {
    yield 'valor01'
    yield 'valor02'
    yield 'valor03'
    yield 'valor04'
    yield 'valor05'
    yield 'valor06'
    yield 'valor07'

}

g1 = geradora01()

//console.log(g1.next().value)

for( let valor of g1 ){
    console.log(valor)
}