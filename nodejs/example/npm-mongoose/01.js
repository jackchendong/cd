const mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect('mongodb://cd:12346@localhost/db');

// const Schema = mongoose.Schema;
 
const stu = new Schema({
//   author: Schema.ObjectId,
//   title: String,
//   body: String,
//   date: Date
     addr: String,
     userId: String
});
var Stu = mongoose.model('stu',stu)
// const Stu = mongoose.model('stu',stu,'stu')
// Stu.find()
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection
db.on('error',console.error.bind(console, 'connection error:'))
db.once('open',()=>{
})







