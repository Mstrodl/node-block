const got = require('got')
const Wallet = require('./wallet')

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

// async function getWallet(address) {
//     try {
//         const response = await got(`blockchain.info/rawaddr/${address}`)
//         console.log(response.body)
//         return new Wallet(response.body)
        
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
    getWallet
}
