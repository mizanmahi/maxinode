// core modules

// third party modules
const express = require('express');
const router = express.Router();

// custom modules
const productController = require('../controller/product')

router.get('/', productController.getShopPage)

module.exports = router;