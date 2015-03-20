var express = require('express');
var router = express.Router();

/**
 * '/': actually /
 */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

/**
 * '/': The URL actually is /
 */
var pagename = 'index';
router.get('/', function(req, res, next) {
  res.sendFile(pagename + '.html', {root: './public'});
});

module.exports = router;
