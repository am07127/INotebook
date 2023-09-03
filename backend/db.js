const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017';

const connectToMongo = ()=>{
    mongoose.connect(mongoURL)
}

module.exports = connectToMongo; // exporting the function