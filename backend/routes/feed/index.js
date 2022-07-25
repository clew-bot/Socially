const router = require('express').Router();
const feedController = require("../../controllers/feedController");
const requireAuth = require("../../middleware/middleware");


router.get("/", feedController.getFeed)
router.post("/", feedController.createPost)


module.exports = router;