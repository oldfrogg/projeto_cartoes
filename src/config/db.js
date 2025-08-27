import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // carrego o .env

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;



// Instância verdadeira
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql'
});


export default sequelize;

// Opções de conexão ao DB:

/*
"development": {
"username": "root",
"password": "senhaaqui",
"database": "PROJETO_CARTOES",
"host": "127.0.0.1",
"dialect": "mysql"
}
*/

// Ou
/*
const sequelize = new Sequelize('mysql::memory:') //
const sequelize = new Sequelize('mysql://root:senhaaqui@localhost:3306/PROJETO_CARTOES) // MySQL usa porta 3306 ou 3307
*/

// Ou
/*
const sequelize = new Sequelize('PROJETO_CARTOES', 'root', 'senhaaqui', {
  host: 'localhost',
  dialect: 'mysql' // Ou: | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle'
});
*/