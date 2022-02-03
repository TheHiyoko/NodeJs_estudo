const x = 10

//checar se x é um numero
if(!Number.isInteger(x)){
    throw new Error("o valor não é um numero")
    //ecerrar o programa aqui mesmo
}

console.log("Vida que segue")