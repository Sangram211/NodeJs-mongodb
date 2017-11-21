var toStartServer = require('./server');
var handler=require('./handler');
var router=require('./router');

var pathMap={};
pathMap["/home"]= handler.home;
pathMap["/review"] = handler.review;

toStartServer.startServer(router.route,pathMap);

