var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: {
        type: Date,
        required: true
    },
    name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
        // passwordSalt: String
    }
});

var user = mongoose.model('User', UserSchema);
// var user = new mongoose.model('User', UserSchema);

module.exports = user;