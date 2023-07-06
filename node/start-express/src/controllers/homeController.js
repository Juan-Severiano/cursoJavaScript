exports.homePage = (req, res) => {
    res.render('index')
}

exports.trataPost = (req, res) => {
    res.send(`Rapaz, tu enviou isso aqui msm? ${req.body}`)
    return
}