'use strict';
const BootBot = require('bootbot');
//const config = require('./config.json');
const config = {"accessToken" : process.env.accessToken,"appSecret" : process.env.appSecret}

const bot = new BootBot({
  accessToken: config.accessToken,
  verifyToken: 'naz',
  appSecret: config.appSecret
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
});

let port = port = process.env.PORT || 3000;

bot.start(port);
