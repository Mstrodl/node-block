const got = require('got')

async function getDifficulty() { 
    try {
        const response = await got('blockchain.info/q/getdifficulty')
        return response.body
    } catch(err) {
        return err
    }
}

async function getBlockCount() {
    try {
        const response = await got('blockchain.info/q/getblockcount')
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

async function bcPerBlock() {
    try {
        const response = await got('blockchain.info/q/bcperblock')
        return response.body
    } catch(err) {
        return err
    }
}

async function latestHash() {
    try {
        const response = await got('blockchain.info/q/latesthash')
        return response.body
    } catch(err) {
        return err
    }
}


// WIP
// Seems to be broken to wallet reading -- will fix later

// async function getWalletBalance(address) {
//     try {
//         const response = await got(`blockchain.info/balance?active=${address}`)
//         return response.body.address.final_balance
//     } catch(err) {
//         return err
//     }
// }


module.exports = {
    getDifficulty,
    getBlockCount,
    totalBtc,
    bcPerBlock,
    latestHash,
    getWalletBalance
}
