const express = require('express');
const cors = require('cors')

const { ServerConfig, Logger } = require('./config');
const { ErrorHandler } = require('./middleware');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

app.use('/api', apiRoutes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
})

app.use(ErrorHandler);


app.listen(ServerConfig.PORT, () => {
    Logger.info(`Server has started in ${ServerConfig.PORT}`, "root", {})
})