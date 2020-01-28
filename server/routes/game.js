const express = require("express");
const router = express.Router();

// Backstory Intro Page (in game):
router.get("/backstory", (req, res) => {
    res.render("backstory");
});

// Mission Control Page (in game):
router.get("/mission-control", (req, res) => {
    res.render("mission-control");
});

// Game Screen Page (in game):
router.get("/game-screen", (req, res) => {
    res.render("game-screen");
});


module.exports = router;