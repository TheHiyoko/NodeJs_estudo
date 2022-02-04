//faz a importacao do core moduele
const http = require("http")
const fs = require("fs")
//define a pora
const port = 3000
//elaborando o servidor
const server = http.createServer((req,res) => {
    fs.readFile('message.html',function(err,data){
        //resume o status code e o content type em uma linha
       res.writeHead(200,{'Content-type':'text/html'}) 
       res.write(data)
       return res.end
    })
}) 

server.listen(port, () => {
    console.log('servidor na porta: '+port)
})