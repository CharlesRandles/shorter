var http = require("http");
function start(routeRequest, routings) {
    function onRequest(request, response) {
	console.log("Starting server");
	routeRequest(request, response, routings);
    }
    http.createServer(onRequest).listen(8080);
    console.log("Started server");
}
exports.start = start;

