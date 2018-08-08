const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {
        type:String
    },
    cart: [{
        product: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Product', required: true 
        },
        quantity: { 
            type: Number, 
            default: 1 
        },
        name: {
            type: String
        },
        price: {
            type:Number
        }
    }]
    
});

module.exports = mongoose.model('Order', orderSchema);