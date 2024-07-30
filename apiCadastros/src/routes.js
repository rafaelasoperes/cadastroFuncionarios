const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const cadastroController = require('./controllers/cadastroControllers');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Buscando todos os dados do banco
router.get('/funcionarios', cadastroController.buscarDados);

// Buscando apenas um funcionario
router.get('/funcionario/:id', cadastroController.buscarFuncionario);

// Enviando um novo cadastro de funcionario com imagem
router.post('/funcionario', upload.single('imagem'), cadastroController.inserir);

// Alterando algum cadastro com imagem
router.put('/funcionario/:id', upload.single('imagem'), cadastroController.alterar);

// Excluindo algum cadastro
router.delete('/funcionario/:id', cadastroController.excluir);

module.exports = router;
