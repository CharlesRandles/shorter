
function writeHTML(response, content){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(content);
    response.end();
}

function redirect(request, response) {
    var body='<html><body>Redirect requested</body><html>';
    writeHTML(response, body);
}
function makeShortLink(request, response) {
    var body='<html><body>makeShortLink requested</body><html>';
    writeHTML(response, body);
}
function shorten(request, response) {
    var body='<html><body>shorten requested</body><html>';
    writeHTML(response, body);
}
function list(request, response) {
    var body='<html><body>List requested</body><html>';
    writeHTML(response, body);
}
exports.redirect=redirect;
exports.makeShortLink=makeShortLink;
exports.shorten=shorten;
exports.list=list;
