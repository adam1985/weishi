var server = require('./server'),
    router = require('./router'),
    requestHandlers = require('./requestHandlers');

var handler = {};

handler['/'] = requestHandlers.Interface;
handler['/interface'] = requestHandlers.Interface;
handler['/interface/'] = requestHandlers.Interface;

server.start(router.route, handler);



