const express = require('express');
const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true}));

app.use(adminRouter);

app.use(shopRouter);

app.listen(PORT, () => console.log(`App is runnit on port ${PORT}`))

