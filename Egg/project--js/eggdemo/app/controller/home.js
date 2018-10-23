'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    /**
     *  他们几个类好像是互相挂载的
     *   这里的this有
     *      ctx
     *          request
     *          response
     *          app
     *      app
     *          env
     *          name
     *          baseDir
     *          config
     *          controller
     *          loggers
     *          middlewares
     *          router
     *      config
     *      service
     *      logger
     */
    const query = this.ctx.query;
    console.log(query); // 获得get传值

    // 获得扩展
    const ex = this.ctx.helper.helper();
    console.log(ex);

    this.ctx.app.main();

    // 公共配置
    console.log(this.config.api);

    // 获取post数据
    console.log(this.ctx.request.body);

    this.ctx.body = 'hi, egg'; // 返回前端的数据
    // cookie
  //   ctx.cookies.get('',{
  //     // encrypt : true //解密
  //   }) //获取cookie
  //   ctx.cookies.set(key,value,{  // 默认没法设置中文 设置为null 就是清除
  //     // 过期时间
  //     // 加密
  //     。。。
  //     signed: true // 防止用户修改
  //     encrypt: true // 加密  加密了 那么获取的时候要解密
  //                   // 加密了就可以 设置中文
  //   })
    // /////////////session
  // ctx.session.userinfo = {  //设置和获取 设置之后模板是全局的

  // }
  // ctx.session.maxAge =  设置过期时间  等等

  }
  // 给controller添加方法
  async news() {
    this.ctx.body = 'news';
  }
}
/**
 *  自动挂在到 controller上面
    controller.admin.index
    controller.admin.news
 */

module.exports = HomeController;

