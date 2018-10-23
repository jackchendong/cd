'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    console.log(this);
    this.ctx.body = 'hi, admin';
  }
  // 给controller添加方法
  async news() {
    this.ctx.body = 'admin news';
  }
}

module.exports = AdminController;
