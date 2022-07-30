const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const routes = require('./routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session) 
const checkSession = require('./middleware/middleware.js');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const cookieParser = require('cookie-parser');
const MAX_AGE = 1000 * 60 * 60 * 24 * 7;


// app.use(checkSession);

app.use(cookieParser());
app.use(session({
  secret: 'secret',
  name: "session-id",
  store: MongoDBStore({
    uri: process.env.MONGODB_URI,
    collection: 'sessions'
  }),
  sameSite: false,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: MAX_AGE
  }
  
}))


app.use(cors());
let options = {
    "useNewUrlParser": true
}
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);


io.on('connection', (socket) => {
  console.log('a user connected');
});


mongoose.connect(
    // process.env.MONGO_URI,
    "mongodb://localhost/socially",
    options,
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
  );
app.listen(port, () => console.log(`Listening on port ${port}`));

