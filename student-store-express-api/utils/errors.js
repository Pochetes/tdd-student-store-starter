class ExpressError extends Error {
    constructor(message, status) {
        this.message = message
        this.status = status
    }
}

class BadRequestError extends ExpressError {
    constructor(message, status=400) {
        super(message || "Bad Request", status)
    }
}

class NotFoundError extends ExpressError {
    constructor(message, status=404) {
        super(message || "Not Found", status)
    }
}

module.exports = {
    ExpressError,
    BadRequestError,
    NotFoundError
}
