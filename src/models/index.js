import Cliente from "./Cliente.js"
import Cartao from "./Cartao.js"
import Contratacao from "./Contratacao.js"

Cliente.hasMany(Contratacao, { foreignKey: "cliente_id" }); // hasMany: Relacionamento 1:N
Cartao.hasMany(Contratacao, { foreignKey: "cartao_id" });

Contratacao.belongsTo(Cliente, { foreignKey: "cliente_id" }); // belongsTo: N:1
Contratacao.belongsTo(Cartao, { foreignKey: "cartao_id" });


export { Cliente, Cartao, Contratacao }