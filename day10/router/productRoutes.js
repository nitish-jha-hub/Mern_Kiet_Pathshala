const express = require('express');
const { getAllProducts, AddProduct, replaceProduct, deleteProduct } = require('../controller/productsController.js');

const productRouter = express.Router();

productRouter.route('/')
    .get(getAllProducts)
    .post(AddProduct);


module.exports = productRouter;