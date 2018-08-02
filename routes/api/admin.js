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

//@route Get api/users/test
//@desc  Tests users route
//access Public
router.get('/test', (req, res) => res.json({msg:'User-page-is-alive'}));

//@route post api/users/register
//@desc  register users route
//access Public
router.post('/register', (req, res) => {
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
            return res.status(400).json(errors);
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
            errors.email = 'User not found';
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
                errors.password = "password incorrect";
                return res.status(400).json(errors);
            }
        });
    });
});


//@route Get api/users/current
//@desc  Return current user
//@access Public
router.get('/current', 
passport.authenticate('jwt', {session: false}),
 (req, res ) => {
     const id = req.body._id;
     const name = req.body.name;
     const email = req.body.email;

return  res.json({id,name,email});
}
);

module.exports = router;
