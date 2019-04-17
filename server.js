const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', function (request, response) {
    response.render('home.hbs', {
        title: 'Home'
    });
});

app.post('/submit', function(request, response) {
    input = request.body.input;

    response.send(input);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});