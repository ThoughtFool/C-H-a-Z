require("dotenv");
module.exports = {
    mongoURI: "mongodb://localhost:27017/chaz_db",
    // mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY
};