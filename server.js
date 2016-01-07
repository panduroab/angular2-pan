var express = require('express');
var app = express();

app.use(express.static('./dist'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.use(express.static('./src'));
var server = app.listen(8080);
console.log('Server Listing at http://127.0.0.1:8080');
