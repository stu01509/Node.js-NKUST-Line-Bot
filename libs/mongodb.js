const mongoose = require('mongoose');

mongoose.Promise = Promise;

require('dotenv').config();

const { DB_PATH, DB_SSL } = process.env;

const connect = () => new Promise((resolve, reject) => {
  const db = mongoose.connection;

  db.on('error', () => {
    console.log(`Can not connection to ${DB_PATH}`);
    reject(process.exit(0));
  });

  db.on('open', () => {
    console.log(`Connection to ${DB_PATH}`);
    resolve();
  });

  db.on('disconnected', () => {
    console.log('Connection disconnected');
  });

  mongoose.connect(DB_PATH, {
    useNewUrlParser: true,
    ssl: DB_SSL,
  });
});

module.exports.connect = connect;
