const db = require("../models");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;


module.exports = feedController = {
    getFeed: async (req, res) => {
        const { pageId } = req.params;
        console.log("the page id: ", pageId);
        const totalLimit = 10;
        let limit = parseInt(totalLimit);
        let skip = (parseInt(pageId)-1) * parseInt(totalLimit);
        const Posts = await db.Status.find({}).populate('postedBy').limit(limit).skip(skip).sort({ createdAt: -1 }).lean();
        res.json({isAuth: true, posts: Posts});
    },

    createPost: async (req, res) => {
        const { status } = req.body;
        const getUser = await db.User.findOne({ _id: req.session.user.id });
        const userID = toId(getUser._id);
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
        res.json({isAuth: true, message: "Post created successfully"});
    }
}