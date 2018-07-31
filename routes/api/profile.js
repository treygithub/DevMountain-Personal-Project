const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//load profile Model
const Profile = require('../../models/Profile');
//load user profile
const User = require('../../models/User');


//@route Get api/users/test
//@desc  Tests users route
//access Public
router.get('/test', (req, res) => res.json({msg:'Profile-page-is-alive'}));


//@route Get api/profile
//@desc  Get current users profile
//access Private
router.get('/',passport.authenticate('jwt', {session: false }), (req,res) => {
    const errors ={};
    Profile.findOne({ user: req.user.id})
    .then(profile => {
        if(!profile){
            errors.noprofile = 'profile does not exist for this user';
            return res.status(404).json(errors);
        }
        res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;