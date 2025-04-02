const express = require('express')
const server = express()

const { soma,subtracao } = require('./teste')
const PORT = 8000

//criar rotas no express
server.get('/soma', (req,res) => {
    //let resultado = soma(req.query.a, req.query.b)
    res.send(`aqui vai o resultado da minha soma`)
})
server.get('/subtracao', (req,res) => {
    //let resultado = soma(req.query.a, req.query.b)
    res.send(`aqui vai o resultado da minha subtracao`)
})
//fazer ele ouvir na porta 8000
server.listen(PORT, () => {
    console.log(`O servidor foi inicializado na porta ${PORT}`)
})










