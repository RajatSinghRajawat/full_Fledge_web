const mongoose = require('mongoose');

// Define the schema for categories
const categorySchema = new mongoose.Schema({
  Id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
