// ALL END POINTS IN THIS FOLDER ARE PREPENDED WITH  /api/order
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require('passport');

//Loading Models
const Order = require("../../models/order");
const Product = require("../../models/product");

// GET REQ all cart
router.get("/",passport.authenticate('jwt', {session: false}), 
(req, res, next) => {
  // Order.find()
  Order.find({userId: req.sessionID})
  .populate('cart.product')
  .exec((err, cart)=>{
    return res.json(cart)
  })
    // .select("product quantity _id")
    // .exec()
    // .then(docs => {
    //   res.status(200).json({
    //     count: docs.length,
    //     orders: docs.map(doc => {
    //       return {
    //         _id: doc._id,
    //         quantity: doc.cart[0].quantity,
    //         productId: doc.cart[0].product
    //       };
    //     })
    //   });
    // })
    // .catch(err => {
    //   res.status(500).json({
    //     error: err
    //   });
    // });
});

//POST Add to cart
router.post("/:id", (req, res, next) => {

  // console.log('session: ', req.session)
  // console.log('sessionId: ', req.sessionId)
  // console.log('session: ', req.session)
  // let {productId} = cart[0]
  // console.log('LINE 41',Order)
  Order.find({userId: req.sessionID})
    .then( ([order]) => {
      // console.log("Line 42", order)
      // console.log(order[0].cart)

      // let product = order.find(p =>{
      //  console.log(p.cart[0].product, req.params.id) 
      //   return `${p.cart[0].product}` === req.params.id;
      // })
      //  if(product) {
      //     console.log("FOUND PRODUCT", product.cart[0].quantity);
      // }
      if (!order) {
        // console.log('req.sessionID', req.sessionID)
        const order = new Order({
          _id: mongoose.Types.ObjectId(),
          userId: req.sessionID,
          cart: [{quantity: req.body.quantity,
            product: req.params.id}]
        });
        return order.save().then((order)=>{res.json(order)})
      }else{
        // var isInCart = false;
        // loop through order.cart looking req.params.id to match order.cart[i].product
        // if match found, increase quantity, isinCart = true;
        // after complete check isInCart, if false, add to cart.
        // console.log(order.cart[0].quantity)
        // Order.update({_id:req.params.id}, {
        //   quantity: quantity + 1 
        // },  function(err, affected, resp) {
        //   console.log(resp))
        // console.log(order);
        
        //   Order.findByIdAndUpdate({_id: "5b6fa3d4a6174843e4036013"}, {
        //     quantity: 2
        // }, function(err, affected, resp) {
        //    console.log(resp);
        // })

        // order.cart
        Order.findByIdAndUpdate({_id:"5b6fa3d4a6174843e4036013"}, {$set: {quantity: 2}})
        return order.save().then((order)=>{res.json(order)})

      }

      // Website.findByIdAndUpdate({_id:req.params.id}, { $set: { title: req.body.title, body: req.body.body,titleColor:req.body.titleColor,bodyColor:req.body.bodyColor,image:req.body.image, currentSide:req.body.currentSide }}).then(function(){
      //   Website.findOne({_id:req.params.id}).then(function(website){
      //       res.send(website);
      // //   })
      // })
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

//GET PARAMS
router.get("/:orId",
 (req, res, next) => {
  Order.findById(req.params.orId)
    .exec()
    .then(order => {
      if (!order) {
        return res.status(404).json({
          message: "No orders match that Id"
        });
      }
      res.status(200).json({
        order: order
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

//DELETE
router.delete("/:orderId",passport.authenticate('jwt', {session: false}),
 (req, res, next) => {
  Order.remove({ _id: req.params.orderId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Order deleted"
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;