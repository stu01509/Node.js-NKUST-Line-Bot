const cryptoJS = require('crypto-js');
const UserSchema = require('../schema/user/User');

// Loading Config
require('dotenv').config();

// Record in Login Mode userId
const inCreateModeUser = [];
const userCreate = (userId, uid, pwd) => new Promise((resolve, reject) => {
  const cipherPwd = cryptoJS.AES.encrypt(pwd, process.env.SECRET).toString();
  const insertUserData = new UserSchema({
    userId,
    uid,
    pwd: cipherPwd,
  });

  insertUserData.save((err, result) => {
    if (err) {
      console.log(err);
      reject(new Error('登入失敗'));
    } else {
      resolve('登入成功');
    }
  });
});

const userRemove = userId => new Promise((resolve, reject) => {
  UserSchema.deleteOne({
    userId,
  }, (err) => {
    if (err) {
      reject(new Error('刪除失敗'));
    } else {
      resolve('刪除成功');
    }
  });
});

module.exports.inCreateModeUser = inCreateModeUser;
module.exports.userCreate = userCreate;
module.exports.userRemove = userRemove;
