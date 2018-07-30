const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app = express();

//database login 
const db = require('./config/keys').mongoURI;

//Connection to database
mongoose
    .connect(db)
    .then(() => console.log(`Mongo db Connected`))
    .catch(err => console.log(err));

//Routes
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

app.get('/', (req, res) =>  res.send('Hello! Trey, have a wonderful day!') );

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server running on port ${port}`));