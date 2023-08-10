const express = require('express');
const cors = require('cors')
const {StatusCodes} = require('http-status-codes')

const {ApiError} = require('./utils')

const { ErrorHandler } = require('./middleware');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.use('/api', apiRoutes);

app.use((req, res, next) => {
    next(new ApiError(StatusCodes.NOT_FOUND, "Not found"));
})

app.use(ErrorHandler);

module.exports = app;
