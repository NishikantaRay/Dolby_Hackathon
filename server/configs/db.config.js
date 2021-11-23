const { mongodbUsername, mongodbPassword } = require("./env.config");

const config = {
    uri : `mongodb+srv://${mongodbUsername}:${mongodbPassword}@room.48mli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
};

module.exports = config;