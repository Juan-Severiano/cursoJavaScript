const HomeModel = require('../models/HomeModel')

HomeModel.create({
    title: 'um titulo de teste',
    description: 'A description to tests'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e))

exports.homePage = (req, res) => {
    req.flash('info')
    res.render('index')
}

exports.trataPost = (req, res) => {
    res.send(`Rapaz, tu enviou isso aqui msm? ${req.body}`)
    return
}