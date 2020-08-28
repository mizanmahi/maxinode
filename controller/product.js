const Product = require('../models/product')

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/add-product', {
        path: '/admin/add-product',
        pageTitle: 'Add Product'
    });
}

exports.postProductPage = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    console.log('aya tha');
    res.redirect('/')
}

exports.getShopPage =  (req, res, next) => {
    
     Product.fetchAll(foods => {
        res.render('shop/shop', {
            pageTitle: 'FoodHub',
            prods: foods,
            path: '/'
        })
    })



}