const express = require('express');
const router = express.Router()

router.get('/product', (req, res, next) =>{
    res.render('shop/product-detail', {
        pageTitle: 'Product',
        path: '/product'
   })
})

module.exports = router;