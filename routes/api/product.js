const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
const passport = require('passport');


//Load product model
const Product = require('../../models/product');


//Multer DiskStorage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-'));
  }
});

  //Multer Img mime type Filter
const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//Multer middleWear filter size
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});


router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then(docs => {
      res.status(200).json(docs)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post("/", upload.single('productImage'), (req, res, next) => {
 
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    categoryId: req.body.categoryId,
    productImage: req.file.path
  });
  product
    .save()
    .then(result => {
      console.log(result)
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(600).json({
        error: err
      });
    });
});

router.post("/update", upload.single('productImage'), (req, res, next) => {
let id = req.body.params
Product.findById(id, function(err,doc){
  if(err){
    console.log('error found');
  }
  doc.name= req.body.name;
  doc.price= req.body.price;
  doc.description= req.body.description;
  doc.categoryId= req.body.categoryId;
  doc.productImage= req.file.path;
  doc.save()
})
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .select('name price _id productImage')
    .exec()
    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:productId",passport.authenticate('jwt', {session: false}),
 (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product updated'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:productId",passport.authenticate('jwt', {session: false}),
 (req, res, next) => {
  const id = req.params.productId;
  Product.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product deleted'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;