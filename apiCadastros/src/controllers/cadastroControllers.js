//Estou requisitando o arquivo para ele começar a ser enxergado pelo controller
const cadastroService = require('../services/cadastroService');

module.exports = {
    //Buscando todos os funcionários
    buscarDados: async (req, res) => {
        let json = { error: '', result: [] };
    
        try {
            let funcionarios = await cadastroService.buscarDados();
    
            for (let i in funcionarios) {
                json.result.push(funcionarios[i]); // Adiciona todo o objeto ao array de resultado
            }
            res.json(json);
        } catch (error) {
            json.error = error.message;
            res.status(500).json(json); // Adiciona um status de erro no caso de falha
        }
    },
    //Buscando apenas 1 funcionário pelo seu ID
    buscarFuncionario: async (req,res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;

        let funcionario = await cadastroService.buscarFuncionario(id);

        if(funcionario) {
            json.result = funcionario;
        }

        res.json(json);

    },
    //Inserindo novo funcionário
    inserir: async (req, res) => {
        let json = {error: '', result: {}};

        let data = req.body;

        if (Object.keys(data).length > 0) {
            try {
                let cadastroID = await cadastroService.inserir(data);
                json.result = { id: cadastroID, ...data };
                console.log('Funcionário inserido com sucesso:', json.result); // Log do sucesso
            } catch (error) {
                json.error = 'Erro ao inserir dados';
                console.error('Erro ao inserir dados:', error); // Log do erro
            }
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },
    // Editando um funcionário
    alterar: async (req, res) => {
        let json = {error: '', result: {}};

        let id = req.params.id;
        let data = req.body;

        console.log("ID:", id);
        console.log("Data:", data);

        if (id && Object.keys(data).length > 0) {
            try {
                let rowsAffected = await cadastroService.alterar(id, data);
                if (rowsAffected > 0) {
                    json.result = { id, ...data };
                } else {
                    json.error = 'Funcionário não encontrado';
                }
            } catch (error) {
                json.error = 'Erro ao atualizar dados';
                console.error('Erro:', error);
            }
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    //Excluindo funcionário
    excluir: async(req,res) => {
        let json = {error:'', result:{}};
        await cadastroService.excluir(req.params.id);

        res.json(json);
    }
}