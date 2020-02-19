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
const mongoose = require("mongoose");
const morgan = require("morgan");

// TODO: for testing auth ONLY:
// const users = require("./database-test").data; // remove local varibale and link to database
// const Users = require("./server/model/user"); // remove local varibale and link to database
    // require("./passport-config")(passport);
const initializePassport = require("./passport-config");
initializePassport(passport);
    
// View Engine (ejs):
app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");
// app.set("layout", "views");
app.use(ejsLayouts);

app.use(express.urlencoded({
    extended: false
}));

// keeps secret key in .env
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookieName: 'session',
    // duration: 30 * 60 * 1000,
    // activeDuration: 5 * 60 * 1000,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 15
    }
}));
// var sess = {
//   secret: 'keyboard cat',
//   cookie: {}
// }
 
// if (app.get('env') === 'production') {
//   app.set('trust proxy', 1) // trust first proxy
//   sess.cookie.secure = true // serve secure cookies
// }
 
// app.use(session(sess))

// Passport middleware:
app.use(passport.initialize());
app.use(passport.session());

// connect flash:
app.use(flash());

// DB Config
const db = require('./server/config/keys');

// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

    // client.connect(err => {
    //     const collection = client.db("test").collection("devices");
    //     // perform actions on the collection object
    //     client.close();
    // });

// Routes:
app.use(morgan("dev")); // log requests to the console
app.use("/", require("./server/routes/index"));
app.use("/users", require("./server/routes/users"));
app.use("/game", require("./server/routes/game"));
app.use("/admin", require("./server/routes/admin"));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, "public")));

// app.use(express.static('public'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));