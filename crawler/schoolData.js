const request = require('request');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.nkust.edu.tw/p/';
const ADMINISTRATIVE_URL = `${BASE_URL}422-1000-1000.php`;
const NEWS_URL = `${BASE_URL}422-1000-1001.php`;
const ACADEMIC_URL = `${BASE_URL}422-1000-1002.php`;
const ACTIVITY_URL = `${BASE_URL}422-1000-1003.php`;
const RECRUIT_URL = `${BASE_URL}422-1000-1006.php`;

const administrativeOptions = {
  url: ADMINISTRATIVE_URL,
  method: 'GET',
};

const newsOptions = {
  url: NEWS_URL,
  method: 'GET',
};

const academicOptions = {
  url: ACADEMIC_URL,
  method: 'GET',
};

const activityOptions = {
  url: ACTIVITY_URL,
  method: 'GET',
};

const recruitOptions = {
  url: RECRUIT_URL,
  method: 'GET',
};

const getAdministrativeInfo = () => new Promise((resolve, reject) => {
  request(administrativeOptions, (err, res, body) => {
    if (err || res.statusCode !== 200) {
      reject();
    } else {
      const $ = cheerio.load(body);
      const result = [];
      $('#pageptlist > div > div > div > div > h5').each((index, item) => {
        // 只選取前10筆資料
        if (index < 10) {
          const $$ = cheerio.load(item);
          // 日期
          result.push($$('i').text());
          // 標題
          result.push($$('a').text());
          // 連結
          result.push($$('a').attr('href'));
        }
      });
      resolve(result);
    }
  });
});

const getNewsInfo = () => new Promise((resolve, reject) => {
  request(newsOptions, (err, res, body) => {
    if (err || res.statusCode !== 200) {
      reject();
    } else {
      const $ = cheerio.load(body);
      const result = [];
      $('#pageptlist > div > div > div > div > h5').each((index, item) => {
        if (index < 10) {
          const $$ = cheerio.load(item);
          // 日期
          result.push($$('i').text());
          // 標題
          result.push($$('a').text());
          // 連結
          result.push($$('a').attr('href'));
        }
      });
      resolve(result);
    }
  });
});

const getAcademicInfo = () => new Promise((resolve, reject) => {
  request(academicOptions, (err, res, body) => {
    if (err || res.statusCode !== 200) {
      reject();
    } else {
      const $ = cheerio.load(body);
      const result = [];
      $('#pageptlist > div > div > div > div > h5').each((index, item) => {
        if (index < 10) {
          const $$ = cheerio.load(item);
          // 日期
          result.push($$('i').text());
          // 標題
          result.push($$('a').text());
          // 連結
          result.push($$('a').attr('href'));
        }
      });
      resolve(result);
    }
  });
});

const getActivityInfo = () => new Promise((resolve, reject) => {
  request(activityOptions, (err, res, body) => {
    if (err || res.statusCode !== 200) {
      reject();
    } else {
      const $ = cheerio.load(body);
      const result = [];
      $('#pageptlist > div > div > div > div > h5').each((index, item) => {
        if (index < 10) {
          const $$ = cheerio.load(item);
          // 日期
          result.push($$('i').text());
          // 標題
          result.push($$('a').text());
          // 連結
          result.push($$('a').attr('href'));
        }
      });
      resolve(result);
    }
  });
});

const getRecruitInfo = () => new Promise((resolve, reject) => {
  request(recruitOptions, (err, res, body) => {
    if (err || res.statusCode !== 200) {
      reject();
    } else {
      const $ = cheerio.load(body);
      const result = [];
      $('#pageptlist > div > div > div > div > h5').each((index, item) => {
        if (index < 10) {
          const $$ = cheerio.load(item);
          // 日期
          result.push($$('i').text());
          // 標題
          result.push($$('a').text());
          // 連結
          result.push($$('a').attr('href'));
        }
      });
      resolve(result);
    }
  });
});

module.exports.getAdministrativeInfo = getAdministrativeInfo;
module.exports.getNewsInfo = getNewsInfo;
module.exports.getAcademicInfo = getAcademicInfo;
module.exports.getActivityInfo = getActivityInfo;
module.exports.getRecruitInfo = getRecruitInfo;
