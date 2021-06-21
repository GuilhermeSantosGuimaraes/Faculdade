//Variavel que recebe as informações do arquivo chamado cadastro através do require
const CadastroProdutos = require('./cadastro')
//Variavel que recebe as informações do arquivo chamado produto através do require
const produto = require('./produto')

//Variavel que recebe um as informações da classe cadastroProdutos que esta no arquivo cadastro.js
let cadastro = new CadastroProdutos();

//Métodos de cadastras produtos que estão em memória
cadastro.inserir(new produto(1, 'camiseta', 50));
cadastro.inserir(new produto(2, 'calça', 60));
cadastro.inserir(new produto(3, 'tenis', 70));

//Método para deletar um produto, é digitado um número que seria o id de cadastro desse produto, 
//no caso foi usado o 0 so para ver se funcionava a mensagem de qunado não se acha o id
cadastro.deletar(0);
//Método de atualização de produtos, é passado primeiro o id do produto cadastrado e depois as info do novo produto
cadastro.atualizar(1, new produto(1, 'boné', 30))
//Métodi para mostrar os produtos
console.log(cadastro.listar());
//For que le e mostra todos os produtos usando a função listar e uma concatenação bunitinha
for (let prod of cadastro.listar()) {
    console.log(`Codigo do Produto: ${prod.id}, Produto: ${prod.nome}, Preço: ${prod.preco}`)
}




