//This cheat sheet contains all the requried topics to know to master node js
//We will focus on how node JS differs from vanilla JS

console.log("hello World")
/* console.log(global); */

const os = require('os')
const path = require('path')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))
