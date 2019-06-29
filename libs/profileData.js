const ProfileSchema = require('../schema/profile/Profile');

const profileCreate = (userId, displayName,
  statusMessage, pictureUrl) => new Promise((resolve, reject) => {

  const insertUserData = new ProfileSchema({
    userId,
    displayName,
    statusMessage,
    pictureUrl,
  });

  insertUserData.save((err, result) => {
    if (err) {
      reject(new Error('儲存失敗'));
    } else {
      resolve('儲存成功');
    }
  });
});

module.exports.profileCreate = profileCreate;
