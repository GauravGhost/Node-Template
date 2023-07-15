const mongoose = require('mongoose')
const { ServerConfig } = require('./index');

const connect = async() => {
    await mongoose.connect(ServerConfig.MONGODB_URL);
}


module.exports = connect;