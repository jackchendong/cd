'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 添加路由
  router.get('/', controller.home.index);
  // 添加news 路由
  // router.get('/news', controller.home.news);
  router.get('/admin/index', controller.admin.index);
  router.get('/admin/news', controller.admin.news);

  router.get('/news', controller.news.index);
  router.get('/news/detail', controller.news.content);
  // 动态路由传值
  router.get('/news/:id/detail', controller.news.newsList);

  router.get('/news/service', controller.news.newsService);
};
