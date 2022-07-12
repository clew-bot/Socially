

module.exports = authControllers = {

    login: async (req, res) => {
        console.log("hi");
        const { email, password } = req.body;
        res.json("works");
    },

    signup: async (req, res) => {
        console.log("hi")
        res.json(req.body);
    }
}