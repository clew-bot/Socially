module.exports = authorizedRoute = async (req, res, next) => {
    console.log(req.session);
    if (!req.session.user) {
        res.status(401).json({ message: "User is not logged in", isAuth: false });
    } else {
        console.log("user found: ", req.session.user);
        next();
    }
    //     const user = await db.User.findOne({ _id: req.session.user.id });
    //     if (user) {
    //     req.user = user;
    //     next();
    //     } else {
    //     res.json({ message: "User does not exist" });
    //     }
    // }
    // else {
    //     console.log("no session")
    // }
    }
    