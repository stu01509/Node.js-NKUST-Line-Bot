const linebot = require('linebot');

const getData = require('./libs/getData');

// Loading Config
require('dotenv').config();

// Import MongoDB Connect Modules
const conn = require('./libs/mongodb');

const funcList = ['個人課表', '下節課在哪', '曠課/請假紀錄', '成績查詢', '天氣狀態', '公車查詢'];

// Confing Line Bot
const bot = linebot({
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken,
});

// Connect MongoDB
(async () => {
  await conn.connect();
})();

// Line Bot added greeting message
bot.on('follow', (event) => {
  event.source.profile()
    .then((profile) => {
      event.reply(`Hello～ ${profile.displayName}\r\n歡迎加入使用 NKUST Bot. 😀`);
    });
});

bot.on('message', (event) => {
  const userText = event.message.text;

  switch (userText) {
    case funcList[0]:
      getData.userLogin(event.source.userId)
        .then((msg) => {
          if (msg === '找不到拉') {
            bot.push(event.source.userId, msg)
              .then((data) => {
                console.log('Then Success', data);
              })
              .catch((error) => {
                console.log('Then Error', error);
              });
          } else {
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
          }
        }).catch((err) => {

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
