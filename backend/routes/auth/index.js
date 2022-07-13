const router = require('express').Router();
const authController = require("../../controllers/authControllers");
const requireAuth = require("../../middleware/middleware");


router.post("/", authController.signup)
router.post("/login", authController.login)
router.get("/check", authController.check)
router.get("/logout", authController.logout)



module.exports = router;