const app = require('./app')
const { ServerConfig, Logger } = require('./config');



app.listen(ServerConfig.PORT, () => {
    Logger.info(`Server has started in ${ServerConfig.PORT}`, "root", {})
})