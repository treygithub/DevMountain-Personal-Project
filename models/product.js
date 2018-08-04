// const mongoose = require('mongoose');

// const productSchema = mongoose.Schema({
//     _id:mongoose.Schema.Types.ObjectId,
//     name: String,
//     price: Number,
//     description: String,
//     categoryId: Number
    
// });

// module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description:{
        type:String,
        required:false
    },
    categoryId:{
        type:Number
    },
    productImage: { 
        type: String, 
        required: false
    }
});

module.exports = mongoose.model('Product', productSchema);