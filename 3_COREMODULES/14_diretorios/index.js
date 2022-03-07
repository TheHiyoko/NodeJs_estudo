const fs = require("fs")


//ve se o diretorio existe ou não
if(!fs.existsSync('./minhapasta')) {
    console.log("não existe")
    //cria um novo diretorio
    fs.mkdirSync("minhapasta")
 //checa se ela existe
}else if (fs.existsSync('./minhapasta')) {
    console.log("existe")
}