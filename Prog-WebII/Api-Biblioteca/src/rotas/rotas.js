const express = require('express');
const rotas = express.Router();
const cadastroLivro = require('../controller/cadastroLivro');

rotas.get('/', cadastroLivro.listar);
rotas.post('/', cadastroLivro.criar);
rotas.get('/:autor', cadastroLivro.buscarPorAutor);
rotas.get('/:nome', cadastroLivro.buscarPorNome);


module.exports = rotas;