const mongoose = require("mongoose");
const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  description: {
    type: String,
    trim: true,
  },
  date: Date,
});

// Todo: look for duplicated
module.exports = mongoose.model("Todo", TodoSchema);
