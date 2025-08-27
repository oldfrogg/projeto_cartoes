# API de gestão do cadastro de Clientes, Cartões bancários e Contratações

A API a seguir é uma uma API RESTful desenvolvida para cumprimento de um projeto acadêmico para finalizar a primeira sprint da Pós Graduação da turma de Dev Foundations da FIAP, feita para gerenciar o cadastro de clientes, cartões bancários e contratações.
O projeto foi desenvolvido utilizando Node.JS, Express e Sequelize.
A documentação está disponível via Swagger.

## Pré-requisitos
- Node.JS 20.9.0
- NPM (Já está incluso no Node.JS)
- MySQL Server 8.4.6
- Express 5.1.0
- Sequelize 6.37.7
- Swagger-JSDoc 6.2.8
- Swagger-UI-Express 5.0.1

## Instalando o projeto

### 1 - Clonando o repositório
- Clonar através do
```bash
git clone https://github.com/oldfrogg/projeto-cartoes
cd projeto-cartoes
```

### 2 - Instalando as dependências
- Instalar as dependências necessárias:

```bash
npm install
```

### 3 - Criando o arquivo .env na raiz do projeto
- Abra o projeto no editor de sua preferência, e, na raiz do projeto, crie um arquivo ".env" e insira as variáveis de ambiente, conforme sua escolha:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=suasenha
DB_NAME=PROJETO_CARTOES
DB_PORT=3306
PORT=3000
```

Atenção! O nome do BD deve ser exatamente "PROJETO_CARTOES" (sem aspas), pois é o nome utilizado no comando SQL de criação do BD.

### 4 - Instalando e configurando o MySQL Server
- Baixe o MySQL Server versão 8.4.6 no https://www.mysql.com/downloads, instale-o e configure-o.
Lembrar de deixar (ou inserir) porta 3306 e anotar a senha cadastrada para o root.

### 5 - Criando o BD
- No terminal, estando na raiz do projeto, execute o seguinte comando para criar o BD:
```bash
mysql -u root -p PROJETO_CARTOES < ./src/config/criarbd.sql
```

### 6 - Verificações no package.json
- Confirme se no "script" do package.json há o seguinte comando, caso não, insira-o:
    "start": "node src/app.js"

- Confirme se o "main" do package.json está o seguinte valor associado: "src/app.js". Caso não, altere-o.

### 7 - Executando a aplicação
- Execute o comando, para rodar a aplicação:
```
npm start
```

### 8 - Abrindo a API pelo Swagger
- Abra a interface da documentação no navegador de sua preferência com a seguinte URL:
http://localhost:3000/api-docs/

## Rotas

### Interface da Documentação
/api-docs

### CLIENTES
GET - /clientes/ - Listar todos os clientes
GET - /clientes/:id - Mostrar um cliente específico a partir de seu ID
POST - /clientes/criar_cliente" - Criar um cliente
PUT - /clientes/atualizar_cliente/:id - Atualizar um cliente existente a partir do seu ID
DELETE - /clientes/deletar_cliente/:id - Deletar um cliente do BD

### CARTÕES
GET - /cartoes/ - Listar todos os cartões
GET - /cartoes/:id - Mostrar um cartão específico a partir de seu ID
POST - /cartoes/criar_cartao - Criar um cartão 
PUT - /cartoes/editar_cartao/:id - Editar um cartão a partir do seu ID
PUT - /cartoes/desativar_cartao/:id - Desativar um cartão (para novas contratações) a partir do seu ID
DELETE - /cartoes/deletar_cartao/:id - Excluir um cartão do BD a partir do seu ID

### CONTRATAÇÕES
GET - /contratacoes/ - Listar todas as contratações
GET - /contratacoes/:id - Mostra uma contratação específica a partir do seu ID
POST - /contratacoes/fazer_contratacao - Faz uma nova contratação
PUT - /contratacoes/cancelar_contratacao/:id - Cancela uma contratação
GET - /contratacoes/contratacoes_cliente/:cliente_id - Mostra todas as contratações já efetuadas por um cliente a partir de seu ID
GET - /contratacoes/cartoes_ativos_cliente/:cliente_id - Mostra todas as contratações ativas de um cliente a partir de seu ID

## Autor
O projeto foi desenvolvido por Jhonatta Tavares.

## Licença

Licença MIT, portanto, é de livre uso, alteração e publicação.

