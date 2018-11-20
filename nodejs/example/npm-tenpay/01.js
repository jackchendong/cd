var tenpay = require('tenpay');
const config = {
    appid: 'wxa8cccsde0ab4bd5c51f', // 
    mchid: '151880d4551',        // 商户号
    partnerKey: 'ce2c2bf3b1adcdc95basd93e1a792f0ba44af',  // 微信支付安全密钥
    notify_url:'https://xlx.9155.com/cb'
};
// 方式一
const api = new tenpay(config);
// // 方式二
// const api = tenpay.init(config);
// 调试模式(传入第二个参数为true, 可在控制台输出数据)
// var api = new tenpay(config, true);
// 沙盒模式(用于微信支付验收)
// var sandboxAPI = tenpay.sandbox(config).then((data)=>{
//     console.log(data)
// });
// console.log(sandboxAPI);
let result = api.getPayParams({ // 支持小程序这个 api
    out_trade_no: '2018111d62126003',
    body: '测试',
    total_fee: '1',
    openid: 'oiERK5KqvEkdo85lsajGmSGyyu6Qzc'
  }).then((data)=>{
      console.log(data)

  }).catch((err)=>{
      console.log(err)
  })



