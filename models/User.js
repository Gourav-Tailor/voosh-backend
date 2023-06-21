const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
{
  versionKey: false
});


const User = model('users', UserSchema);
module.exports = User;