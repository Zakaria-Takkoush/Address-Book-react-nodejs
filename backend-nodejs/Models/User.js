const mongoose = require("mongoose");

// Create Uses Collection Schema (using mongoose)

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },

  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
});

module.exports = mongoose.model("User", userSchema);
