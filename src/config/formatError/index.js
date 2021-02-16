const NoPermissionError = require("../../errors/NoPermissionError")
const TaksNotFoundError = require("../../errors/TaksNotFoundError")
const UserNotFoundError = require("../../errors/UserNotFoundError")

module.exports = (error) => {
    if(error.originalError instanceof NoPermissionError){
        return new Error(error.message)
    }

    if(error.originalError instanceof TaksNotFoundError){
        return new Error(error.message)
    }

    if(error.originalError instanceof UserNotFoundError){
        return new Error(error.message)
    }
    return error
}