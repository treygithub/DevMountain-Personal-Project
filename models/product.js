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
        type:Number,
        required:true
    },
    productImage: { 
        type: String, 
        required: false
    }
});

module.exports = Product = mongoose.model('Product', productSchema);