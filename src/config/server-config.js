const dotenv = require('dotenv');

dotenv.config();


module.exports = {
    PORT: process.env.PORT,
    ENV: process.env.ENV,
    MONGODB_URL: process.env.MONGODB_URL
}