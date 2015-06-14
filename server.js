var express = require("express");
var app = express();

app.set("port", (process.env.PORT || 4000));

app.get("/", function(request, response) {
  response.send(JSON.stringify(request.route));
});

app.post("/", function(request, response) {
  response.send(JSON.stringify(request.route));
})

app.use(express.static(__dirname + '/public'));

var server = app.listen(app.get("port"), function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);

});
