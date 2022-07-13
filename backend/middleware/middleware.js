module.exports = requireAuth = async (req, res, next) => {
    console.log("hit")
    if (req.session.user) {
        const user = await db.User.findOne({ _id: req.session.user.id });
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
    