const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGODB_KEY);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});