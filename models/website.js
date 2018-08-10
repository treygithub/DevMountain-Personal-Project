const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Tile: { 
        type: String, 
        required: false 
    },
    TitleColor: { 
        type: String, 
        required: false
    },
    Body: { 
        type: String, 
        required: false
    },
    BodyColor: { 
        type: String, 
        required: false
    },
    pageImage: { 
        type: String, 
        required: false
    }
});

module.exports = Website = mongoose.model('Website', productSchema);