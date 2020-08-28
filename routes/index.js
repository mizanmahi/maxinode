const express = require('express');
const router = express.Router()

router.get('/index', (req, res, next) =>{
    res.render('shop/index', {
        pageTitle: 'FoodsHub|Welcome',
        path: '/index'
   })
})

module.exports = router;