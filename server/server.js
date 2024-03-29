'use strict';

var path = require('path');
var nodeStatic = require('node-static');

var dirname = path.dirname(require.main.filename);
var fileServer = new nodeStatic.Server(dirname + '/static');

require('http').createServer(function(req, res) {

    req.addListener('end', function() {
        
        fileServer.serve(req, res);
    }).resume();

}).listen(8080);
