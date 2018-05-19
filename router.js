function route(request, response, routings) {
    var url = request.url;
    console.log("Routing request:" + url);
    if (typeof(routings[url])==="function") {
	routings[url](request, response);
    }
    else {
	response.writeHead(404, {"Content-type": "text/plain"});
	response.write("404 Not Found");
	response.end();
    }
}
exports.route=route;
