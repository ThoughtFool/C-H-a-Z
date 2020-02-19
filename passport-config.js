const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Users = require("./server/model/user"); // remove local varibale and link to database


function initialize(passport) {
    passport.use(
        new LocalStrategy({
            usernameField: "email"
        }, (email, password, done) => {
            // Match user
            Users.findOne({
                email: email
            }).then(user => {
                if (!user) {
                    return done(null, false, {
                        message: 'That email is not registered'
                    });
                };

                // Match password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, {
                            message: 'Password incorrect'
                        });
                    }
                });
            });
        })
    );

    passport.serializeUser(function (user, done) {
        if (user.id.match(/^[0-9a-fA-F]{24}$/)) {
        // done(null, user.id);
        done(null, {
            _id: user["id"],
            email: user["email"]
        });
        };
    });

    passport.deserializeUser(function (id, done) {

        // if (id.match(/^[0-9a-fA-F]{24}$/)) {
            // Yes, it's a valid ObjectId, proceed with `findById` call.
            
            Users.findById(id, function (err, user) {
                done(err, user);
            });
        // };
    });
};
module.exports = initialize;