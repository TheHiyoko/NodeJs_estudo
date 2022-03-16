const chalk = require('chalk')
const fs = require('fs')
const inquirer = require('inquirer')
const operation = require('../index')

//create account 
module.exports = {
    create() {
        
            //create
        inquirer.prompt([
            {
                name: 'account_name',
                message: 'Digite o seu nome'
            }
        ]).then(answer => {
            const acconut_name = answer['account_name']

            //faz o informe do nome da conta ao user
            console.info(acconut_name) 

            //return para fazer funcionar (paradgma funcional)
            if(!fs.existsSync('accounts')){
                return fs.mkdirSync('accounts')
            }
            //trata o erro de uma conta já existir, eu acho
            if(fs.existsSync('accounts/'+acconut_name+'.json')){
                throw new Error(chalk.bgRed.white('conta já existe'))
            }

            fs.writeFileSync(
                'accounts/'+acconut_name+'.json',
                '{"balance": 0}',
                function(err){
                    console.log(err)
                }
            )

            console.log(chalk.bgGreen("conta criada"))


        }).catch(err => console.log(err))
        }

    }
        
    //account() {}


