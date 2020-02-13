const express = require("express");
const router = express.Router();
const userSchema = require("../model/user");

function requireLogin(req, res, next) {
    if (req.session.loggedIn) {
        next(); // allow the next route to run
    } else {
        // require the user to log in
        res.redirect("../users/login"); // or render a form, etc.
    };
};

// Automatically apply the `requireLogin` middleware to all
// routes starting with `/admin`
router.all("/*", requireLogin, function (req, res, next) {
    next(); // if the middleware allowed us to get here,
    // just move on to the next route handler
});

// Admin view to display users:
router.get("/show-users", async (req, res) => {
    let userList = await userSchema.find({});
        try {
        // .then(() => {
            res.render("admin/show-users", {
                userList: userList
            });
            // res.send(userList);
        // })
        // .then(() => console.log("show-users"));

        
    } catch (error) {
        console.log("no show-users");
    }

    router.get("/enlist",  (req, res) => {
    console.log(userList);
});
});

// Admin view to edit/delete users:
router.get("/delete-users", (req, res) => {
    res.render("admin/delete-users");
});

module.exports = router;