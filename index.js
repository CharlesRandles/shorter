var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers");
var routings = {}
routings["/"] = requestHandlers.redirect;
routings["/makeShortLink"] = requestHandlers.makeShortLink;
routings["/shorten"] = requestHandlers.shorten;
routings["/list"] = requestHandlers.list;
server.start(router.route, routings);
