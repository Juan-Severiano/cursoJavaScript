const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send('hello world')
})

app.get('/contato', (req, res) => {
    res.send('nosso contact')
})

app.listen(3000, () => {
    console.log('Access this link http://127.0.0.1:3000 ')
})