const express = require('express');

const { ServerConfig, Logger } = require('./config');
const apiRoutes = require('./routes');
const { ErrorHandler } = require('./middleware');
const cors = require('cors')
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
    console.log(`Server has started in ${ServerConfig.PORT}`);
    Logger.info("successfully started the server", "root", {})
})