const fs = require('fs')
const chalk = require('chalk')

global.travaSend = '1'
global.owner = ['5512997675520']
global.packname = 'By'
global.author = 'Bruxo'
global.prefa = ['','/','.','>']
global.sessionName = './lib/qrcode'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})