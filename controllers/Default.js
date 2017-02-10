'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.loginPOST = function loginPOST (req, res, next) {
  Default.loginPOST(req.swagger.params, res, next);
};

module.exports.newsBreakingGET = function newsBreakingGET (req, res, next) {
  Default.newsBreakingGET(req.swagger.params, res, next);
};

module.exports.newsCategoriesGET = function newsCategoriesGET (req, res, next) {
  Default.newsCategoriesGET(req.swagger.params, res, next);
};

module.exports.newsTodayCategoryPageNonews_pdfGET = function newsTodayCategoryPageNonews_pdfGET (req, res, next) {
  Default.newsTodayCategoryPageNonews_pdfGET(req.swagger.params, res, next);
};

module.exports.newsTodayCategoryPageNothumbnail_pngGET = function newsTodayCategoryPageNothumbnail_pngGET (req, res, next) {
  Default.newsTodayCategoryPageNothumbnail_pngGET(req.swagger.params, res, next);
};
