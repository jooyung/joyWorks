/**
 * Restrict /api
 */

var
    express = require('express')
    , router = express.Router()
	, bodyParser = require('body-parser')
    , expressJwt = require('express-jwt') //https://npmjs.org/package/express-jwt
    , secret = 'this is the secret secret secret 12356'
;

//-- We are going to protect /api routes with JWT
router.use( '/', expressJwt({secret: secret}) );

router.get('/restricted', expressJwt({secret: secret}), function (req, res) {
  console.log('user ' + req.user.email + ' is calling /api/restricted');
  res.json({
    name: 'foo'
  });
});

module.exports = router;
