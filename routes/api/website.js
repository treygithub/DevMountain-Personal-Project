const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');

//Load product model
const Website = require('../../models/website.js');

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
  Website.find()
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

router.post("/", upload.single('image'), (req, res, next) => {
  console.log(req.body.data)
  console.log("hit")
  const website = new Website({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    titleColor: req.body.titleColor,
    body: req.body.body,
    bodyColor: req.body.bodyColor,
    image: req.file.path
  });
  website
    .save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

  router.put("/:id", function (req, res, next){
    Website.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
      Website.findOne({_id:req.params.id}).then(function(website){
          res.send(website);
      })
    })
  })

  // Error.findOneAndUpdate({_id: req.params.id},{ $set: { name: req.body }},{new: true},function(err,updatedInfos){
  //       if(err)
  //           return res.send(err);
  //       return res.json(updatedInfos);
  //   });



module.exports = router;