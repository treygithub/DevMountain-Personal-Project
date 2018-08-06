// ALL END POINTS IN THIS FOLDER ARE PREPENDED WITH  /api/admin
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

//Load input validation middleWear
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

//Load user model
const Admin = require('../../models/Admin');


// passport.authenticate('jwt', {session: false}),


//@route post api/users/register
//@desc  register users route
//access Public
router.post('/register',  (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    //mongo db
    Admin.findOne({email: req.body.email})
    .then(admin => {
        if(admin){
            errors.email = 'Email already exists';
            return res.status(400).json(errors.email);
        } else {
            const newAdmin = new Admin({
                name:req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            bcrypt.genSalt(10, (err,salt) => {
                bcrypt.hash(newAdmin.password,salt, (err, hash) =>{
                    if(err) throw err;
                    newAdmin.password =hash;
                    newAdmin.save()
                    .then(admin => res.json(admin))
                    .catch(err => console.log(err));
                })
            })
        }
    })
});

//@route Post api/users/login
//@desc  login user / return jwt token
//access Public
router.post('/login',(req,res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    //Find user by email
    Admin.findOne({email})
    .then(admin => {
        //check for user
        if(!admin) {
            errors.email = 'Auth failed';
            return res.status(404).json(errors);
        }
        //check password
        bcrypt.compare(password, admin.password)
        .then(isMatch => {
            if(isMatch) {
                // user matched
                // Creating JWT payload
                const payload = {id: admin.id, name: admin.name}
                
                //sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                });
            }else {
                errors.password = "Auth Failed";
                return res.status(400).json(errors);
            }
        });
    });
});

//@route Delete api/admin/current
//@desc  Delete admin
//@access Private
router.delete('/:adminid',passport.authenticate('jwt', {session: false}),
 (req, res, next ) => {
Admin.remove({_id: req.params.adminid})
.then(result => {
    res.status(200).json({
        message: 'Admin deleted'
    });
})
.catch(err => {
    res.status(500).json({
      error: err
    });
  });
});
// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
    '/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
      });
    }
  );
  
  module.exports = router;