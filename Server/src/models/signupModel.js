const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
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
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    phoneNumber: {
        type: String,
        required: false,
        match: /^[0-9]{10}$/  // Validates a 10-digit format
    },
    address: {
        street: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        postalCode: {
            type: String,
            required: false
        },
        country: {
            type: String,
            required: false
        }
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
