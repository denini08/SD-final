const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  createdBy: {
    name: String,
    id: String,
    email: String
  },
  comments: [
    {
      autor: String,
      comment: String
    }
  ],
  price: {
    type: String
  }
});

mongoose.model("Ad", AdSchema);
module.exports = AdSchema;
