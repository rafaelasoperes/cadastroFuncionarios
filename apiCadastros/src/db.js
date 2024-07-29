const { Client} = require('pg');

//parametros necessarios para conectar no banco
const connection = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

//Criando a conexão com o banco
connection.connect((error) => {
    if(error) {
        throw error;
    }
    console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`)
});

module.exports = connection;