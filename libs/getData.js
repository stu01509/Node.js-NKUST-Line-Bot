let request = require('request');
const cheerio = require('cheerio');

const BASE_URL = 'https://webap.nkust.edu.tw/nkust/';
const LOGIN_URL = `${BASE_URL}perchk.jsp`;
const COURSE_URL = `${BASE_URL}ag_pro/ag222.jsp`;
const LEAVE_URL = `${BASE_URL}ak_pro/ak002_01.jsp`;
const SCORE_URL = `${BASE_URL}ag_pro/ag008.jsp`;
const MIDWARNING_URL = `${BASE_URL}ag_pro/ag009.jsp`;

const UserSchema = require('../schema/user/User');

const loginInfo = {
  uid: '',
  pwd: '',
};

const semesterInfo = {
  arg01: '',
  arg02: '',
};

const setSemesterInfo = (arg01, arg02) => {
  semesterInfo.arg01 = arg01;
  semesterInfo.arg02 = arg02;
};

const loginOptions = {
  url: LOGIN_URL,
  method: 'POST',
  form: loginInfo,
};

const courseOptions = {
  url: COURSE_URL,
  method: 'POST',
  form: semesterInfo,
};

const scoreOptions = {
  url: SCORE_URL,
  method: 'POST',
  form: semesterInfo,
};

const leaveOptions = {
  url: LEAVE_URL,
  method: 'POST',
  form: semesterInfo,
};

const midWarningOptions = {
  url: MIDWARNING_URL,
  method: 'POST',
  form: semesterInfo,
};

const userCheck = (uid, pwd) => new Promise((resolve, reject) => {
  loginInfo.uid = uid;
  loginInfo.pwd = pwd;

  request(loginOptions, (loginErr, loginRes, loginBody) => {
    if (loginErr || loginRes.statusCode !== 200) {
      reject();
      return;
    }
    if (loginBody.match('無此帳號或密碼不正確')) {
      reject();
    } else {
      resolve();
    }
  });
});

const userLogin = userId => new Promise((resolve, reject) => {
  UserSchema.findOne({
    userId,
  }).exec((err, result) => {
    if (err) {
      console.log(err);
      reject();
    } else if (result === null) {
      resolve('請先登入取得資料');
    } else {
      loginInfo.uid = result.uid;
      loginInfo.pwd = result.pwd;
      resolve();
    }
  });
});

const getCourse = () => new Promise((resolve, reject) => {
  const courseCookie = request.jar();
  request = request.defaults({ jar: courseCookie });

  request(loginOptions, (loginErr, loginRes) => {
    if (loginErr || loginRes.statusCode !== 200) {
      reject();
      return;
    }
    request(courseOptions, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        reject();
        return;
      }
      const $ = cheerio.load(body);
      const result = [];
      $('body > table td').each((index, title) => {
        // 跳過上方標題欄位
        if (index > 15) {
          if ($(title).text().trim().length === 0) {
            result.push('無');
          } else {
            result.push($(title).text());
          }
        }
      });
      resolve(result);
    });
  });
});

const getScore = () => new Promise((resolve, reject) => {
  const scoreCookie = request.jar();
  request = request.defaults({ jar: scoreCookie });

  request(loginOptions, (loginErr, loginRes) => {
    if (loginErr || loginRes.statusCode !== 200) {
      reject();
      return;
    }
    request(scoreOptions, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        reject();
        return;
      }
      const $ = cheerio.load(body);
      const result = [];
      // 操行成績 班排
      let rank = '';
      $('body > form > table > caption > div').each((index, title) => {
        // rank[0] 操行成績 總平均
        rank = $(title).text().split('班名次/班人數：');
        // rank[1] 班排 班排比
        rank[1] = `班名次/班人數：${rank[1]}`;
      });

      $('body > form > table > tbody > tr > td').each((index, title) => {
        // 跳過標題名稱
        if (index > 8) {
          // 科目欄位
          if (index % 9 === 1) {
            result.push($(title).text());
          }
          // 學分數
          if (index % 9 === 2) {
            result.push($(title).text());
          }
          // 期中分數
          if (index % 9 === 6 && $(title).text().trim().length === 0) {
            result.push('無');
          } else if (index % 9 === 6) {
            result.push($(title).text());
          }
          // 期末分數
          if (index % 9 === 7 && $(title).text().trim().length === 0) {
            result.push('無');
          } else if (index % 9 === 7) {
            result.push($(title).text());
          }
        }
      });
      resolve([result, rank]);
    });
  });
});

const getLeave = () => new Promise((resolve, reject) => {
  const leaveCookie = request.jar();
  request = request.defaults({ jar: leaveCookie });

  request(loginOptions, (loginErr, loginRes) => {
    if (loginErr || loginRes.statusCode !== 200) {
      reject();
      return;
    }
    request(leaveOptions, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        reject();
        return;
      }
      const $ = cheerio.load(body);
      const result = [];
      $('body > table.LoginTable td').each((index, title) => {
        // 跳過標題名稱
        if (index > 18 && $(title).text().trim().length === 0) {
          result.push(' ');
        } else if (index > 18) {
          result.push($(title).text());
        }
      });
      // 如果沒有 缺曠請假資料 自動補上結果
      if (result.length === 0) {
        result.push('查無缺曠請假資料！');
      }
      resolve(result);
    });
  });
});

const getMidWarning = () => new Promise((resolve, reject) => {
  const midWarningCookie = request.jar();
  request = request.defaults({ jar: midWarningCookie });

  request(loginOptions, (loginErr, loginRes) => {
    if (loginErr || loginRes.statusCode !== 200) {
      reject();
      return;
    }
    request(midWarningOptions, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        reject();
        return;
      }
      const $ = cheerio.load(body);
      const result = [];
      $('body > form > table:nth-child(1) > tbody > tr > td').each((index, title) => {
        // 跳過標題名稱
        if (index > 7 && $(title).text().trim().length === 0) {
          result.push('無');
        } else if (index > 7) {
          result.push($(title).text());
        }
      });
      resolve(result);
    });
  });
});

module.exports.setSemesterInfo = setSemesterInfo;
module.exports.getCourse = getCourse;
module.exports.getScore = getScore;
module.exports.getLeave = getLeave;
module.exports.getMidWarning = getMidWarning;
module.exports.userLogin = userLogin;
module.exports.userCheck = userCheck;
