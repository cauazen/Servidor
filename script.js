const http = require('http')
const url = require('url')
const { soma } = require('./teste')
const PORT = 8000

//criar servidor
const server = http.createServer((req,res) =>{
    const urlCapturada = url.parse(req.url, true)
    const {query} = urlCapturada
    console.log(query)
    let resultado = soma(Number(query.a), Number(query.b))
    res.end(`O valor final é ${resultado}`)
})

//fazer ele ouvir na porta 8000
server.listen(PORT, () => {
    console.log(`O servidor foi inicializado na porta ${PORT}`)
})










