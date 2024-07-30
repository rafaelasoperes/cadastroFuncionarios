# Projeto de Cadastro de Funcionários

Este projeto é uma aplicação de gerenciamento de funcionários desenvolvida com Angular e TypeScript no frontend, Node.js e Express no backend, e PostgreSQL como Sistema de Gerenciamento de Banco de Dados (SGBD). A aplicação permite adicionar, editar, visualizar e excluir funcionários.

## Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- Angular CLI (versão 12 ou superior)
- PostgreSQL (versão 12 ou superior)

### Clonando o repositório

```bash
git clone https://github.com/rafaelasoperes/cadastroFuncionarios.git
cd cadastroFuncionarios
```

### Backend

1 - Navegue até o diretório do backend:

```bash
cd apiCadastros
```

2 - Instale as dependências do backend:

```bash
npm install
```

### Frontend 

1 - Navegue até o diretório do frontend:

```bash
cd cadastro-funcionarios
```

2 - Instale as dependências do frontend:

```bash
npm install
```

### Configuração

#### Banco de dados

1 - Crie um banco de dados PostgreSQL:

```bash
CREATE DATABASE dbapiCadastros;
```
2 - Tabela modelo;

```bash
CREATE TABLE usuarios (
     id serial PRIMARY KEY,
     nome varchar(50),
     genero varchar(20),
     telefone varchar (15),
     nascimento date,
     estadocivil varchar,
     rua varchar(40),
     numero int,
     complemento varchar(20),
     bairro varchar(20),
     cidade varchar(20),
     estado varchar(20)
);
```

3 - Configure as variáveis de ambiente do backend. Crie um arquivo variaveis.env na raiz do diretório apiCadastros com as seguintes informações:

```bash
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
DB_PORT=5432
PORT=3000
```
### Frontend 

1 - Configure o arquivo funcionarios.service.ts no diretório src/app/funcionarios.service.ts do frontend com a URL da API:

```bash
export class FuncionariosService {
  private apiUrl = 'http://localhost:3000/api';

....
```

### Execução 

#### Backend

1 - Navegue até o diretório do backend:

```bash
cd apiCadastros
```

2 - Inicie o servidor:

```bash
npm start
```

O servidor estará em execução em http://localhost:3000.

### Frontend 

1 - Navegue até o diretório do frontend:

```bash
cd cadastro-funcionarios
```

2 - Inicie a aplicação Angular:

```bash
ng serve
```

A aplicação estará em execução em http://localhost:4200

### Funcionalidades 

- Adicionar um novo funcionário
- Editar um funcionário existente
- Visualizar a lista de funcionários
- Excluir um funcionário

### Estrutura do Projeto

```bash
nome-do-repositorio/
│
├── apiCadastros/       # Backend (Node.js, Express)
│   ├── src/
│   ├── .env            # Arquivo de configuração das variáveis de ambiente
│   └── package.json    # Dependências do backend
│
├── cadastro-funcionarios/  # Frontend (Angular, TypeScript)
│   ├── src/
│   ├── angular.json    # Configurações do Angular
│   └── package.json    # Dependências do frontend
│
└── README.md           # Documentação do projeto

```

#### Dependências

### Backend

- express
- pg
- dotenv

### Frontend

- @angular/core
- @angular/material
- @angular/forms
- rxjs
