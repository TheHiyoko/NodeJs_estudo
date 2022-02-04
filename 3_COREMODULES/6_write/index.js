//faz a importacao do core moduele
const http = require("http")
const fs = require("fs")

//define a pora
const port = 3000

//elaborando o servidor
const server = http.createServer((req,res) => {

    //importa o url em linha
    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html',function(err,data){
            //resume o status code e o content type em uma linha
           res.writeHead(200,{'Content-type':'text/html'}) 
           res.write(data)
           return res.end
        })
    }else{
        fs.writeFile("arquivo.txt", name, function(err,data) {
            res.writeHead(302, {
                location: '/',
            })
            return res.end
        })
    }

    
}) 

server.listen(port, () => {
    console.log('servidor na porta: '+port)
})