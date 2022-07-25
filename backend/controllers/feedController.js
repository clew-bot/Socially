module.exports = feedController = {

    getFeed: async (req, res) => {
        console.log("yo")
        res.json({"hi": "there"})
    },
    createPost: async (req, res) => {
        const post = await db.Feed.create(req.body);
        res.json(post);
    }
}