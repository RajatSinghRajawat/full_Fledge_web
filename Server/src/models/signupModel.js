const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true

    },
    firstName: {
        type: String,
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
