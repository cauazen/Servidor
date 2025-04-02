const http = require('http')
const url = require('url')
const { soma,subtracao } = require('./teste')
const PORT = 8000

//criar servidor
const server = http.createServer((req,res) =>{
    const urlCapturada = url.parse(req.url, true)
    const {query,pathname} = urlCapturada
    let resultado = 0
    let mensagem = `O resultado é: ${resultado}`
    if(pathname == '/soma'){
         resultado = soma(Number(query.a), Number(query.b))
    }else if(pathname == '/subtracao'){
         resultado = subtracao(Number(query.a), Number(query.b))
    }else{
        res.statusCode = 404
        mensagem = 'Pagina nao encontrada'
        }
       res.end(mensagem)
})

//fazer ele ouvir na porta 8000
server.listen(PORT, () => {
    console.log(`O servidor foi inicializado na porta ${PORT}`)
})










