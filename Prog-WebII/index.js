const Produto = require("./Produto");
const CadastroProdutos = require("./cadastro");

let cadastroProdutos = new CadastroProdutos();

cadastroProdutos.inserir(new Produto(1,"arroz",6.3));
cadastroProdutos.inserir(new Produto(2,"feijao",8.9));
cadastroProdutos.inserir(new Produto(3,"shampoo",10.0));

for(let prod of cadastroProdutos.listar()){
    console.log (`Produto ${prod.codigo}: ${prod.nome}, ${prod.preco}`);
}

cadastroProdutos.deletar(3);

cadastroProdutos.atualizar(2, new Produto(2,"farofa", 9))

for(let prod of cadastroProdutos.listar()){
    console.log (`Produto ${prod.codigo}: ${prod.nome}, ${prod.preco}`);
}

console.log(cadastroProdutos.buscarPorCodigo(2));

