// metodo splice

const nomes = ['juan', 'gabriel', 'dudu', 'julia', 'negada']
//pop
nomes.splice(-1, 1)
// shift
nomes.splice(0, 1)
// push
nomes.splice(-1, 1, 'raapz')

console.log(nomes)