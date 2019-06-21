const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

  userId: {
    type: String,
    required: true,
    index: { unique: true },
  },
  uid: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
}, {
  versionKey: false,
  timestamps: { createdAt: 'createdAt' },
});

module.exports = mongoose.model('user', UserSchema, 'user');
