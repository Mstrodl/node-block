const client = require('./src/index.js')

client.getDifficulty().then(s => console.log(s))
client.totalBtc().then(s => console.log(s))
client.getWallet('3D2oetdNuZUqQHPJmcMDDHYoqkyNVsFk9r').then(s => console.log(s))