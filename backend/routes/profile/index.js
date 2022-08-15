const router = require('express').Router();
const profileController = require("../../controllers/profileControllers");
const authorizedRoute = require("../../middleware/middleware");


router.get("/:profileId", authorizedRoute, profileController.getProfile);



module.exports = router;