const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
  
    token: {
        type: String,
        default: null
    }
}, {
    timestamps: true 
});

const UserDetails = mongoose.model("UserDetailsSignup", UserDetailsSchema);

module.exports = UserDetails;
