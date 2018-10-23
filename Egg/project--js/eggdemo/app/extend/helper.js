'use strict';
// app/extend/helper.js
// const moment = require('moment');
exports.helper = () => { // 这里在模板里面就可以这样用 <%= helper.helper()%> 只有helper可以这样
  return '扩展helper';
};
