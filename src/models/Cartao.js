import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Cartao = sequelize.define('Cartao', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: DataTypes.STRING(64), allowNull: false },
    tipo: { type: DataTypes.ENUM('credito', 'debito', 'multiplo', 'pre_pago'), allowNull: false },
    anuidade: { type: DataTypes.DECIMAL(5,2), allowNull: false },
    bandeira: { type: DataTypes.ENUM('visa', 'mastercard', 'elo'), allowNull: false },
    segmento: { type: DataTypes.ENUM('varejo_pf', 'estilo', 'private', 'mei', 'empresarial', 'corporate'), allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: 1 }
}, {
    tableName: 'CARTOES',
    timestamps: false
});

export default Cartao;

