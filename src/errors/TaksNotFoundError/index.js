class TaksNotFoundError  extends Error {
    constructor(message, ...args) {
        super(message, ...args)

        this.message = message
        this.name = 'TaksNotFoundError'
    }
}

module.exports = TaksNotFoundError