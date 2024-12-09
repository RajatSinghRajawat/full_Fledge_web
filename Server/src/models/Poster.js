const mongoose = require('mongoose');

const posterSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: [String], required: true },
});

const posterModel = mongoose.model('Poster', posterSchema);

module.exports = posterModel