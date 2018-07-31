const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//post model
const Post = require('../../models/post');

//validation
const validatePostInput = require('../../validation/post');

//@route Get api/users/test
//@desc  Tests users route
//access Public
router.get('/test', (req, res) => res.json({msg:'Post-page-is-alive'}));

//@route Get api/users/test
//@desc  Tests users route
//access Public
router.post('/', passport.authenticate('jwt',{session: false}), (req, res) => {
    const {errors, isValid} = validatePostInput(req.body);

    //check validation
    if(!isValid){
        //if errors, return 400 object
        return res.status(400).json(errors)
    }

    const newPost = new Post ({
        text: req.body.text,
        name: req.body.name,
        avatar:req.body.avatar,
        user:req.user.id
    });
    newPost.save().then(post => res.json(post));
});

module.exports = router;