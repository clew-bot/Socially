const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const routes = require('./routes');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');





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
    // "mongodb://localhost/vuetify-router",
    options,
    (err) => {
     if(err) console.log(err) 
     else console.log("mongdb is connected");
    }
  );
app.listen(port, () => console.log(`Listening on port ${port}`));

