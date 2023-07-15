const { StatusCodes } = require('http-status-codes')
const { successResponse, errorResponse } = require('../utils/response');
const { ApiError } = require('../utils');
const AsyncHandler = require('../utils/asyncHandler');

/**
 * @param {bool} req.query.error
 */

const info = AsyncHandler((req, res) => {
    if (req.query.error) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Bad Request Info is not defined")
    }
    successResponse.message = "Api is live";
    return res.status(StatusCodes.OK).json(successResponse)
})

module.exports = {
    info
}