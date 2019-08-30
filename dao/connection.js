const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());
 // Connect to Mongoose and set connection variable
 // Deprecated: mongoose.connect('mongodb://localhost/resthub');
 mongoose.connect('mongodb://localhost/temperature', { useNewUrlParser: true});
 const db = mongoose.connection;

 module.exports = db