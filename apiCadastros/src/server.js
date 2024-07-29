// Criando a requisição do dotenv, ele que vai auxiliar na utilização do ambiente das variaveis passando o caminho do arquivo que vamos utilizar.
// ou seja, vai ser uma dependencia que esta sendo utilizada para conseguir ler outro arquivo.

require('dotenv').config({path:'variaveis.env'});
//Tambem vou utilizar o express dentro desse arquivo de servidor
const express = require('express');
//utilizando o cors para evitar problemas de compartilhamento entre navegadores
const cors = require('cors');

//Utilizando o body-parse para converter o body da requisição para outros tipos de formato
const bodyParser = require('body-parser');

//disponibilizando o caminho das rotas do projeto.
const routes = require("./routes");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
})