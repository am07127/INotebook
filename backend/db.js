const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/StudentDB';

const connectToMongo = ()=>{
    mongoose.connect(mongoURL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("Connected to Mongo Successfully");
    }).catch((err)=>{
        console.log("Error connecting to Mongo");
        console.log(err);
    })
}

module.exports = connectToMongo; // exporting the function