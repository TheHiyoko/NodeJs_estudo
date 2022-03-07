


const fs = require("fs")

fs.stat('file.txt', (err,stats) => {
	//mostra o erro se ele aparecer
	if(err){
		console.log(err)
		return
	}
	
	//chamada das funcoes do modulo
	console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.size)
})