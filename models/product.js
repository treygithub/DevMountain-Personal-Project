const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { 
        type: String, 
        required: false 
    },
    price: { 
        type: Number, 
        required: false 
    },
    description:{
        type:String,
        required:false
    },
    categoryId:{
        type:String,
        required:false
    },
    productImage: { 
        type: String, 
        required: false
    },
    activeFont:{
        type:String,
        required:false
    }
});

module.exports = Product = mongoose.model('Product', productSchema);