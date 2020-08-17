// core modules
const path = require('path');

// third party modules
const express = require('express');
const router = express.Router();

const addedFood = [];

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'admin.html'))
})

router.post('/product',  (req, res, next) => {
    addedFood.push({title: req.body.title})
    res.redirect('/')

})

exports.router = router;
exports.addedFood = addedFood;