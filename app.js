var server = require('./server');

// init a new server running on port 3000
new server({
    name: 'pm2-panel',
    desc: 'the missing web/mobile panel of pm2 monitor',
    api: 'http://abc.com'
}).run();