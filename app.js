const express = require('express');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.send("<a href='mizanmahi'>Hello world!</a>");
})

app.listen(PORT, () => console.log(`App is runnit on port ${PORT}`))

