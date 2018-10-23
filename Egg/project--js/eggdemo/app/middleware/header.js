'use strict';
module.exports = options => { // options, app 参数有两个
  return async function(ctx, next) {
    ctx.logger.info(ctx.request.method + ctx.request.url); // 正常打印日志，在log文件夹中
    console.log(ctx.request.method + ctx.request.url);
    console.log(options); // 中间件的传值
    await next();
  };
};

