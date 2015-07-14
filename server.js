var expressIO = require('express.io'),
    serveStatic = require('serve-static');

var app = expressIO();

app.use(expressIO.cookieParser());
app.use(expressIO.session({secret: 'monkey'}));

app.http().io();
app.listen(8000);

// Session is automatically setup on initial request.
app.get('/', function (req, res) {
    req.session.loginDate = new Date().toString();
    res.sendfile(__dirname + '/build/index.html');
});
app.use(expressIO.static(__dirname + '/'));
app.use(expressIO.static(__dirname + '/build'));

app.get('/mentors', function (req, res) {
    var result = require('./json/mentors.json');
    res.json(result);
});

app.get('/mentees', function (req, res) {
    var result = require('./json/mentees.json');
    res.json(result);
});

var clickCount = 0;
//app.post('/kittyCount', function(request, response){
//    clickCount = request.data;
//});

app.get('/kittyCount', function (request, response) {
    var clicks = request.param('count');
    if (typeof clicks != 'undefined'){
        clickCount =  parseInt(clicks);
    }
    response.json(clickCount);
});
exports = module.exports = app;


