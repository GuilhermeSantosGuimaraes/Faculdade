const conexao = require("../config/conexaoDB");
const cadastroLivroRep = require("../repository/cadastroLivroRep")

exports.listar = (req, res) => {
    cadastroLivroRep.listar((erro, livros) =>{
        if(erro){
            res.status(500).json({"erro":"Erro No banco"});
        }else{
            res.json(livros)
        }
    });
};

exports.criar = (req,res) => {
    const livros = req.body;

    cadastroLivroRep.criar(livros, (erro, livroSalvo) => {
        if(erro){
            res.status(500).json({"erro":"Erro No banco"});
        }else{
            res.status(201).json(livroSalvo);
        }
    })
};

exports.buscarPorAutor = (req, res) => {
    const autor = +req.params.autor;

    cadastroLivroRep.buscarPorAutor(autor, (erro, livros) => {
        if(erro){
            res.status(500).json({"erro":"Erro No banco"});
        }else{
            res.json(livros);
            console.log(livros);
        }
    });
};

exports.buscarPorNome = (req, res) => {
    const nome = +req.params.nome;

    cadastroLivroRep.buscarPorAutor(nome, (erro, livros) => {
        if(erro){
            res.status(500).json({"erro":"Erro No banco"});
        }else{
            res.json(livros)
        }
    });
};

