const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cadastro_livros"
});

conexao.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = conexao;