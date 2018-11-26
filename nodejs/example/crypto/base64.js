// 要想转数据格式就先用buffer nodejs  现在不采用 new Buffer 用 Buffer.from
let a = Buffer.from("asdasdasdasdasdasda", 'utf8').toString('base64')  //base64加密
console.log(a)  // YXNkYXNkYXNkYXNkYXNkYXNkYQ==
var c = Buffer.from(a, 'base64').toString('utf8')
console.log(c)  // asdasdasdasdasdasda

// 这里 sign 是16进制的数据 在转 base64
// Buffer.from(sign,'hex').toString('base64')