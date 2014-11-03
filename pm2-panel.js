var Server = require('./lib/server');
var routes = require('./routes');
var pkg    = require('./package.json');

new Server(pkg)
  .routes(routes)
  .run();
