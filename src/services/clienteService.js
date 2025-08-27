// Aqui aplico as regras de negócio referentes à CLIENTES
import { ClienteRepository } from "../repositories/index.js";


// Classe contendo todos os métodos relacionados às queries da tabela CLIENTES
class ClienteService {
    // Listar todos os clientes
    async listarClientes() {
        return await ClienteRepository.listarClientes();
    }

    // Encontro um cliente pelo id. Reaproveitarei essa função várias vezes, validando se o cliente existe
    async encontrarPorId(id) {
        if (isNaN(id)) {
            throw new Error("Id inválido.")
        };

        const cliente = await ClienteRepository.encontrarPorId(id);

        if (!cliente) {
            throw new Error("Cliente não encontrado")
        }
        return cliente;
    }

    // Criar um novo cliente
    async criarCliente(dados) {

        if (!dados.nome || dados.nome.trim() === "") {
            throw new Error("Nome é obrigatório");
        }

        if (!dados.cpf || !/^\d{11}$/.test(dados.cpf)) {
            throw new Error("CPF inválido (apenas 11 números)");
        }

        if (!dados.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(dados.email)) {
            throw new Error("Email inválido");
        }

        if (dados.limite === undefined) dados.limite = 0;

        if (dados.limite < 0 || dados.limite > 1000000.00) {
            throw new Error("Limite deve estar entre 0 e 1.000.000");
        }
        return await ClienteRepository.criarCliente(dados);
    }

    // Atualizar cliente existente
    async atualizarCliente(id, dados) {
        await this.encontrarPorId(id); // verifico se existe cliente com esse id
        return await ClienteRepository.atualizarCliente(id, dados);
    }

    // Deletar cliente existente
    async deletarCliente(id) {
        await this.encontrarPorId(id); // verifico se existe cliente com esse id
        return await ClienteRepository.deletarCliente(id);
    }

} // Fim da classe ClienteService

// Crio a instância na exportação, permitindo utilizar já como objeto, ao invés de criá-lo onde eu importar.
export default new ClienteService();