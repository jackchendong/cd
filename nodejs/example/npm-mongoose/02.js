const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://cd:123456@127.0.0.1/db');

var empSchema = new Schema({
    name: String,
    job: String
})

var stuSchema = new Schema({
    school: String,
    id: [{ type: Schema.ObjectId, ref: 'emp' }],  // 这几是数组还是对象都可以
    score: Number
})

var emp = mongoose.model('emp', empSchema, 'emp')
var stu = mongoose.model('stu', stuSchema, 'stu')

// 测试update  score:{$gt:0},$inc:{score: -100}
// stu.findByIdAndUpdate("5bea2b40c4cc0f2858988e62",{$inc:{score: -100}} ,{new: true},(err, result)=>{
//     console.log(err, result)
// })
// 测试 oneUpdate
// stu.findOneAndUpdate({score:{$gt:0}},{$inc:{score:-100}},{new:true},(err,result)=>{
//     console.log(err,result)
// })



// emp.find({},(err,result) =>{
//     console.log(err,result)
// })
// stu.find({},(err,result)=>{
//     console.log(err,result)

// })


stu.find({}).populate({
    path: 'id', // 关联的字段
    // math: {name: "asdasdasdasd"}
    match: { job: 'nodejsasddsa'},
    // select: 'name -_id',
    // options: { limit: 5 }
}).exec((err,result)=>{
    console.log(err,result[0].id,11111,result)
})

// stu.find({}).populate('id').exec((err,result)=>{
//     console.log(err,result[0].id, result)  // 得到了 连表查询
// })

// null 
// [{"_id":"5bea2adac4cc0f2858988dc3","name":"陈冬","job":"nodejs"}] 
//[ { id: [[Object] ], _id: 5bea2b40c4cc0f2858988e62, school: '湖科' } ]
