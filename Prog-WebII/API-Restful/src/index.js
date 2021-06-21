// usando const porque não queremos que o valor da variavel mude. E chamamos o express pro nosso projeto
const request  = require('express');
//vai definir um id unico por causa da biblioteca
const {uuid} = require('uuidv4');

const express = require('express'); 

// recebe a instacia do express vamos usar todos os metodos dele
const app = express();

// Serve pra avisar o express que ele vai lidar com arquivos do tipo Json
// É obrigatario fazer isso
app.use(express.json());

const produtos = [];

function logRoutes(request, response, next){
    const {method, url} = request;

    const route = `[${method.toUpperCase()}] ${url}`;

    console.log(route);

    return next();
}

//app.use(logRoutes);

// Primeira rota. entre parenteses são os parametros da função e a arrowFunction pra ir pro corpo da função
// Request: informação passada pelo cliente como dados de um forms.
// Response: usar os métodos que o express implementa, pra responder ao cliente
app.get('/projetos', logRoutes, (request, response) => {
    const {nome} = request.query

    // ? funciona como um if e o : como else
    const resultado = nome 
        ? produtos.filter(produto => produto.nome.includes(nome))
        : produtos
    return response.json(resultado);
});

app.post('/projetos', (request, response) => {
    const {nome, preco} = request.body
    
    const id = uuid();

    const produto = {
        id,
        nome,
        preco
    };

    produtos.push(produto);
    return response.json(produto)
});

app.put('/projetos/:id',(request, response) =>{
    const {id} = request.params;
    const {nome, preco} = request.body
    
    const produtoIndex = produtos.findIndex(produto => produto.id == id);

    // o fidIndex retorna -1 se não encontra nada
    if(produtoIndex < 0){
        return response.status(400).json({error: 'Produto não encontrado'});
    }

    const produto = {
        id, 
        nome,
        preco
    };
    
    produtos[produtoIndex] = produto;
    return response.json(produto)
});

app.delete('/projetos/:id', (request, response) => {
    const {id} = request.params;

    const produtoIndex = produtos.findIndex(produto => produto.id == id)
    
    if(produtoIndex < 0){
        return response.status(400).json({error: 'Produto não encontrado'})    
    }

    produtos.splice(produtoIndex, 1);

    return response.status(204).json([]);
})

// endereço
app.listen(3000, () => {
    // mensagem que aparece no terminar só pra avisar que startou o servidor
    console.log('Backend started! XD')
});


