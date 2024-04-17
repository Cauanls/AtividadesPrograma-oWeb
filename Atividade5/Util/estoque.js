function criarProduto(id, nome, qtd){
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adcionarProduto(p){
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function removerProduto(id){
    produtos = produtos.filter((p) => {
        return p.id != id
    });
}

function editarProduto(id, qtd){
    produtos = produtos.filter((id) => {
        atualizar = qtd;
        return p.qtd = atualizar
    })
}

module.exports = {
    criarProduto,
    adcionarProduto,
    listarProdutos,
    removerProduto, 
    editarProduto
}