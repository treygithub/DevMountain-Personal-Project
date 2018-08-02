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
    res.status(200).json({mesg: 'get req to products is totally working'})
});

//post
router.post('/', (req, res, next) => {
      const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        categoryId: req.body.categoryId
     })
     product.save()
     .then(result => {
         console.log(result);
     })
     .catch(err => console.log(err));
    res.status(200).json({mesg: 'post req is working, from product page',
    createdProduct: product});
});

//get params :Id
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
  Product.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err})
        });
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