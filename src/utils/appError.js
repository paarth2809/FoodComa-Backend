class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError;

// generic error file used to create dedicated error files