var portalService = require('../service/portalService.js');
var _async = require("async");

/*
 *portalService为请求借口模块;
 *get方式以queryString传递参数，post方式以formDate传递参数；
 *当前页面以queryString接受参数。
 */
module.exports = function(router) {
  router.get('/', function(req, res) {
    res.render('index.dust');
  });
};