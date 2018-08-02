const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    catId: Number
});

module.exports = mongoose.model('Category', categorySchema);