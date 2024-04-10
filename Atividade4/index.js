const express = require("express");
const app     = express();
const PORT    = 8080;
const calc    = require("./Util/calculadora"); 

app.listen(PORT, function(){
    console.log("Ola" + PORT);
})

app.get('/', function(req, res){
    res.send("pagina inicial");
})

app.get("/somar/:a/:b", function(req, res){
    let n1 = req.params.a;
    let n2 = req.params.b;
    let c = calc.somar(n1, n2)
    res.send(""+c);
})

app.get("/subtrair/:a/:b", function(req, res){
    let n1 = req.params.a;
    let n2 = req.params.b;
    res.send(""+calc.sub(n1, n2));
})

app.get("/multiplicar/:a/:b", function(req, res){
    let n1 = req.params.a;
    let n2 = req.params.b;
    res.send(""+calc.multi(n1, n2));
})

app.get("/dividir/:a/:b", function(req, res){
    let n1 = req.params.a;
    let n2 = req.params.b;
    res.send(""+calc.div(n1, n2));
})