const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
app.set('view engine', 'pug')
app.set('views', './views')
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true})); // body parser to parse the req body
app.use(express.static(path.join(__dirname, 'public')))

// filtering routes
app.use(adminRouter.router);
app.use(shopRouter);

// 404 page sending
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => console.log(`App is runnit on port ${PORT}`))

