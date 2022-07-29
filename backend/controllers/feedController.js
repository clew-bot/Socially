module.exports = feedController = {

    getFeed: async (req, res) => {
        console.log("yo")
        res.json({"hi": "there"})
    },

    createPost: async (req, res) => {
        console.log("yo", req.body)
    }
}