const {Client} = require ('pg');

const conexao = {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "123456789",
    database: "crud_produtos" 
}

async function listar(){
    const cliente = new Client(conexao);

    await cliente.connect();

    const sql = await cliente.query("SELECT * FROM produtos");
    console.log(sql.rows);

    await cliente.end();
}

async function inserir(produto){
    const cliente = new Client(conexao);
    
    await cliente.connect();
    
    const sql = await cliente.query("INSERT INTO produtos(nome, preco) VALUES($1, $2)", [produto.nome, produto.preco])
    console.log(sql.rows);

    await cliente.end();
}


async function atualizar(produtos, id){
    const cliente = new Client(conexao);
    
    await cliente.connect();
    
    const sql = await cliente.query("UPDATE produtos SET nome = $1, preco = $2 WHERE id = $3", [produtos.nome, produtos.preco, id])
    console.log(sql.rows);

    await cliente.end();
}

async function deletar(id){
    const cliente = new Client(conexao);
    
    await cliente.connect();
    
    const sql = await cliente.query("DELETE FROM produtos WHERE id = $1", [id])
    console.log(sql.rows);

    await cliente.end();
}

listar();
//inserir({nome: "produto1", preco: 10});
//atualizar({nome: "produto4", preco: 40}, 4);
//deletar()/