const OSS = require('ali-oss');
const fs = require('fs')
const client = new OSS({
  region: 'oss-cn-hangzhou',
  accessKeyId: 'LTAIjlhqNMgP6KuM',
  accessKeySecret: '1FI3Rf5ufBeOufQrq8yhjqnBWrP7re',
  bucket: 'xinlianxin'
});
// 正常上传
// let result = await client.put('object-name', 'local-file');
// 流上传
let stream = fs.createReadStream('./01.jpg');
// console.log(stream)
let result =  client.putStream('/public/05.png', stream);
console.log(result);
// let result = await client.putStream('object-name', stream);

// console.log(client)