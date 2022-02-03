const inquirer = require("inquirer")

inquirer.prompt([{
    name: 'p1', 
    message: 'qual a sua nota?'
},{
    name: 'p2',
    message: 'qual a nota agora?'
}]).then((answers)=> {
    console.log(answers)
    const medeia = ((parseInt(answers.p1) + parseInt(answers.p2))/2)

    console.log("a média é "+medeia)
}).catch(err => console.log(err))