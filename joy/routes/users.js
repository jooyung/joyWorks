var express = require('express');
var router = express.Router();

/**
 * '/': actually /users/
 */
router.get('/', function(req, res, next) {
  res.sendFile('users.html', {root: './public/'});
});

module.exports = router;
