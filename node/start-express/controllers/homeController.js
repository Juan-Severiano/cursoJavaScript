exports.homePage = (req, res) => {
    res.send(`
        <h1>FODA</h1>
        <form action="/"> <input value"nome" type="text">
        <button>asd</button>
    `)
}

exports.trataPost = (req, res) => {
    res.send('opa')
}