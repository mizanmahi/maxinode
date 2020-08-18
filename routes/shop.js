// core modules
const path = require('path');

// third party modules
const express = require('express');
const router = express.Router();

// custom modules
const adminRouter = require('./admin')

router.get('/',(req, res, next) => {
    res.render('shop', {
        pageTitle: 'FoodHub',
        prods: adminRouter.addedFood,
        path: '/'
    })
    console.log(adminRouter.addedFood);
})

module.exports = router;