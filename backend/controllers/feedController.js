const db = require("../models");
module.exports = feedController = {

    getFeed: async (req, res) => {
        console.log("yo")
        res.json({"hi": "there"})
    },

    createPost: async (req, res) => {
        console.log("yo", req.body)
        const { status } = req.body;
        console.log(req.session)
        // const newStatus = await db.Status.create({status: status, username: req.user.username});

        console.log(newStatus);
        res.json(newStatus);

    }
}