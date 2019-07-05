const linebot = require('linebot');

const personalData = require('./crawler/personalData');
const userData = require('./libs/userData');
const profileData = require('./libs/profileData');
const schoolData = require('./crawler/schoolData');
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
    personalData.userCheck(account, passwd)
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
      personalData.userLogin(event.source.userId)
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
      personalData.userLogin(event.source.userId)
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
      personalData.userLogin(event.source.userId)
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
      personalData.userLogin(event.source.userId)
        .then((loginResult) => {
          if (loginResult === '請先登入取得資料') {
            event.reply(messageTemplate.loginMessage);
          } else {
            event.reply(messageTemplate.midWarningSelectMessage);
          }
        });
      break;
    }

    case '校園資訊': {
      event.reply(messageTemplate.schoolInfoSelectMessage);
      break;
    }

    case '校園分機': {
      event.reply(messageTemplate.phoneNumberSelectMessage);
      break;
    }

    case '刪除': {
      userData.userRemove(event.source.userId);
      event.reply(messageTemplate.logoutMessage);
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
      personalData.setSemesterInfo(postback[1], postback[2]);
      personalData.getCourse()
        .then((courseReult) => {
          messageTemplate.setCourseMessage(courseReult)
            .then((courseMessage) => {
              event.reply(courseMessage);
            });
        });
      break;
    }

    case 'score': {
      personalData.setSemesterInfo(postback[1], postback[2]);
      personalData.getScore()
        .then((scoreResult) => {
          messageTemplate.setScoreMessage(scoreResult[0], scoreResult[1])
            .then((scoreMessage) => {
              event.reply(scoreMessage);
            });
        });
      break;
    }

    case 'leave': {
      personalData.setSemesterInfo(postback[1], postback[2]);
      personalData.getLeave()
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
      personalData.setSemesterInfo(postback[1], postback[2]);
      personalData.getMidWarning()
        .then((midWarningResult) => {
          messageTemplate.setMidWarningMessage(midWarningResult)
            .then((midWarningMessage) => {
              event.reply(midWarningMessage);
            });
        });
      break;
    }

    case 'news': {
      schoolData.getNewsInfo()
        .then((newsInfoResult) => {
          messageTemplate.setSchoolInfoMessage(
            newsInfoResult[0],
            newsInfoResult[1],
            newsInfoResult[2],
          )
            .then((newsInfoMessage) => {
              event.reply(newsInfoMessage);
            });
        });
      break;
    }

    case 'activity': {
      schoolData.getActivityInfo()
        .then((activityInfoResult) => {
          messageTemplate.setSchoolInfoMessage(
            activityInfoResult[0],
            activityInfoResult[1],
            activityInfoResult[2],
          )
            .then((activityInfoMessage) => {
              event.reply(activityInfoMessage);
            });
        });
      break;
    }

    case 'administrative': {
      schoolData.getAdministrativeInfo()
        .then((administrativeInfoResult) => {
          messageTemplate.setSchoolInfoMessage(
            administrativeInfoResult[0],
            administrativeInfoResult[1],
            administrativeInfoResult[2],
          )
            .then((administrativeMessage) => {
              event.reply(administrativeMessage);
            });
        });
      break;
    }

    case 'recruit': {
      schoolData.getRecruitInfo()
        .then((recruitInfoResult) => {
          messageTemplate.setSchoolInfoMessage(
            recruitInfoResult[0],
            recruitInfoResult[1],
            recruitInfoResult[2],
          )
            .then((recruitInfoMessage) => {
              event.reply(recruitInfoMessage);
            });
        });
      break;
    }

    case 'jiangong': {
      event.reply(messageTemplate.jiangongPhoneNumber);
      break;
    }

    case 'yanchao': {
      event.reply(messageTemplate.yanchaoPhoneNumber);
      break;
    }

    case 'first': {
      event.reply(messageTemplate.firstPhoneNumber);
      break;
    }

    case 'nanzi': {
      event.reply(messageTemplate.nanziPhoneNumber);
      break;
    }

    case 'cijin': {
      event.reply(messageTemplate.cijinPhoneNumber);
      break;
    }

    default: {
      break;
    }
  }
});

bot.listen('/callback', process.env.PORT || 3000, () => {
  console.log(`LineBot is running in ${process.env.PORT || 3000} PORT.`);
});
