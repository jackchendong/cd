const crypto = require('crypto');
//首先引入crypto模块进项目中；
const secret = 'paipai()!135';
//随手写一段明文字符串，保存到常量secret中。
const hash = crypto.createHmac('sha256', secret)//我们首先调用crypto模块中的createHmac()方法，通过sha256算法对明文进行哈希化。
                   .update('123456')
//在这段哈希值的基础之上，我们添加明文I love cupcakes。
                   .digest('hex');
//在更新之后，我们将更新的内容的进行十六进制的消化吸收。
console.log(hash);
