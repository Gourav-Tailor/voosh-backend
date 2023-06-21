const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const OrderSchema = new Schema({
  _id: Number,
  userId: Number,
  phoneNumber: Number,
  subTotal: Number
},
{
  versionKey: false // You should be aware of the outcome after set to false
});

const Order = model('orders', OrderSchema);
module.exports = Order;