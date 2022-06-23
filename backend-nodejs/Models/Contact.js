const mongoose = require("mongoose");

// Create Contacts Collection Schema (using mongoose)

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },

  phone_number: {
    type: String,
    required: true,
    min: 8,
    max: 20,
  },

  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },

  relationship_status: {
    type: String,
    required: true,
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

module.exports = mongoose.model("User", contactSchema);
