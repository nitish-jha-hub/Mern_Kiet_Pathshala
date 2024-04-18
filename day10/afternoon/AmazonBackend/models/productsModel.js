const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique : true,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: String,
    Image : [String],
},{timestamps: true});

// const ProductModel = mongoose.model('Product', productSchema);

// const testProduct = new ProductModel({
    //     name: 'Test Product',
    //     price: 100,
    // });
    
    // testProduct.save().then(() => console.log('Product saved in database'));


module.exports = mongoose.model('Product', productSchema);