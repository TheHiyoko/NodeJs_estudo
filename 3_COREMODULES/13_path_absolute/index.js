const path = require('path')

//path absoluto
console.log(path.resolve('test.txt'))

//formar um path
const midFolder = "relatorio"
const fileName = "mathues.txt"

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)
