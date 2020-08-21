// core modules
const path = require('path');
const productController = require('../controller/product')

// third party modules
const express = require('express');
const router = express.Router();



router.get('/add-product', productController.getAddProductPage)

router.post('/product',  productController.postProductPage)

module.exports = router;