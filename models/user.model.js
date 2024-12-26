const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
  },
  height: {
    type: Number,
  },
});

module.exports = mongoose.model("users",userSchema)