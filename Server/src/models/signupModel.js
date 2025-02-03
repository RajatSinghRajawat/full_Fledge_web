const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
    userId: {
        type: String

    },
    firstName: {
        type: String,
    },
    email: {
        type: String,
        // required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        // required: true,
        minlength: 8
    },

    profilePicture: {
        type: Array
    },
    phone: {
        type: String,
        match: [/^\d{10}$/, 'Phone number must be 10 digits'],
        default:null
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        default:null
    },
    dateOfBirth: {
        type: String,
        required: false,
        default:null
    },
    address: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        state: { type: String, trim: true },
        postalCode: { type: String, match: [/^\d{5}$/, 'Invalid postal code'] },
        country: { type: String, trim: true },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
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
