const express = require('express');

const app = express();
const port = 3000;

app.use(express.json()) ;// for parsing application/json
app.use(express.urlencoded({ extended: true }))

const livroRota = require('./rotas/rotas');
app.use('/api/livros',livroRota );

app.listen(port, () => {
    console.log("Server started!");
});