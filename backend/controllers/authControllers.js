const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
module.exports = authControllers = {

    login: async (req, res) => {
        const findUser = await db.User.findOne({ email: req.body.email });

        if (findUser) {
          const pass = findUser.password;
          const passwordMatch = await bcrypt.compare(req.body.password, pass);
          console.log(passwordMatch);
          if (passwordMatch) {
            console.log("Match");
            const user = await db.User.findOne({ email: req.body.email });
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": user.username,
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '10s' }
            );
            const refreshToken = jwt.sign(
                { "username": user.username },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d' }
            );
                  // Saving refreshToken with current user
        user.refreshToken = refreshToken;
        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ message: "Yay", accessToken });
          } else {
            res.json({ message: "Password is incorrect", loggedIn: false });
          }
        } else {
          res.json({ message: "User does not exist", loggedIn: false });
        }
    },

    signup: async (req, res) => {
        const findUser = await db.User.findOne({ email: req.body.email });
        if (findUser) {
          res.json({ message: "User already exists" });
        } else {
          const user = await db.User.create({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            birthday: req.body.birthday,
            sQuestion: req.body.sQuestion,
            sAnswer: req.body.sAnswer,
            gender: req.body.gender
          });
            const userSession = { email: user.email };
            req.session.user = userSession;
            res.json({
              message: "User has been created",
              userSession
            });
        }
    }
}