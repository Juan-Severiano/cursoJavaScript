const express = require('express')
const app = express()
const routes = require('./routes')

app.use(routes)

app.listen(3000, () => {
    console.log('Access this link http://127.0.0.1:3000 ')
})