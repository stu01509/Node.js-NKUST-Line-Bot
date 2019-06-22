let request = require('request');
const cheerio = require('cheerio');

const BASE_URL = 'https://webap.nkust.edu.tw/nkust/';
const LOGIN_URL = `${BASE_URL}perchk.jsp`;
const COURSE_URL = `${BASE_URL}ag_pro/ag222.jsp`;
const LEAVE_URL = `${BASE_URL}ak_pro/ak002_01.jsp`;
const SCORE_URL = `${BASE_URL}ag_pro/ag008.jsp`;

const UserSchema = require('../schema/user/User');

// enable cookie to pass next request
request = request.defaults({
  jar: true,
});

const loginInfo = {
  'uid': '',
  'pwd': '',
};

const semesterInfo = {
  // yms not necessary
  'yms': '107,2',
  'arg01': '107',
  'arg02': '2',
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

const leaveOptions = {
  url: LEAVE_URL,
  method: 'POST',
  form: semesterInfo,
};

const scoreOptions = {
  url: SCORE_URL,
  method: 'POST',
  form: semesterInfo,
};

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

const getLeave = () => new Promise((resolve, reject) => {
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
      let result = '';
      $('body > table.LoginTable td').each((index, title) => {
        console.log($(title).text());
      });
      resolve(result);
    });
  });
});

const getScore = () => new Promise((resolve, reject) => {
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
      let result = '';
      $('body > form > table > tbody > tr > td').each((index, title) => {
        if (index > 8) {
          if (index % 9 === 1) {
            console.log($(title).text());
          }
        }
      });
      resolve(result);
    });
  });
});


module.exports.getCourse = getCourse;
module.exports.getLeave = getLeave;
module.exports.getScore = getScore;
module.exports.userLogin = userLogin;
