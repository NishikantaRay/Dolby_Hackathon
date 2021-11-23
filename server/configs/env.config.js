const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port : process.env.PORT,

    mongodbUsername : process.env.MONGODB_USERNAME,
    mongodbPassword : process.env.MONGODB_PASSWORD,

    dolbyConsumerKey : process.env.DOLBY_CONSUMER_KEY,
    dolbyConsumerSecret : process.env.DOLBY_CONSUMER_SECRET,
};