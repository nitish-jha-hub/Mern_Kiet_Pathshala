const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController.js');


productRouter.route('/')
    .get(productController.getAllProducts);

module.exports = productRouter;