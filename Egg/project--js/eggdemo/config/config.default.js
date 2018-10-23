'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540259823089_2622';

  // 配置ejs模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs', // .ejs 就是模板引擎的后缀也可以改成 .html
    },
  };
  // 配置session
  config.sesion = {
    // key : 'session_key'  session key
    // maxAge: 2000, 过期时间
    // renew: true // 每次刷新页面 session 都会被延期
  };

  // add your config here 添加自己的中间件
  config.middleware = [ 'header' ];
  config.header = { // 中间件参数
    name: 'cd',
  };

  // 公共的配置
  // 访问 this.config.api
  config.api = 'www.baidu.com';

  return config;
};
// 这样也可以但是不建议
// exports.view = {
//   mapping: {
//     '.ejs': 'ejs',
//   },
// };
