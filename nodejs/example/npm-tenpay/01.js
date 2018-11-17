var tenpay = require('tenpay');
const config = {
    appid: 'wx15d802a5b84e6be5',
    mchid: '1518804551',
    partnerKey: 'ce2c2bf3b1acc95b93e1a792f0ba44af',
    notify_url:'http://www.baidu.com'
};
// 方式一
// const api = new tenpay(config);
// // 方式二
// const api = tenpay.init(config);
// 调试模式(传入第二个参数为true, 可在控制台输出数据)
var api = new tenpay(config, true);
// 沙盒模式(用于微信支付验收)
// var sandboxAPI = tenpay.sandbox(config).then((data)=>{
//     console.log(data)
// });
// console.log(sandboxAPI);
let result = api.unifiedOrder({
    out_trade_no: '201811162126001',
    body: '测试',
    total_fee: '1',
    openid: 'oiERK5CKsxW2kZF3LWwGgs4dn_9g'
  }).then((data)=>{
      console.log(data)

  }).catch((err)=>{
      console.log(err)
  })



