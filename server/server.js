var path = require("path")
var http = require("http")
var express = require("express")
var socketIO = require("socket.io")

var publicPath = path.join(__dirname, "../client")
var port = process.env.PORT || 2001;
var app = express();
var server = http.createServer(app);
var io = socketIO(server)
app.use(express.static(publicPath))

server.listen(port, function() {
    console.log("server successfully started on " + port);
});