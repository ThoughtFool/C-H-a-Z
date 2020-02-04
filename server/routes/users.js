const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const userSchema = require("../model/user");
// const User = mongoose.model("user", userSchema, "user");

// TODO: for testing auth ONLY:
const usersTestDatabase = require("../../database-test").data; // remove local varibale and link to database
// const users = require("../model/user"); // remove local varibale and link to database



// Login Page:
router.get("/login", (req, res) => {
    res.render("users/login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/game/game-screen",
    failureRedirect: "login",
    failureFlash: true
}));

// Register Page:
router.get("/enlist", async (req, res) => {
    res.render("users/enlist");
    let userList = db.users.find({});
    console.log(userList);
});


router.post("/enlist", async (req, res) => {
    try {
        // async function createUser(req) {
            const hashedPassKey = await bcrypt.hash(req.body.password, 10);
            return new userSchema({
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hashedPassKey
            }).save()
            .then(
                res.redirect("login")
            );
        // const hashedPassKey = req.body.password;
        // usersTestDatabase.push({
        //     id: Date.now().toString(),
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: hashedPassKey
        // });
        // let newUser = new User ({
        //     id: Date.now().toString(),
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: hashedPassKey
        // });

        // newUser.save(function (err, newUser) {
        //     if (err) return console.error(err);
        //     alert(newUser.name);
        // });

    } catch (err) {
        res.render("error", {
            message: err.message, 
            error: err
        });
        console.error(err);
        // res.redirect("gamescreen");
    };
});

module.exports = router;