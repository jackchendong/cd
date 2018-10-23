'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async echo() {
    return '用户服务';
  }
}

module.exports = UserService;
