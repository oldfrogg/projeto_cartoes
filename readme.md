# API de gestão do cadastro de Clientes, Cartões bancários e Contratações

A API a seguir é uma uma API RESTful desenvolvida para cumprimento de um projeto acadêmico para finalizar a primeira sprint da Pós Graduação da turma de Dev Foundations da FIAP, feita para gerenciar o cadastro de clientes, cartões bancários e contratações.
O projeto foi desenvolvido utilizando Node.JS, Express e Sequelize.
A documentação está disponível via Swagger.

---

O modelo DER utilizado no projeto está na raiz desse projeto, no arquivo "DER.PNG"

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
- Caso tenha o git instalado e configurado nas variáveis de ambiente do sistema, clonar através do
```bash
git clone https://github.com/oldfrogg/projeto_cartoes
cd projeto-cartoes
```
- Também é possível fazer o download do projeto diretamente através do Github.

### 2 - Instalando as dependências
- Abrir o diretório do arquivo através do terminal e instalar as dependências necessárias:

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
- /api-docs

### CLIENTES
- /clientes/ - GET - Listar todos os clientes
- /clientes/:id - GET - Mostrar um cliente específico a partir de seu ID
- /clientes/criar_cliente" - POST - Criar um cliente
- /clientes/atualizar_cliente/:id - PUT - Atualizar um cliente existente a partir do seu ID
- /clientes/deletar_cliente/:id - DELETE - Deletar um cliente do BD

### CARTÕES
- /cartoes/ - GET - Listar todos os cartões
- /cartoes/:id - GET - Mostrar um cartão específico a partir de seu ID
- /cartoes/criar_cartao - POST - Criar um cartão 
- /cartoes/editar_cartao/:id - PUT - Editar um cartão a partir do seu ID
- /cartoes/desativar_cartao/:id - PUT - Desativar um cartão (para novas contratações) a partir do seu ID
- /cartoes/deletar_cartao/:id - DELETE - Excluir um cartão do BD a partir do seu ID

### CONTRATAÇÕES
- /contratacoes/ - GET - Listar todas as contratações
- /contratacoes/:id - GET - Mostra uma contratação específica a partir do seu ID
- /contratacoes/fazer_contratacao - POST - Faz uma nova contratação
- /contratacoes/cancelar_contratacao/:id - PUT - Cancela uma contratação
- /contratacoes/contratacoes_cliente/:cliente_id - GET - Mostra todas as contratações já efetuadas por um cliente a partir de seu ID
- /contratacoes/cartoes_ativos_cliente/:cliente_id - GET - Mostra todas as contratações ativas de um cliente a partir de seu ID

## Autor
O projeto foi desenvolvido por Jhonatta Tavares.

## Licença

Licença MIT, portanto, é de livre uso, alteração e publicação.




