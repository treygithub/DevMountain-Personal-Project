const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();
require ('dotenv').config();

//Controllers in routes folder / RELATIVE PATH
const orders = require('./routes/api/orders');
const admins = require('./routes/api/admin');
const products = require('./routes/api/product');
const categorys = require('./routes/api/categorys');
const website = require('./routes/api/website');

const session = require('express-session');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(session({
  resave: true,
  saveUninitialized:true,
  secret: process.env.SECRET
}))
app.use(cors())

// Body parser middleware
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( express.static( path.join(__dirname, '/client/build') ) );

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  mongoose.Promise = global.Promise;

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes HTTP req
app.use('/api/admin', admins);
app.use('/api/order', orders);
app.use('/api/product', products);
app.use('/api/category', categorys);
app.use('/api/website', website);

//My Error Message .Catch all
app.use((req,res,next)=>{
  const error = new Error('Sorry, not found !');
  error.status=404;
  next(error);
})
app.use((error, req,res,next) => {
  res.status(error.status || 500);
  res.json({error:{
    message:error.message
  }})
})

// No clue what this is...
app.use('/', express.static)
app.get('*', (req, res)=>{
  path.join(__dirname, '/client/build/index.html')
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));