var https = require("https");
var http = require("http");
var querystring = require("querystring");
var url  = require('url');
var ng = require('nodegrass');
function Interface( response, request ) {
    var options = url.parse( request.url , true),
        query = options.query,
        interfaceUrl = query.url,
        callback = query.callback ||  'callback',
        qtype = (query.qtype || 'get').toLowerCase();
        response.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});

        if(interfaceUrl){

            delete query.url;
            delete query.callback;
            delete query.qtype;
            var paramStr = querystring.stringify( query ),
                reqPath;

            if( qtype == 'get' ) {
                reqPath = 'https://open.t.qq.com/api/' + interfaceUrl + '?' + paramStr;
            } else {
                reqPath = 'https://open.t.qq.com/api/' + interfaceUrl;
            }

            if( qtype == 'get' ) {
                ng[qtype](reqPath,function(data){
                    response.write( callback + '(' + data + ');');
                    response.end();
                }, 'utf8');
            } else {
                ng[qtype](reqPath,function(data){
                    response.write( callback + '(' + data + ');');
                    response.end();
                }, {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "Content-Length": paramStr.length
                }, query, 'utf8');
            }

        } else {
            response.write( callback + '({});');
            response.end();
        }

}

exports.Interface = Interface;
