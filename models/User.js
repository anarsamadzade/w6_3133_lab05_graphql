const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: String,
});

module.exports = mongoose.model("User", userSchema);
