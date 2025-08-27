import { DataTypes } from "sequelize"; // para poder definir os tipos de dados
import sequelize from "../config/db.js"; // importando os dados do DB, definido em db.js

const Cliente = sequelize.define('Cliente', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: DataTypes.STRING(100), allowNull: false },
    cpf: { type: DataTypes.STRING(11), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(255), allowNull: false },
    nascimento: { type: DataTypes.DATEONLY, allowNull: false },
    limite: { type: DataTypes.DECIMAL(8, 2), defaultValue: 0.00 }
}, {
    tableName: 'CLIENTES',
    timestamps: false
});


export default Cliente;