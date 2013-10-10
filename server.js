//                     ___                               __
//     ____  ____ ___ |__ \      ____  ____ _____  ___  / /
//    / __ \/ __ `__ \__/ /_____/ __ \/ __ `/ __ \/ _ \/ / 
//   / /_/ / / / / / / __/_____/ /_/ / /_/ / / / /  __/ /  
//  / .___/_/ /_/ /_/____/    / .___/\__,_/_/ /_/\___/_/   
// /_/                       /_/                           
//
// @brief  : the missing web/mobile panel of pm2 monitor
// @author : [turingou](http://github.com/turingou)

var express = require('express'),
    http = require('http'),
    path = require('path'),
    pkg = require('./lib/pkg'),
    sys = require('./package.json'),
    errors = require('./lib/error'),
    seesaw = require('seesaw');

var Server = function(params) {

    if (params) {

        var app = express(),
            self = this;

        // routers
        var index = require('./routes/index');

        // all environments
        app.set('env', params.env ? params.env : 'development');
        app.set('views', __dirname + '/views');
        app.set('view engine', 'jade');
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser({
            keepExtensions: true,
            uploadDir: path.join(__dirname, '/public/uploads')
        }));
        app.use(express.methodOverride());
        app.use(express.cookieParser(sys.name));
        app.use(function(req, res, next) {
            if (!res.locals._app) res.locals._app = self.app;
            next();
        });
        app.use(require('less-middleware')({
            src: __dirname + '/public'
        }));
        app.use(express.static(path.join(__dirname, 'public')));
        app.use(app.router);

        // locals
        app.locals.sys = sys;
        app.locals.site = params;

        // errors
        app.use(errors.logger);
        app.use(errors.xhr);
        app.use(errors.common);

        // home
        app.get('/', index);
        if (params.api) app.get('/api', seesaw.redirect(params.api))

        // 404
        app.get('*', errors.notfound)

        self.app = app;
        self.params = params;

    }

}

Server.prototype.run = function(port) {
    var defaultPort = 3000;
    this.app.set('port', (port && !isNaN(parseInt(port, 10))) ? parseInt(port, 10) : defaultPort);
    this.app.locals.root = (this.app.get('env') === 'production') ? this.params.url : 'http://localhost:' + this.app.get('port');
    console.log(this.app.locals);
    http.createServer(this.app).listen(this.app.get('port'));
}

module.exports = Server;