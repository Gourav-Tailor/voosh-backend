const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  _id: Number,
  name: String,
  phoneNumber: Number,
  password: String
},
{
  versionKey: false // You should be aware of the outcome after set to false
});

const User = model('users', UserSchema);
module.exports = User;