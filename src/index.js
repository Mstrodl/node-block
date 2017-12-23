const got = require('got')

async function getDifficulty() { 
    try {
        const response = await got('blockchain.info/q/getdifficulty')
        return response.body
    } catch(err) {
        return err
    }
}

async function totalBtc() {
    try {
        const response = await got('blockchain.info/q/totalbc')
        return response.body
    } catch(err) {
        return err
    }
}

module.exports = {
    getDifficulty,
    totalBtc
}
