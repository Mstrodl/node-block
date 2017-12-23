const client = require('./src/index.js')

client.getDifficulty().then(s => console.log(s))
client.totalBtc().then(s => console.log(s))