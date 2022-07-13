const router = require('express').Router();
const authController = require("../../controllers/authControllers");


router.post("/", authController.signup)
router.post("/login", authController.login)
router.post("/check", authController.check)



module.exports = router;