const router = require('express').Router();
const authRoutes = require('./auth');
const feedRoutes = require('./feed');

router.use('/auth', authRoutes);
router.use("/feed", feedRoutes)

module.exports = router;