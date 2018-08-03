const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
// const cors = require('cors')

//Controllers Routes folder
const admins = require('./routes/api/admin');
const products= require('./routes/api/products');
const categorys= require('./routes/api/categorys');


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());

// Cors Error handler
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');
//   if(req.method === 'OPTIONS'){
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//     return res.status(200).json({});
//   }
// })

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes
app.use('/api/admin', admins);
app.use('/api/product', products);
app.use('/api/category', categorys);

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
