# Deployment

==start

express joytest

cd joytest

npm install

npm install --save socket.io
npm install --save mysql
npm install --save request
npm install --save jsonwebtoken
npm install --save express-jwt

==npm start (package.json)
"start": "nodemon ./bin/www"

==public directory

this directory becomes my assets directory
all sources from others like jquery, bootstrap css will stay out of this public directory in /lib

==my pages

make a direcotry 'mypages' in public
and put all directories there like 'books', 'contacts', 'joins', 'memos', and 'works'

each directory has 'js', 'css' directories

==favicon (app.js)
	// uncomment after placing your favicon in /public
	app.use(favicon(__dirname + '/assets/images/favicon.ico'));


==static path (app.js)

	/**
	 * S T A T I C
	 */
	app.use('/assets', express.static(path.join(__dirname, 'assets')));
	app.use('/lib', express.static(path.join(__dirname, 'lib')));
	app.use(express.static(path.join(__dirname, 'public')));

==routes (app.js)

	var routes = require('./routes/index');
	var books = require('./routes/books');
	var contacts = require('./routes/contacts');
	var joins = require('./routes/joins');
	var memos = require('./routes/memos');
	var memos = require('./routes/memos');
	var works = require('./routes/works');

	/**
	 * R O U T E S
	 */
	app.use('/', routes);
	app.use('/books', books);
	app.use('/contacts', contacts);
	app.use('/joins', joins);
	app.use('/memos', memos);
	app.use('/works', works);

==routes (each route <page>.js)

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

==nodemon.json

	{
	    "restartable": "rs",
	     "ignore": [
	        ".git",
	        "lib",
	        "node_modules/**/node_modules",
	        "public",
	        "*.md",
	        "*.json"
	    ],
	    "verbose": true,
	    "execMap": {
	        "js": "node --harmony"
	    },
	    "events": {
	    },
	    "watch": [
	    ],
	    "env": {
	        "NODE_ENV": "development"
	    },
	    "ext": "js json"
	}

==joymodules

====index.js
	//http://stackoverflow.com/a/17204293
	// Load `*.js` under current directory as properties
	//  i.e., `User.js` will become `exports['User']` or `exports.User`
	require('fs').readdirSync(__dirname + '/').forEach(function(file) {
	  if (file.match(/.+\.js/g) !== null && file !== 'index.js') {
	    var name = file.replace('.js', '');
	    exports[name] = require('./' + file);
	  }
	});

==https

===cert

	copy cert directory
