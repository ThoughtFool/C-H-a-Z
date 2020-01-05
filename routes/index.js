const express = require("express");
const router = express.Router();

// Welcome Page:
router.get("/", (req, res) => {
    res.render("index.ejs", { name: "CHaZ" });
});

module.exports = router; 