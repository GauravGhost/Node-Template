const { ServerConfig } = require("../config");
const { errorResponse } = require('../utils/response');

// Send response on errors
const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;

    res.locals.errorMessage = err.message;

    errorResponse.error = message;
    errorResponse.statusCode = statusCode;

    if (ServerConfig.ENV === "development") {
        errorResponse.stack = err.stack
        console.error(err);
    }

    res.status(statusCode).send(errorResponse);
};

module.exports = errorHandler
