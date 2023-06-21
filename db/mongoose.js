const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://gouravtailor:gouravtailor@merntest.cbyv9p4.mongodb.net/Voosh?retryWrites=true&w=majority");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});