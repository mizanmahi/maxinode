const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
app.set('view engine', 'ejs')
app.set('views', './views')
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true})); // body parser to parse the req body
app.use(express.static(path.join(__dirname, 'public')))

// filtering routes
app.use('/admin', adminRouter.router);
app.use(shopRouter);

// 404 page handler
app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: ''
    })
})

app.listen(PORT, () => console.log(`App is runnit on port ${PORT}`))

