const mongoose = require('mongoose');
const config = require('../../config.js');

mongoose.connect(config.mongodb, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log('we in baby')
});