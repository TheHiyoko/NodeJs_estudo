const chalk = require("chalk")

const nota = 5

if(nota >= 7){
    console.log(chalk.bgGreen.black('parabens vc está aprovado'))
}else{
    
console.log(chalk.bgRedBright.black('Vai pra recuperação'))
}