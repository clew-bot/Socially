module.exports = authorizedRoute = async (req, res, next) => {
    console.log(req.session);
    if (!req.session.user) {
        res.status(401).json({ message: "User is not logged in", isAuth: false });
    } else {
        console.log("user found: ", req.session.user);
        next();
    }
    }
    