/*importar o express
definir uma porta pra ele
e criar uma rota */

//import express
const express = require('express')
const path = require('path')

//iniciando o express
const app = express()
const port = 7070//porta 


//acessa a pasta do html
const base_path = path.join(__dirname, 'html')

//* midilleware *
/*const check_auth = function(req, res, next){
    
    req.authStatus = false

    if(req.authStatus){
        console.log('esta logado')
        next()
    }else{
        console.log('não logado')
    }
}app.use(check_auth)*/


//rota home
app.get('/',(req,res) => {
    //res.send('hellow world')

    res.sendFile(base_path+'/index.html')

})

//parametros
/*app.get('/users/:id',(req,res) => {
    const id = req.params.id
    //resgada o user no banco pelo id
    console.log('buscando usuário '+id)

    res.sendFile(base_path+'/index copy.html')
})*/

app.listen(port, () => {
    console.log('app na porta '+port)
})