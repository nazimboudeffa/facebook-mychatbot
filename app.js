'use strict';
const BootBot = require('bootbot');
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')

// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public'))

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index')
})

const config = require('./config.json');
//const config = {"accessToken" : process.env.accessToken,"appSecret" : process.env.appSecret}

const bot = new BootBot({
  accessToken: config.accessToken,
  verifyToken: 'naz',
  appSecret: config.appSecret
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

let botport = 3001;
let port = process.env.PORT || 3000;

bot.start(botport);

app.listen(port, function () {
  console.log('Work app listening on port 3000!')
})
