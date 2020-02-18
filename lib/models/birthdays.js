const mongoose = require('mongoose');

const birthdaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  starsign: String,
  age: Number,
  notes: String
});

module.exports = mongoose.model('Birthday', birthdaySchema);
