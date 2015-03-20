var express = require('express');
var router = express.Router();


// middleware specific to this router
router.use(function (req, res, next) {
  console.log(pagename, 'Time: ', Date.now());
  next();
})

/**
 * '/': The URL actually is /contacts
 */
var pagename = 'contacts';
router.get('/', function(req, res, next) {
  res.sendFile(pagename + '.html', {root: './public/mypages/' + pagename});
});

module.exports = router;
