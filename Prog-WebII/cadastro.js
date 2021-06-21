const Produto = require("./Produto");

module.exports = class CadastroProdutos {
    constructor(){
        this.produtos = [];
    }

    inserir(produto){
        this.produtos.push(produto);
    }
    
    listar() {
        return this.produtos;
    }
    
//    buscarPorCodigo(codigo){
//        for(let prod of this.produtos){
//          if(prod.codigo == codigo){
//               return prod;
//           }
//        }

//        function verificaCod(produtos){
//            return produtos.codigo == codigo;
//       }

//        return this.produtos.find(verificaCod);
//    let verificaId = function (produtos){
//        return produtos.codigo == codigo;
//    }

//    return this.produtos.find(verificaId);

//    }

    buscarPorCodigo(codigo){
    let verificaId = function (produtos){
        return produtos.codigo == codigo;
    }

    return this.produtos.findIndex(verificaId);
    }

    deletar(codigo){
        const iD = this.buscarPorCodigo(codigo)
        if(iD == -1){
            console.log("Código não encontrado!");
        }else{
            return(this.produtos.splice(iD, 1));
        }
    }

    atualizar(codigo, produtoAtual){
        const iD = this.buscarPorCodigo(codigo)
        if(iD == -1){
            console.log("Código não encontrado!");
        }else{
            this.produtos[iD] = produtoAtual;
        }
    }
}