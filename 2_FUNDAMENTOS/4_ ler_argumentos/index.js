//argumento nome

//mostra o argv completo
console.log(process.argv)

//pega o argv e mostra só a parte da terceira linha 
const args = process.argv.slice(2)

console.log(args)

//pega o nome colcoado na memoria durante a exexucao
const nome = args[0].split("=")[1]
console.log(nome)

//pega a idade colocada na memoria 
const idade = args[1].split("=")[1]
console.log(idade)

console.log('o nome dele é '+nome+'e ele tem '+idade)