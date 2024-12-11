const mongoose = require('mongoose');
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
