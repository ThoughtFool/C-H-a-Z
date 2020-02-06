const express = require("express");
const router = express.Router();

// Admin view to display users:
router.get("/show-users", (req, res) => {
    res.render("admin/show-users");
});

// Admin view to edit/delete users:
router.get("/delete-users", (req, res) => {
    res.render("admin/delete-users");
});

module.exports = router;