const conexao = require('../config/conexaoDB')

exports.listar = (callback) => {
    const mysql = 'SELECT * FROM livros';

    conexao.query(mysql, (erro, linhas) => {
        if(erro){
            callback(erro, null);
            console.log("Erro no banco!");
        }else{
            callback(null, linhas);
        }
    });
};

exports.criar = (livro, callback) => {
    const mysql = "INSERT INTO livros(isbn,nome,autores,editora,ano) VALUES (?,?,?,?,?)";

    conexao.query(mysql, [livro.isbn, livro.nome, livro.autores, livro.editora, livro.ano], 
        (erro, linhas) => {
        if(erro){
            callback(erro, null);
            console.log("Erro no banco!");
        }else{
            callback(null, linhas);
        }
    });
};

exports.buscarPorAutor = (autores, callback) => {
    const mysql = "SELECET * FROM livros WHERE autores=?";

    conexao.query(mysql, [autores], (erro, linhas) => {
        if(erro){
            const err = {
                status: 500,
                msg: err
            }
            callback(erro, null);
        }else{
            if(linhas && linhas.length > 0){
                callback(null, linhas[0])
            }else{
                const err = {
                    status: 404,
                    msg: "produto não encontrado"
                }
                callback(erro, null);
            }
        }
    });
};

exports.buscarPorNome = (nome, callback) => {
    const mysql = "SELECET * FROM livros WHERE nome=?";

    conexao.query(mysql, [nome], (erro, linhas) => {
        if(erro){
            const err = {
                status: 500,
                msg: err
            }
            callback(erro, null);
        }else{
            if(linhas && linhas.length > 0){
                callback(null, linhas[0])
            }else{
                const err = {
                    status: 404,
                    msg: "produto não encontrado"
                }
                callback(erro, null);
            }
        }
    });
};

