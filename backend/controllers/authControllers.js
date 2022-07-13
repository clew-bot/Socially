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

    check: async (req, res, next) => {
      console.log(req.session)
      if(!req.session.user) {
        res.json({ message: "User is not logged in", loggedIn: false });
      } else {
       
        res.json({ message: "User is logged in", loggedIn: true, id: req.session.user.id })
        } 
      },
    
    logout: async (req, res) => {
      console.log("logout")
      req.session.destroy();
      console.log(req.session)
      res.json({ message: "User has been logged out" });
    }
}
