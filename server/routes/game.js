const express = require("express");
const router = express.Router();

function requireLogin(req, res, next) {
    if (req.session.loggedIn) {
        next(); // allow the next route to run
    } else {
        // require the user to log in
        res.redirect("../users/login"); // or render a form, etc.
    }
};

// Automatically apply the `requireLogin` middleware to all
// routes starting with `/admin`
router.all("/*", requireLogin, function (req, res, next) {
    next(); // if the middleware allowed us to get here,
    // just move on to the next route handler
});

// Backstory Intro Page (in game):
router.get("/backstory", (req, res) => {
    res.render("game/backstory");
});

// Mission Control Page (in game):
router.get("/mission-control", (req, res) => {
    res.render("game/mission-control");
});

// Game Screen Page (in game):
router.get("/game-screen", (req, res) => {
    res.render("game/game-screen");
});

// Select game to play (before game):
router.get("/select-game", (req, res) => {
    res.render("game/select-game");
});


module.exports = router;