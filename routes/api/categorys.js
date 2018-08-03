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
    Category.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        });
    });
});


//post
router.post('/', (req, res, next) => {
      const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        catId: req.body.catId
    });
    category
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Handling POST requests to /category",
          createdCategory: result
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

//get params :Id
router.get('/:CatId', (req, res, next) => {
    const id = req.params.CatId;
    Category.findById(id)
        .exec()
        .then(doc => {
            console.log("From MongoDB", doc);
            if(doc){
                res.status(200).json(doc);
            }else{
                res.status(404).json({ message: 'No matches made!' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(404).json({mesg:'Error, No valid matches could be confirmed!'});
        });
    })

//Edit
router.put('/:catId', (req, res, next) => {
        res.status(200).json({mesg:'you just updated a category!'})
    });

//Delete
router.delete('/:CatId', (req, res, next) => {
    const id = req.params.CatId;
    Category.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({message:'delete request approved', message: result});
        })
        .catch( err => {
            console.log(err)
            res.status(500).json({
                error: err
            });
        });
    });

module.exports = router;