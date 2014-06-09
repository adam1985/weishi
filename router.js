function route( handler, pathname, response, request ) {

    if ( typeof handler[pathname] === 'function' ) {
        return handler[pathname]( response, request );
    } else {

        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("{}");
        response.end();
    }
}
exports.route = route;

