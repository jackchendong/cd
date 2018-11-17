var jwt = require('jsonwebtoken');
var token = jwt.sign({
    "iss": "John Wu JWT", //该JWT的签发者
    // "iat": 1441593502, // 在什么时候签发的
    // "exp": 14415947220000, // 什么时候过期，这里是一个Unix时间戳 如果时间过期就会报错
    // "aud": "www.example.com", //  接收该JWT的一方
    // "sub": "jrocket@example.com", // 该JWT所面向的用户
    //-------上面5个是插件自带的字段
    "from_user": "B", // 自定义的
    "target_user": "A" // 自定义的
    }, '123456',{
        "algorithm": "HS256"  // RS256 要私钥的
    });   // 123456 密码
console.log(token)

var result = jwt.verify(token, '123456')
// var response = jwt.decode(token, {complete: true}) // 解码 不需要密码 自己用 verify 就不怕他我有服务器的密码验证
console.log(result)
