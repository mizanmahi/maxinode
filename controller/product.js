const Product = require('../models/product')

exports.getAddProductPage = (req, res, next) => {
    res.render('add-product', {
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

exports.getShopPage = (req, res, next) => {
    res.render('shop', {
        pageTitle: 'FoodHub',
        prods: new Product().fetchAll(),
        path: '/'
    })
}
