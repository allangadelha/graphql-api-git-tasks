const UserRegisterService = require("../../services/UserRegisterService")

class UserNotFoundError extends Error{
    constructor(message, ...args) {
        super(message, ...args)

        this.message = message
        this.nome = 'UserNotFoundError'
    }
}

module.exports = UserNotFoundError