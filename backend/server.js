const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const routes = require('./routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session) 
const MAX_AGE = 1000 * 60 * 60 * 24 * 7;
const router = require('express').Router();
const requireAuth = require('./middleware/middleware');

app.use(session({
  secret: 'secret',
  name: "session-id",
  expires: MAX_AGE,
  store: MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection: 'sessions'
  }),
  sameSite: false,
  resave: false,
  saveUninitialized: false,
  
}))


app.use(cors());
let options = {
    "useNewUrlParser": true
}
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);




mongoose.connect(
    process.env.MONGO_URI,
    // "mongodb://localhost/socially",
    options,
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
  );
app.listen(port, () => console.log(`Listening on port ${port}`));

