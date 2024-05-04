const express = require("express");
const app = express();
const mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/dados', function (req, res) {
    let dados = req.body;
    res.render('dados.html', { dados });
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});