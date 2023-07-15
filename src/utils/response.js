const successResponse = {
    success: true,
    message: "Successfully completed the request",
    data: {},
    error: {}
}

const errorResponse = {
    success: false,
    statusCode: '',
    message: "Something went wrong",
    data: {},
    error: {}
}


module.exports = {
    successResponse,
    errorResponse
};