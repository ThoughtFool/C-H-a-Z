if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
};

const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

// TODO: for testing auth ONLY:
const users = require("./database-test").data; // remove local varibale and link to database

const initializePassport = require("./passport-config");
initializePassport( //  initialize(passport, getUserByEmail, getUserById)
    passport,
    email => {
        return users.find(user => user.email === email);
    },
    id => users.find(user => user.id === id)
    );

// View Engine (ejs):
app.use(ejsLayouts);
app.set("view engine", "ejs");
app.use(express.urlencoded({
    extended: false
}))

//
app.use(flash());

// keeps secret key in .env
app.use(session({
    // secret: process.env.SESSION_SECRET,
    secret: "zombeehive",
    resave: false,
    saveUninitialized: false
}));

// Passport:
app.use(passport.initialize());
app.use(passport.session());

// Routes:
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/game", require("./routes/game"));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, "public")));

// app.use('/public', express.static('public'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));