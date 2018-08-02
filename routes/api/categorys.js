const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');


//Load product model
const Category = require('../../models/category');

//Get
router.get('/',(req,res,next) => {
    res.status(200).json({mesg: 'get req to category is totally working'})
});

//post
router.post('/', (req, res, next) => {
    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        catId: req.body.catId
     })
     category.save()
     .then(result => {
         console.log(result);
     })
     .catch(err => console.log(err));
    res.status(200).json({mesg: 'post req is working, from category page',
    createdCategory: category});
});


//get params :Id
router.get('/:catId', (req, res, next) => {
    const id = req.params.catId;
    if(id === 'special'){
        res.status(200).json({
            message:'get request working with params catId'
        });
    } else {
        res.status(200).json({mesg:'hey tay'})
    }
});

//Edit
router.put('/:catId', (req, res, next) => {
        res.status(200).json({mesg:'you just updated a category!'})
    })


//Delete
router.delete('/:catId', (req, res, next) => {
        res.status(200).json({mesg:'Deleted a category!'})
    })

    module.exports = router;