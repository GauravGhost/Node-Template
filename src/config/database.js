const mongoose = require('mongoose')
const { MONGODB_URL } = require('./server-config');

const connect = async() => {
    await mongoose.connect(MONGODB_URL);
}


module.exports = connect;