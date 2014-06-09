var start = function ( route, handler ) {
    var http = require('http'),
        url = require('url');
    http.createServer( function( request, response){

        response.writeHead(200, {
            'content-type' : 'text/html'
        });

        if( !/favicon\.ico/.test( request.url ) ) {
            console.log('require start');
            var pathname = url.parse( request.url).pathname;

            //request.setEncoding("utf8");

            route( handler, pathname, response, request );

        }

    }).listen(3001);

    console.log('server ready start working');
};

exports.start = start;
