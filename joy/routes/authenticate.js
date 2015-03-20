/**
 * /authenticate
 * ---
 * if is invalid, return 401
 * ---
 * TODO
 * replace username, password, and profile with db
 */

var
    express = require('express')
    , router = express.Router()
    , bodyParser = require('body-parser')
    , jwt = require('jsonwebtoken') //https://npmjs.org/package/node-jsonwebtoken
    , expressJwt = require('express-jwt') //https://npmjs.org/package/express-jwt
    , secret = 'this is the secret secret secret 12356'
;

router.post('/', function (req, res) {
    console.log(req.body);
    if (!(req.body.username === 'joy' && req.body.password === '777yjy7')) {
        res.status(401).send('Wrong user or password');
        return;
    }

    var profile = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        id: 123
    };

    //-- We are sending the profile inside the token
    var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });
    res.json({ token: token });
});

module.exports = router;
