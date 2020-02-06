const express = require("express");
const router = express.Router();

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