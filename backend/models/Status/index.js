const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const statusSchema = new Schema({
  status: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    ref: "User",
  },
  timeCreated: {
    type: Date,
    default: Date.now,
    },
  replies: {
    type: String,
    required: false,
    
  },
 



},{ timestamps: true });


const Status = mongoose.model("Status", statusSchema);

module.exports = Status;