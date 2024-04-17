var produtos = []

function criarProduto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adcionarProduto(p) {
    produtos.push(p);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        return p.id != id
    });
}

function editarProduto(id, qtd, p) {
    const produto = p.find(produto => produto.id === id);
    if (produto) {
        p.qtd = parseInt(qtd);
        res.send('Quantidade do produto atualizada.');
    } else {
        res.send('Produto não encontrado.');
    }
}

module.exports = {
    criarProduto,
    adcionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
}