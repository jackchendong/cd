'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // this.ctx.body = '新闻页面';
    // 模板引擎是异步的 要加上 await
    const msg = 'ejs';
    const list = [ 111, 222, 333 ];
    await this.ctx.render('news', {
      msg,
      list,
    });
  }

  async content() {
    this.ctx.body = '新闻详情';
  }

  async newsList() {
    const params = this.ctx.params;
    console.log(params); // 获得路由参数
    this.ctx.body = params;
  }

  async newsService() {
    // 获得service 的数据
    const msg = await this.service.news.getList();
    console.log(msg);
    this.ctx.body = msg;
  }

}

module.exports = NewsController;
