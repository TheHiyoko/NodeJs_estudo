//faz a importacao do core moduele
const http = require("http")
const url = require("url")
//define a pora
const port = 3000
//elaborando o servidor
const server = http.createServer((req,res) => {

    //
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name
    
    res.statusCode = 200
    res.setHeader("Content-type","text/html")
    
    if(!name){
        res.end("<h1>Coloque seu nome</h1><form method=GET><input type= text' name='name'><input type='submit' value='Enviar'></form>")
    }else{
        res.end("<h1>Seja bem vindo "+name+"</h1>")
    }
}) 

server.listen(port, () => {
    console.log('servidor na porta: '+port)
})