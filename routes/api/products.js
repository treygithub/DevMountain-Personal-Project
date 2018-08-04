// ALL END POINTS IN THIS FOLDER ARE PREPENDED WITH  /api/products
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const mongoose = require('mongoose');

//Load product model
const Product = require('../../models/product');

//Get
router.get('/',(req,res,next) => {
    Product.find()
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
router.post('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
      const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId
    });
    product
      .save()
      .then(result => {
        console.log([result]);
        res.status(201).json({
          message: "Handling POST requests to /products",
          createdProduct: result
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
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
  Product.findById(id)
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
router.patch("/:productId", passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Product.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        // console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

//Delete
router.delete('/:productId',passport.authenticate('jwt', {session: false}), (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch( err => {
            console.log(err)
            res.status(500).json({
                error: err
            });
        });
    });

module.exports = router;