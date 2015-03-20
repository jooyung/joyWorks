var express = require('express');
var router = express.Router();

/**
 * '/': The URL actually is /joins
 */
var pagename = 'joins';
router.get('/', function(req, res, next) {
  res.sendFile(pagename + '.html', {root: './public/mypages/' + pagename});
});

module.exports = router;
