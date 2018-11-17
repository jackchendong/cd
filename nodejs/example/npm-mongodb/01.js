var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://110.62.14.243:27017/test';


MongoClient.connect(DB_CONN_STR, function(err, db) {
    if(err){console.log(err)} else{console.log("连接成功！");}
    db.close();  //关闭链接
//     //连接到表  
//     var collection = db.collection("lj_node");
//    //查询数据
//    collection.find().toArray(function(err, result) {
//      if(err)
//      {
//        console.log('Error:'+ err);
//        return;
//      }  else {
//          console.log(result[0].name)
//      }
    
//    });
 })
