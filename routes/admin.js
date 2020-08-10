const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.send(`<form action="/product" method="POST">
    <label for="prodName">Add an item</label>
    <input type="text" name="title">
    <button type="submit">Add</button>
    </form>`);
})

router.post('/product',  (req, res, next) => {
    console.log(req.body);
    res.send(req.body)
})

module.exports = router;