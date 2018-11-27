// https://www.jianshu.com/p/ca5859da2891 参考1
//  http://www.01happy.com/nodejs-aes-128-cbc/ 参考2

const crypto = require('crypto');
// 加密
function genSign(src, key, iv) {
    let sign = '';
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    sign += cipher.update(src, 'utf8', 'hex');
    sign += cipher.final('hex');
    return sign;
}
// 解密
function deSign(sign, key, iv) {
    let src = '';
    const cipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    src += cipher.update(sign, 'hex', 'utf8');
    src += cipher.final('utf8');
    return src;
}
// ase-128-cbc 加密算法要求key和iv长度都为16
const key = Buffer.from('9vApxLk5G3PAsJrM', 'utf8');
const iv = Buffer.from('FnJL7EDzjqWjcaY9', 'utf8');
const sign = genSign('hello world', key, iv);
console.log(sign); // 764a669609b0c9b041faeec0d572fd7a


// 解密
// const key = Buffer.from('9vApxLk5G3PAsJrM', 'utf8');
// const iv = Buffer.from('FnJL7EDzjqWjcaY9', 'utf8');
// const src=deSign('764a669609b0c9b041faeec0d572fd7a', key, iv);
// console.log(src); // hello world
