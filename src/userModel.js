const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ['user', 'admin']
  },
  token: {
    type: String
  },
  token_invalid: {
    type: Boolean,
    default: false
  }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
