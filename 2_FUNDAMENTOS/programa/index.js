const inquirer = require("inquirer")
const chalk = require("chalk")

inquirer.prompt([{
    name: "nome",
    message: "Qual o seu nome?"
},{
    name: "idade",
    message: "Qual a idade?"
}]).then((answers)=> {
    if (!answers.nome || !answers.idade){
        throw new Error('O nome e idade são obrigatórios')
    }
    console.log(chalk.bgYellowBright.black(JSON.stringify(answers)))
})

