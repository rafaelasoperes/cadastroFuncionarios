// criando uma requisição para utilizar o express
const express = require('express');
// utilizando o express para controlar as rotas
const router = express.Router();


const cadastroController = require('./controllers/cadastroControllers');

//Buscando todos os dados do banco
router.get('/funcionarios', cadastroController.buscarDados);

//Buscando apenas um funcionario
router.get('/funcionario/:id', cadastroController.buscarFuncionario);

//Enviando um novo cadastro de funcionario
router.post('/funcionario', cadastroController.inserir);

//Alterando algum cadastro
router.put('/funcionario/:id', cadastroController.alterar);

//Excluindo algum cadastro
router.delete('/funcionario/:id', cadastroController.excluir);



// Exportando as rotas
module.exports = router;