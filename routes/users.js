const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

// TODO: for testing auth ONLY:
const users = require("../database-test").data; // remove local varibale and link to database

// Login Page:
router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/game/game-screen",
    failureRedirect: "login",
    failureFlash: true
}));

// Register Page:
router.get("/enlist", (req, res) => {
    res.render("enlist");
});

router.post("/enlist", async (req, res) => {
    try {
        // const hashedPassKey = req.body.password;
        const hashedPassKey = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassKey
        });
        res.redirect("login");
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