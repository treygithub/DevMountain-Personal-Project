const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { 
        type: String, 
        required: false 
    },
    titleColor: { 
        type: String, 
        required: false
    },
    body: { 
        type: String, 
        required: false
    },
    bodyColor: { 
        type: String, 
        required: false
    },
    image: { 
        type: String, 
        required: false
    },
    currentSide:{
        type:String,
        required: false
    }
});

module.exports = Website = mongoose.model('Website', productSchema);