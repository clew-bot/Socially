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
             const userSession = { id: user._id };
             req.session.user = userSession;
            res.json( {loggedIn : true, id: user._id} );
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
    },

    check: async (req, res) => {
      console.log("reqbody", req.body.id)
      console.log(req.session.user.id);
      let string = req.session.user.id;
      let id = string.toString();
      if (id === req.body.id) {
        console.log("true");
          res.json({
            message: "User is logged in",
            loggedIn: true,
          });
    } else {
      req.session.destroy();
      res.json({
        message: "User is not logged in",
        loggedIn: false,
      });
    }
}
}