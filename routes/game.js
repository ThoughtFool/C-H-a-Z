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


module.exports = router;