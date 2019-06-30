const linebot = require('linebot');

const getData = require('./libs/getData');
const userData = require('./libs/userData');
const profileData = require('./libs/profileData');
const messageTemplate = require('./libs/messageTemplate');
// Loading Config
require('dotenv').config();

// Import MongoDB Connect Modules
const conn = require('./libs/mongodb');

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
      profileData.profileCreate(
        event.source.userId,
        profile.displayName,
        profile.statusMessage,
        profile.pictureUrl,
      );
      event.reply(`Hello～ ${profile.displayName}\r\n歡迎加入使用 NKUST Bot. 😀`);
    });
});

bot.on('message', (event) => {
  const userText = event.message.text;
  let account = '';
  let passwd = '';
  if (userText !== undefined) {
    [account, passwd] = [userText.split('\n')[0],
      userText.split('\n')[1]];
  }

  if (userData.createMode === true) {
    getData.userCheck(account, passwd)
      .then((checkResult) => {
        userData.userCreate(event.source.userId, account, passwd)
          .then((loginMessage) => {
            event.reply([
              `您輸入的學號為: ${account}\n密碼為: ${passwd}`,
              loginMessage]);
          })
          .catch((err) => {
            event.reply([
              `您輸入的學號為: ${account}\n密碼為: ${passwd}`,
              '登入失敗']);
          });
      })
      .catch((err) => {
        event.reply([`您輸入的學號為: ${account}\n密碼為: ${passwd}`,
          '登入失敗或帳號密碼錯誤']);
      });
    userData.createMode = false;
  }

  switch (userText) {
    case '個人課表': {
      getData.userLogin(event.source.userId)
        .then((loingResult) => {
          if (loingResult === '請先登入取得資料') {
            event.reply(messageTemplate.loginMessage);
          } else {
            event.reply(messageTemplate.courseSelectMessage);
          }
        });
      break;
    }

    case '成績查詢': {
      getData.userLogin(event.source.userId)
        .then((loginResult) => {
          if (loginResult === '請先登入取得資料') {
            event.reply(messageTemplate.loginMessage);
          } else {
            event.reply(messageTemplate.scoreSelectMessage);
          }
        });
      break;
    }

    case '曠課/請假紀錄': {
      getData.userLogin(event.source.userId)
        .then((loginResult) => {
          if (loginResult === '請先登入取得資料') {
            event.reply(messageTemplate.loginMessage);
          } else {
            event.reply(messageTemplate.leaveSelectMessage);
          }
        });
      break;
    }

    case '期中預警': {
      getData.userLogin(event.source.userId)
        .then((loginResult) => {
          if (loginResult === '請先登入取得資料') {
            event.reply(messageTemplate.loginMessage);
          } else {
            event.reply(messageTemplate.midWarningSelectMessage);
          }
        });
      break;
    }

    case '刪除': {
      userData.userRemove(event.source.userId);
      break;
    }
    default:
  }
});

bot.on('postback', (event) => {
  // postback[0] 功能選擇
  // postback[1] 學年
  // postback[2] 學期
  const postback = event.postback.data.split('&');

  switch (postback[0]) {
    case 'login': {
      userData.createMode = true;
      event.reply(messageTemplate.loginNotifyMessage);
      break;
    }

    case 'course': {
      getData.setSemesterInfo(postback[1], postback[2]);
      getData.getCourse()
        .then((courseReult) => {
          messageTemplate.setCourseMessage(courseReult)
            .then((courseMessage) => {
              event.reply(courseMessage);
            });
        });
      break;
    }

    case 'score': {
      getData.setSemesterInfo(postback[1], postback[2]);
      getData.getScore()
        .then((scoreResult) => {
          messageTemplate.setScoreMessage(scoreResult[0], scoreResult[1])
            .then((scoreMessage) => {
              event.reply(scoreMessage);
            });
        });
      break;
    }

    case 'leave': {
      getData.setSemesterInfo(postback[1], postback[2]);
      getData.getLeave()
        .then((leaveResult) => {
          if (leaveResult.length === 1) {
            event.reply('您沒有任何缺曠課紀錄');
          } else {
            messageTemplate.setLeaveMessage(leaveResult)
              .then((leaveMessage) => {
                event.reply(leaveMessage);
              });
          }
        });
      break;
    }

    case 'midWarning': {
      getData.setSemesterInfo(postback[1], postback[2]);
      getData.getMidWarning()
        .then((midWarningResult) => {
          messageTemplate.setMidWarningMessage(midWarningResult)
            .then((midWarningMessage) => {
              event.reply(midWarningMessage);
            });
        });
      break;
    }

    default: {
      break;
    }
  }
});

bot.listen('/callback', process.env.PORT || 3000, () => {
  console.log('LineBot is running.');
});
