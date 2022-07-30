const db = require("../models");
const checkSession = require("../middleware/middleware.js");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;
module.exports = feedController = {

    getFeed: async (req, res) => {
        console.log("yo")
        res.json({"hi": "there"})
    },

    createPost: async (req, res) => {
        console.log("yo", req.body)
        const { status } = req.body;
        console.log(status);
        const getUser = await db.User.findOne({ _id: req.session.user.id });
        console.log(getUser);
        const userID = toId(getUser._id);
        console.log("welcome", userID)
        const postedStatus = await db.Status.create({
            status: status,
            username: getUser.username,
            postedBy: userID,
            timeCreated: Date.now(),
        });
        const postId = toId(postedStatus._id);
        const updateUserPost = await db.User.findOneAndUpdate(
            { _id: getUser._id },
            { $push: { posts: postId } }
          );
        console.log("Updated Post on User: ", updateUserPost);
        
    }
}