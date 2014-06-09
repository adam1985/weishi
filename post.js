var https = require('https');
var options = { hostname: 'open.t.qq.com', port: 80, path: '/api/auth/token', method: 'POST' };
var req = https.request(options, function (response) {
    var str = '';
    response.on('data', function (data) {
        str = str + data;
    });
    response.on('end', function () {
        console.log(str);
    });
});
req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});
//req.write("");
req.end();