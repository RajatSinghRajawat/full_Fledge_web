const mongoose = require('mongoose')


const ProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserDetailsSignup',
    },

    profilePicture: {
        type: Array,
        default: 'https://example.com/default-profile.png',
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Phone number must be 10 digits'],
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
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

})

const ProfileModel = new mongoose.model('ProfileDetails ' , ProfileSchema)


module.exports = ProfileModel