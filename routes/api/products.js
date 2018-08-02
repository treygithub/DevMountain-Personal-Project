const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

//Get
router.get('/',(req,res,next) => {
    res.status(200).json({mesg: 'get req to products is totally working'})
});

//post
router.post('/', (req, res, next) => {
    res.status(200).json({mesg: 'post req is working, from product page'})
});

//get Id
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:'get request working with params id'
        });
    } else {
        res.status(200).json({mesg:'hey tay'})
    }
});

//Edit
router.put('/:productId', (req, res, next) => {
        res.status(200).json({mesg:'you just updated a product!'})
    })


//Delete
router.delete('/:productId', (req, res, next) => {
        res.status(200).json({mesg:'Deleted a product!'})
    })


module.exports = router;