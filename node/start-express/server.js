require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser : true, useUnifiedTopology : true })
  .then(() => {
    console.log('db connected')
    app.emit('pronto')
  })
  .catch(e => console.log(e))

const routes = require('./routes')
const path = require('path')

app.set('views', path.resolve( __dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)
app.use(express.urlencoded( { extended : true } ))
app.use(express.static(path.resolve(__dirname, 'public')))

app.on('pronto' , () => {
    app.listen(3000, () => {
        console.log('Access this link http://127.0.0.1:3000 ')
    })
})
