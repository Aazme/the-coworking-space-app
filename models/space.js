const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String
});

const Space = mongoose.model('Space', spaceSchema);

module.exports = Space;
