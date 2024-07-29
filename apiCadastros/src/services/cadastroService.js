//chamando a conexão com o banco
const db = require('../db')
// Realizando os comandos no banco de dados , a partir da interação feita na api
module.exports = {
    buscarDados: () => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM funcionarios', (error, results) => {
                if(error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.rows);
            });
        });
    },
    
    buscarFuncionario: (id) => {
        return new Promise((aceito, rejeitado) => {
            const query = 'SELECT * FROM funcionarios WHERE id=$1';
            const values = [id];
            db.query(query, values, (error, results) => {
                if(error) {
                    rejeitado(error);
                    return;
                }
                if (results.rows.length > 0) {
                    aceito(results.rows[0]);
                }else {
                    aceito(false);
                }

            });
        });
    },

    inserir: (data) => {
        return new Promise((aceito, rejeitado) => {
            // Extraindo as chaves e valores dos dados fornecidos
            const keys = Object.keys(data);
            const values = Object.values(data);

            // Construindo dinamicamente a query SQL
            const fields = keys.join(', ');
            const placeholders = keys.map((_, index) => `$${index + 1}`).join(', ');

            const query = `INSERT INTO funcionarios (${fields}) VALUES (${placeholders}) RETURNING id`;

            db.query(query, values, (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.rows[0].id);
            });
        });
    },

    alterar: (id, data) => {
        return new Promise((aceito, rejeitado) => {
            // Extraindo as chaves e valores dos dados fornecidos
            const keys = Object.keys(data);
            const values = Object.values(data);

            // Construindo dinamicamente a query SQL
            const setClause = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');

            const query = `UPDATE funcionarios SET ${setClause} WHERE id = $${keys.length + 1}`;

            db.query(query, [...values, id], (error, results) => {
                if (error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.rowCount);
            });
        });
    },

    excluir: (id) => {
        return new Promise((aceito, rejeitado) => {
            const query = 'DELETE FROM funcionarios WHERE id=$1';
            const values = [id]
            db.query(query, values, (error, results) => {
                if(error) {
                    rejeitado(error);
                    return;
                }
                aceito(results.rows);
            });
        });
    },
};