// require("dotenv").config();

if (process.env.NODE_ENV === "production") {
    module.exports = require("./keys_prod").mongoURI;
    console.log('MongoDB in production');
} else {
    module.exports = require("./keys_dev").mongoURI;
    console.log('MongoDB in development');
};
