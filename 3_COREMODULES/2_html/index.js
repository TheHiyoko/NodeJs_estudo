//faz a importacao do core moduele
const http = require("http")
//define a pora
const port = 3000
//elaborando o servidor
const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-type',' text/html')
    res.end('<h1>Olá via http e html</h1>')
}) 

server.listen(port, () => {
    console.log('servidor na porta: '+port)
})