## ![logo](http://ww3.sinaimg.cn/large/61ff0de3gw1e90zxd19shj201k014742.jpg) pm2-panel ![npm](https://badge.fury.io/js/pm2-panel.png)

the missing web and mobile panel of pm2 monitor

### Installation
```bash
$ npm install pm2-panel
```

### Example
make sure you've active `pm2 web` early.
```bash
$ git clone https://github.com/turingou/pm2-panel.git
$ cd pm2-panel
$ cp app.simple.js app.js
$ vi app.js
$ node app.js // or pm2 start app.js
```bash

### Example
```js
var panel = require('pm2-panel');

// init a new server running on port 3000
new panel({
    name: 'pm2-panel',
    desc: 'the missing web/mobile panel of pm2 monitor',
    url: 'http://abc.com'
    // your pm2 api server(optional)
    // default by http://localhost:9615 or $url:9615(env: production)
    api: 'http://anotherServer.com:9999'
}).run();
```

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2013 turing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
generated using [docor](https://github.com/turingou/docor.git) @ 0.1.0. brought to you by [turingou](https://github.com/turingou)