// Estrutura de repetiçao 
// For Clássico
const pares = []
const impares = []

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        pares.push(i)
    } else {
        impares.push(i)
    }
}
console.log(`Os números Pares de 0 a 10 são: \n${pares}\nE os números ímpares são: \n${impares}`)

