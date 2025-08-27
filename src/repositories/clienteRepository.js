// Daqui mexo na tabela CLIENTES do BD via Sequelize. Faço todo o CRUD previsto.
// As lógicas de validação estarão no Service correspondente
import { Cliente } from "../models/index.js";

class ClienteRepository {

    // Listo todos os clientes
    async listarClientes() {
        return await Cliente.findAll();
    }

    // Encontro um cliente pelo id. Reaproveitarei essa função várias vezes, validando se o cliente existe
    async encontrarPorId(id) {
        return await Cliente.findByPk(id); // Não precisa do where: {id: id}, pois o sequelize já faz isso na findByPk
    }

    // Criar um novo cliente
    async criarCliente(dados) {
        return await Cliente.create(dados);
    }

    // Atualizar cliente existente
    async atualizarCliente(id, dados) {
        return await Cliente.update(dados, { where: { id: id }}) // Poderia ser só where: { id }, já que utiliza o mesmo nome
    }

    // Deletar cliente existente
    async deletarCliente(id) {
        return await Cliente.destroy({ where: { id: id }});
    }
} // Fim da classe ClienteRepository

// Crio a instância na exportação, permitindo utilizar já como objeto, ao invés de criá-lo onde eu importar.
export default new ClienteRepository;