const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { 
        type: String, 
        required: false 
    },
    image: { 
        type: Number, 
        required: true 
    },
    textBody:{
        type:String,
        required:false
    }
});

module.exports = Event = mongoose.model('event', productSchema);