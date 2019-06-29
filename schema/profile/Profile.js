const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({

  userId: {
    type: String,
    required: true,
    index: { unique: true },
  },
  displayName: {
    type: String,
    required: true,
  },
  statusMessage: {
    type: String,
    required: false,
  },
  pictureUrl: {
    type: String,
    required: false,
  },
}, {
  versionKey: false,
  timestamps: { createdAt: 'createdAt' },
});

module.exports = mongoose.model('profile', ProfileSchema, 'profile');
