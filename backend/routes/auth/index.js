const router = require('express').Router();

router.get("/", (req, res) => {
    console.log("hit")
    res.json("Hello World!");
})

module.exports = router;