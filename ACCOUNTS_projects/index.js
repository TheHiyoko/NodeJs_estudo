//external modules
const inquirer = require("inquirer")
const chalk = require("chalk")

//internal modules
const fs = require("fs")

const create_account = require('./account_process/create_account')
const create = create_account.create
//const account = create_account.account

// inicial function
//chamada inicial do programa
operation()

function operation() {
    //cria uma lista de escolhas possiveis
    inquirer.prompt([
        {
        type: 'list',
        name: 'action',
        message: 'O que voce deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair'
            ]
        }
    ])
    //durante a execução pega um possivel erro
    .then((answer) => {
        //pega resposta e transforma numa variavel 
        const action = answer['action']

            if(action == 'Criar conta') {
                console.log(chalk.bgGreen.black('Parabens por criar sua conta'))
                console.log(chalk.green('Qual vai ser seu proximo passo?'))
                create()
            }
            else if(action == 'Consultar saldo') {

            }
            else if(action == 'Depositar') {

            }
            else if(action == 'Sacar') {

            }  
            else if(action == 'Sair') {
                console.log(chalk.bgBlue.black("Adeus e obrigado por usar"))
                process.exit()

            }
            //messagem de codiog quebrado
            else {
                console.log('Nao foi')
            }
    })
    .catch((err) => console.log(err))
}



