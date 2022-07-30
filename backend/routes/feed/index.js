const router = require('express').Router();
const feedController = require("../../controllers/feedController");
const authorizedRoute = require("../../middleware/middleware");


router.get("/", authorizedRoute, feedController.getFeed)
router.post("/post", authorizedRoute, feedController.createPost)


module.exports = router;