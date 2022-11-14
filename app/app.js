const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/config');
const router = require('./routes/routers');

const app = express();

mongoose.connect(config.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(config.port);
    console.log(`App Listing With Port ${config.port}`);
}).catch((err) => {
    console.log(err);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);