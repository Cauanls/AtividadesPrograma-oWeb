const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const port = 8080;
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/src/views');


app.use('/', require('./src/routes/calculadoraRoutes'));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});