var Server = require('express-scaffold');
var routes = require('./routes');
var pkg    = require('./package.json');

new Server({
  name: pkg.name,
  version: pkg.version
})
.routes(routes)
.run();
