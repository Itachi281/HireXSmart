/**
 * 
 * @author: Rishabh Vashisth
 * @description: This is Api Error class use to show error for api 
 * 
 */
class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null // check krna h this.data field me hota kya h
        this.message = message
        this.success = false;
        this.errors = errors

        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }