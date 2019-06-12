const linebot = require('linebot');
let request = require('request');

const getData = require('./libs/getData');

// enable cookie to pass next request
request = request.defaults({
  jar: true,
});
// Loading Config
require('dotenv').config();


const funcList = ['個人課表', '下節課在哪', '曠課/請假紀錄', '成績查詢', '天氣狀態', '公車查詢'];
// Confing Line Bot
const bot = linebot({
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken,
});

// Line Bot added greeting message
bot.on('follow', (event) => {
  event.source.profile()
    .then((profile) => {
      event.reply(`Hello～ ${profile.displayName}\r\n歡迎加入使用 NKUST Bot. 😀`);
    });
});

bot.on('message', (event) => {
  const userText = event.message.text;
  console.log(event.source.userId);

  switch (userText) {
    case funcList[0]:
      getData.getCourse()
        .then((msg) => {
          bot.push(event.source.userId, msg)
            .then((data) => {
              console.log('Then Success', data);
            })
            .catch((error) => {
              console.log('Then Error', error);
            });
        });
      break;
    case funcList[1]:
      break;
    case funcList[2]:
      break;
    case funcList[3]:
      break;
    case funcList[4]:
      break;
    case funcList[5]:
      break;

    default:
  }

  event.reply(event.message.text)
    .then((data) => {
      console.log('Success', data);
    }).catch((error) => {
      console.log('Error', error);
    });
});

bot.listen('/callback', 3000, () => {
  console.log('LineBot is running.');
});
