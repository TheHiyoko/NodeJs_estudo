/*importar o express
definir uma porta pra ele
e criar uma rota */

//import express
const express = require('express')

//iniciando o express
const app = express()
const port = 7070//porta 

app.get('/',(req,res) => {

    res.send('hellow world')

})

app.listen(port, () => {
    console.log('app na porta'+port)
})