// core modules
const path = require('path');

// third party modules
const express = require('express');
const router = express.Router();

const addedFood = [];

router.get('/add-product',(req, res, next) => {
    res.render('add-product', {
        path: '/admin/add-product',
        pageTitle: 'Add Product'
    });
})

router.post('/product',  (req, res, next) => {
    addedFood.push({title: req.body.title})
    res.redirect('/')

})

exports.router = router;
exports.addedFood = addedFood;