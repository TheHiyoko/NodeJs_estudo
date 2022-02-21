const fs = require ("fs")


const arq = "arquivo.txt"
const narq = "NewFile.txt"

fs.rename(arq,narq,function(err){
    if(err){
        console.log(err)
    }

    console.log("O arquivo "+arq+" foi renomeado para"+narq)
})