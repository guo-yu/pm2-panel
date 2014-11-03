var path = require('path');
var swig = require('swig');
var debug = require('debug');
var logger = require("morgan");
var express = require('express');
var compress = require('compression');
var bodyParser = require('body-parser');
var pkg = require('../package.json');
var viewsPath = path.resolve(__dirname, '../', './views');

module.exports = Server;

function Server(configs) {
  var self = this;
  this.configs = configs || {};

  // Init the app instance.
  var app = express();
  var env = process.env.NODE_ENV || 'development';
  var devMode = !(env === 'production');

  // View engine setting.
  app.engine('html', swig.renderFile);

  // Environment Vars
  app.set('env', env);
  app.set('view engine', 'html');
  app.set('views', viewsPath);
  app.set('port', process.env.PORT || 3000);
  app.set('view cache', false); // Disable Express's view cache

  // Middlewares
  app.use(logger(devMode ? 'dev' : 'common'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compress());

  // Inject App locals
  app.locals.site = {};
  Object.keys(this.configs).forEach(function(k){
    if (k === 'uri') return;
    app.locals.site[k] = self.configs[k];
  });

  app.locals.uri = devMode ? 
    'http://127.0.0.1:' + app.get('port') : 
    this.configs.uri;

  this.app = app;

  return this;
}

Server.prototype.routes = function(routes) {
  routes(this.app);
  return this;
};

Server.prototype.run = function() {
  var app = this.app;
  var log = debug(pkg.name);

  log('URI=%s', app.locals.uri);
  log('NODE_ENV=%s', app.get('env'));
  log('PORT=%s', app.get('port'));

  // Start this app instance
  app.listen(app.get('port'));
};
