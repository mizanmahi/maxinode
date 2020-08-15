const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true})); // body parser to parse the req body
app.use(express.static(path.join(__dirname, 'public')))

// filtering routes
app.use('/admin', adminRouter);
app.use(shopRouter);

// 404 page sending
app.use((req, res) => {
    res.status(404).send("<h2>Page Not Found</h2>")
})

app.listen(PORT, () => console.log(`App is runnit on port ${PORT}`))

