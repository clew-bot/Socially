const router = require('express').Router();

router.post("/", (req, res) => {
    console.log("hit")
    res.json("Hello World!");
    console.log(req.body)
})

module.exports = router;