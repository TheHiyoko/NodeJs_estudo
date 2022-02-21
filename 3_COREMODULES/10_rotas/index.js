//faz a importacao do core moduele
const http = require("http")
const fs = require("fs")
const url = require("url")

//define a pora
const port = 3000

//elaborando o servidor
const server = http.createServer((req,res) => {

    //importa o url em linha
    const query = url.parse(req.url, true)
    const filename = query.pathname.substring(1)

    if(filename.includes("html")){
        //checa a existencia da pag
        if(fs.existsSync(filename)){
            //faz a leitura fa pagina solicitada
            fs.readFile(filename, function(err, data){
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                return res.end
            })
        //por algum motivo não ta funcionado
        }else {
            //envia uma pagina 404 quando não for encotnrada a pagina
            fs.readFile("404.hmtl", function(err, data){
                res.writeHead(404, {"Content-Type" :  "text/html"})
                res.write(data)
                return res.end()
            })
        }
    }

    
}) 

server.listen(port, () => {
    console.log('servidor na porta: '+port)
})