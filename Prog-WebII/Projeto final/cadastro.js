//variavel que recebe o require, buscando as informações do arquivo produto
const Produto = require('./produto');

//Classe que tem o constructo com o array de produtos, foi mandada para um exports para o index ter acesso
module.exports = class CadastroProdutos {
    constructor() {
        this.produtos = [];
    }

    //Função inserir, leva como parametro o produto que esta sendo inserido no array de produtos
    inserir(produto) {
        this.produtos.push(produto);
    }

    //Função que retorna o array de produtos
    listar() {
        return this.produtos;
    }

    //Função que busca o produto pelo id dele(não o do array mas o que o usuario cadastrou)
    buscarPorId(id) {
        let verificaId = function (produtos) {
            return produtos.id == id;
        }
        //findIndex retora o índice no array do primeiro elemento que satisfaz nossa condição
        //A condição, é o id digitado ser igual ao de algum produto cadastrado
        //O return vai trazer o indice do produto no array, mas no momento não nos interessa isso
        return this.produtos.findIndex(verificaId);
    }

    //Função que deleta um produto buscando ele pelo id, usamos a função buscarPorId para isso
    deletar(id) {
        //foi guardado na variavel Id o vamos do id que foi achado pela função buscarPorId
        const Id = this.buscarPorId(id)
        //Se o valor que esta na variavel não for igual de algum produto ele retorne a mensagem
        if (Id == -1) {
            console.log("Produto não encontrado")
        } else {
            //Se não nós deletamos o produto que tem o indice igual do que esta na variavel Id
            return this.produtos.splice(Id, 1);
        }
    }

    //Função que atualiza um produto, ele é buscado pela função buscaPorID
    //Essa função tem como parametros o id do produto cadastrado e um parametro para o produto novo
    atualizar(id, produtoAtual) {
        //A variavel codigo serve para guardar o id do produto que foi buscado com a função buscaPorID
        const codigo = this.buscarPorId(id)
        //Se o valor que esta na variavel não for igual de algum produto ele retorne a mensagem
        if (codigo == -1) {
            console.log("Produto não encontrado");
        } else {
            //Se não o produto que tem o indice igual ao que pesquisamos, a gente atualiza as info dele através da variavel produtoAtual
            this.produtos[codigo] = produtoAtual;
        }
    }

}