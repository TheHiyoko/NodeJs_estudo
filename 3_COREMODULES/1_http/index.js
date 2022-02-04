//faz a importacao do core moduele
const http = require("http")
//define a pora
const port = 3000
//elaborando o servidor
const server = http.createServer((req,res) => {
    //respota 
    res.write('oi http')
    res.end()

}) 

server.listen(port, () => {
    console.log('servidor na porta: '+port)
})