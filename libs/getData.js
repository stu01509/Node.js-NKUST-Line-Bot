let request = require('request');
const cheerio = require('cheerio');

const LOGIN_URL = 'https://webap.nkust.edu.tw/nkust/perchk.jsp';
const COURSE_URL = 'https://webap.nkust.edu.tw/nkust/ag_pro/ag222.jsp';

// enable cookie to pass next request
request = request.defaults({ jar: true });

const loginInfo = {
  'uid': '',
  'pwd': '',
};

const courseInfo = {
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
  form: courseInfo,
};

const getCourse = async () => {
  await request(loginOptions, (loginErr, loginRes) => {
    if (loginErr || loginRes.statusCode !== 200) {
      return;
    }
    request(courseOptions, (err, res, body) => {
      if (err || res.statusCode !== 200) {
        return;
      }
      const $ = cheerio.load(body);
      $('body > table td').each((index, title) => {
        console.log($(title).text());
      });
    });
  });
};

getCourse();
