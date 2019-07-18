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
  const { userId } = event.source;

  let account = '';
  let passwd = '';

  // Check send message type as a txt message
  if (userText !== undefined) {
    [account, passwd] = [userText.split('\n')[0],
      userText.split('\n')[1]];
  }

  // User enter account and password
  if (userData.inCreateModeUser.indexOf(userId) !== -1) {
    personalData.userCheck(account, passwd)
      .then((checkResult) => {
        userData.userCreate(userId, account, passwd)
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

    // Finish login mode remove userId from inCreateModeUser array
    const removeIndex = userData.inCreateModeUser.indexOf(userId);
    userData.inCreateModeUser.splice(removeIndex, 1);
  }

  switch (userText) {
    case '個人課表': {
      personalData.userLogin(userId)
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
      personalData.userLogin(userId)
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
      personalData.userLogin(userId)
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
      personalData.userLogin(userId)
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

    case '其他功能': {
      event.reply(messageTemplate.functionSelectMessage);
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
  const { userId } = event.source;

  switch (postback[0]) {
    case 'login': {
      // Add userId to inCreateModeUser array
      userData.inCreateModeUser.push(userId);
      event.reply(messageTemplate.loginNotifyMessage);
      break;
    }

    case 'logout': {
      userData.userRemove(userId);
      event.reply(messageTemplate.logoutMessage);
      break;
    }

    case 'course': {
      personalData.userLogin(userId)
        .then((loginResult) => {
          personalData.setSemesterInfo(postback[1], postback[2]);
          personalData.getCourse(loginResult[0], loginResult[1])
            .then((courseReult) => {
              if (courseReult.length === 0) {
                event.reply('查無您的選課資料!');
              } else {
                messageTemplate.setCourseMessage(courseReult)
                  .then((courseMessage) => {
                    event.reply(courseMessage);
                  });
              }
            });
        });
      break;
    }

    case 'score': {
      personalData.userLogin(userId)
        .then((loginResult) => {
          personalData.setSemesterInfo(postback[1], postback[2]);
          personalData.getScore(loginResult[0], loginResult[1])
            .then((scoreResult) => {
              if (scoreResult[0].length === 0) {
                event.reply('查無您的成績資料!');
              } else {
                messageTemplate.setScoreMessage(scoreResult[0], scoreResult[1])
                  .then((scoreMessage) => {
                    event.reply(scoreMessage);
                  });
              }
            });
        });
      break;
    }

    case 'leave': {
      personalData.userLogin(userId)
        .then((loginResult) => {
          personalData.setSemesterInfo(postback[1], postback[2]);
          personalData.getLeave(loginResult[0], loginResult[1])
            .then((leaveResult) => {
              if (leaveResult.length === 0) {
                event.reply('您沒有任何缺曠課紀錄');
              } else {
                messageTemplate.setLeaveMessage(leaveResult)
                  .then((leaveMessage) => {
                    event.reply(leaveMessage);
                  });
              }
            });
        })
      break;
    }

    case 'midWarning': {
      personalData.userLogin(userId)
        .then((loginResult) => {
          personalData.setSemesterInfo(postback[1], postback[2]);
          personalData.getMidWarning(loginResult[0], loginResult[1])
            .then((midWarningResult) => {
              messageTemplate.setMidWarningMessage(midWarningResult)
                .then((midWarningMessage) => {
                  event.reply(midWarningMessage);
                });
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

    case 'phoneNumber': {
      event.reply(messageTemplate.phoneNumberSelectMessage);
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
