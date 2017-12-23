module.exports = class Wallet {
    constructor(content) {
        this.tx = content.n_tx
        this.received = content.total_received
    }
}