const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const OrderSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  subTotal: {
    type: Number,
    required: true
  }
},
{
  versionKey: false
});


const Order = model('orders', OrderSchema);
module.exports = Order;