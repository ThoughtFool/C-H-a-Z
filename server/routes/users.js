const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const userSchema = require("../model/user");
var mongoose = require('mongoose');

// const User = mongoose.model("user", userSchema, "user");

// TODO: for testing auth ONLY:
const usersTestDatabase = require("../../database-test").data; // remove local varibale and link to database
// const users = require("../model/user"); // remove local varibale and link to database

// Login Page:
router.get("/login", (req, res) => {
    res.render("users/login");
});

router.post("/login", passport.authenticate("local", {
        successRedirect: "../game/game-screen",
        failureRedirect: "login",
        failureFlash: true
    }),
    async function (req, res) {
        req.flash('success_message', 'You are now Logged in!!');
        // res.redirect('/');
        res.redirect("../game/game-screen");


        await userSchema.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (user) {
            if (!user) {
                res.redirect('login');
            } else {
                bcrypt.compare(req.body.password, user.password, function (err, result) {
                    if (result == true) {
                        res.redirect('game-screen');
                    } else {
                        res.send('Incorrect password');
                        res.redirect('login');
                    }
                });
            }
        });
    });

router.get("/user", async function (req, res) {
    res.render("users/login");
});

//login page: storing and comparing email and password,and redirecting to home page after login
router.post('/user', async function (req, res) {
    await userSchema.findOne({
        where: {
            email: req.body.email
        }
    }).then(function (user) {
        if (!user) {
            res.redirect('login');
        } else {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (result == true) {
                    res.redirect('game-screen');
                } else {
                    res.send('Incorrect password');
                    res.redirect('login');
                }
            });
        }
    });
});

// Register Page:
router.get("/enlist", async (req, res) => {
    res.render("users/enlist");
    // let userList = db.users.find({});
    // console.log(userList);
});


router.post("/enlist", async (req, res) => {
    try {
        // async function createUser(req) {
        const hashedPassKey = await bcrypt.hash(req.body.password, 10);
        return new userSchema({
                creationDate: Date.now().toString(),
                // id: mongoose.Types.ObjectId(),
                name: req.body.name,
                email: req.body.email,
                password: hashedPassKey
            }).save()
            .then(
                res.redirect("login")
            );

    } catch (err) {
        res.render("error", {
            message: err.message,
            error: err
        });
        console.error(err);

    };
});

module.exports = router;