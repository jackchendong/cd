'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getList() {
    console.log(this.config.api);
    const user = await this.service.user.echo(); // 服务调用服务
    console.log(user);
    const msg = 'service新闻';
    return msg;
  }
}

module.exports = NewsService;
