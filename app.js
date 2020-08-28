const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const productRouter = require('./routes/product')
const indexRouter = require('./routes/index')

const errorController = require('./controller/error')

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true})); // body parser to parse the req body
app.use(express.static(path.join(__dirname, 'public'))) // static file serving

app.use('/admin', adminRouter); // filtering routes
app.use(shopRouter);

app.use(productRouter)

// 404 page handler
app.use(errorController.getErrorPage)

app.listen(PORT, () => console.log(`App is runnit on port ${PORT}`))

