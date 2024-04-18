const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController.js');


productRouter.route('/')
    .get(productController.getAllProducts)
    .post(productController.addProduct)
    .put(productController.replaceProduct)
module.exports = productRouter;