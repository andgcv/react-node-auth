const express = require('express');
const mongoose = require('mongoose');
const config = require('../../config.js');

const app = express();
app.use(express.json());

mongoose.connect(config.mongodb, {useNewUrlParser: true});

app.listen(3000, () => { console.log('we in baby') });