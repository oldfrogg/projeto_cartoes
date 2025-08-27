import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Contratacao = sequelize.define('Contratacao', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    cliente_id: { type: DataTypes.INTEGER, allowNull: false },
    cartao_id: { type: DataTypes.INTEGER, allowNull: false },
    data_contratacao: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.BOOLEAN, allowNull: false },
    data_cancelamento: { type: DataTypes.DATE, allowNull: true, defaultValue: null }
}, {
    tableName: 'CONTRATACOES',
    timestamps: false
});

export default Contratacao;