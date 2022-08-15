const router = require('express').Router();
const authRoutes = require('./auth');
const feedRoutes = require('./feed');
const profileRoutes = require('./profile');


router.use('/auth', authRoutes);
router.use("/feed", feedRoutes);
router.use("/profile", profileRoutes)

module.exports = router;