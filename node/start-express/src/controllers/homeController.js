exports.homePage = (req, res) => {
    res.render('index', {
        nome : 'test',
        numbers : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })
}

exports.trataPost = (req, res) => {
    res.send(`Rapaz, tu enviou isso aqui msm? ${req.body}`)
    return
}