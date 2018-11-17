var crypto = require('crypto');
var md5 = crypto.createHash('md5');

var result = md5.update(654).digest('hex');

// 输出：0cc175b9c0f1b6a831c399e269772661
console.log(result.toUpperCase());