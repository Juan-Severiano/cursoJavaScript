// ? :
// (condição) ? 'Valor pra true' : 'Valor pra false'
const pontUser = 467
const nivelUser = pontUser >= 1000 ? 'User VIP' : 'User normal'
console.log(nivelUser)

const userColor = null
const padraoColor = userColor || 'black'

if ( pontUser >= 1000 ) {
    console.log('VIP')
} else {
    console.log('Normal')
}