var fs = require('fs');
var content = fs.readFileSync('testcases/tests.json', 'utf8')
var testdata = JSON.parse(content);
require('./test.js').init(require('../brevity.js'), require('assert'), testdata);
