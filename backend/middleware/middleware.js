module.exports = const requireAuth = async (req, res, next) => {
    if (req.session.user) {
        const user = await db.User.findOne({ email: req.session.user.email });
        if (user) {
        req.user = user;
        next();
        } else {
        res.json({ message: "User does not exist" });
        }
    } else {
        res.json({ message: "User is not logged in" });
    }
    }
    