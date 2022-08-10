const db = require("../models");
const mongoose = require("mongoose");
const toId = mongoose.Types.ObjectId;


module.exports = feedController = {

    getFeed: async (req, res) => {
        try {
        const { pageNumber } = req.params;
        console.log("req params: ", req.params);
        console.log("the page id: ", pageNumber);
        const totalLimit = 10;
        let limit = parseInt(totalLimit);
        let skip = (parseInt(pageNumber)-1) * parseInt(totalLimit);
        const Posts = await db.Status.find({}).populate('postedBy').limit(limit).skip(skip).sort({ createdAt: -1 }).lean();
        console.log("Posts Length: ", Posts.length)

        res.json({isAuth: true, message: `Posts length: ${Posts.length}`, posts: Posts});
        } catch (error) {
            console.log(error);
            res.status(500).json({isAuth: false, message: "Internal Server Error", error: error});
        }
    },

    createPost: async (req, res) => {
        const { status } = req.body;
        const getUser = await db.User.findOne({ _id: req.session.user.id });
        // const currentUser = req.session.user.id 
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