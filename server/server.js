var express = require('express');
var middleware = require('./config/middleware.js');

var app = express();

//SET UP MIDDLEWARE + ROUTES
middleware(app, express);

var PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log('Georgeria is listening on ' + PORT);


module.exports.app = app;

// module.exports.ref = ref;
// console.log(ref === module.exports.ref)
