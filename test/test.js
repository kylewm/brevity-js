var assert = require('assert'),
    fs = require('fs'),
    brevity = require('../brevity.js');

var content = fs.readFileSync('tests.json', 'utf8');
var data = JSON.parse(content);

describe('shorten()', function () {
    data['shorten'].forEach(function (testcase) {
        it('shortens ' + testcase.text.replace(/\s+/g, ' '), function () {
            var result = brevity.shorten(
                testcase.text,
                testcase.permalink,
                testcase.permashortlink,
                testcase.permashortcitation,
                testcase.target_length,
                testcase.link_length,
                testcase.format_as_title
            );
            assert.equal(testcase.expected, result);
        });
    });
});

describe('autolink()', function () {
    data['autolink'].forEach(function (testcase) {
        it('autolinks ' + testcase.text.replace(/\s+/g, ' '), function () {
            var result = brevity.autolink(testcase.text);
            assert.equal(testcase.expected, result);
        });
    });
});
