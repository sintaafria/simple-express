const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'field nama harus ada'],
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 10000,
        max:  10000000,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        max:  1000,
    },
    status: {
        type: Boolean,
        default: true
    }
})

const Product = mongoose.model('product', productSchema);
module.exports = Product