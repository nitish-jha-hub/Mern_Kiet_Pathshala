const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,    
});

const ProductModel = mongoose.model('Product', productSchema);

const testProduct = new ProductModel({
    name: 'Test Product',
    price: 100,
});

testProduct.save().then(() => console.log('Product saved in database'));