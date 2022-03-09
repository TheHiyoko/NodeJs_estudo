const chalk = require('chalk')
const fs = require('fs')
const inquirer = require('inquirer')
const operation = require('../index')

//create account 
    function create() {
        
        //create
        inquirer.prompt([
            {
                name: 'account_name',
                message: 'Digite o seu nome'
            }
        ]).then(answer => {
            const acconut_name = answer['account_name']

            console.info(acconut_name) 

            if(!fs.existsSync('accounts')){
                fs.mkdirSync('accounts')
            }
            if(fs.existsSync('accounts/'+acconut_name+'.json')){
                console.log(chalk.bgRed.black('conta já existe'))
                create()
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

    //account() {}
export default create()

