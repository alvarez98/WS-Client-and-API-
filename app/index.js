const WebSocket = require('ws')
const url = 'ws:192.168.1.77:9999'
const connection = new WebSocket(url)
const cookieParser = require('cookie-parser');
const express = require('express')
const app = express()
const createError = require('http-errors');
const path = require('path');
const { PORT } = require('./config')
const TemperatureRouter = require('../temperature/routes');
const format = require('./functions/format')
// const db = require('../dao/connection')

// if(!db)
//     console.log("Error connecting db")
// else
//     console.log("Db connected successfully")

let temperature = 0

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(temperature)
});
app.use('/temperature', TemperatureRouter);
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



connection.onopen = () => {
  connection.send('Message From Client') 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  temperature = format(e.data)
  console.log(temperature)
}

module.exports = {
  app,
  connection
}