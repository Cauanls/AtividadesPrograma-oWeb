const express = require('express');
const app = express();
const estoque = require('./Util/estoque')


const PORT = 8080;
app.listen(PORT, function() {
    console.log("app rodando na porta" + PORT);
})

app.get('/', function(req, res){
    res.send("Tudo certo!")
})

app.get('/adcionar/:id/:nome/:qtd', function(req, res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProduto(id, nome, qtd);
    estoque.adcionarProduto(p);
    res.send(p)
})

app.get('/listar', function(req, res){
    res.send(estoque.listarProdutos());
})

app.get('/remover/:id', function(req, res){
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send('removido o produto com id: ' + id)
})

app.get("/editar/:id/:qtd", function(req, res){
    let id = req.params.id;
    let qtd = req.params.qtd;
    estoque.editarProduto(id, qtd);
    res.send('quantidade do' + id + 'atualizada!')  
})
