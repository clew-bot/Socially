const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusReplySchema = new Schema({
  reply: {
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
  postReplied: {
    type: String,
    required: false,
    ref: "Status",
  },
},{ timestamps: true });


const StatusReply = mongoose.model("StatusReply", statusReplySchema);

module.exports = StatusReply;