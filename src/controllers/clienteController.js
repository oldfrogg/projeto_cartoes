// Camada de requisições e respostas http. Recebo parâmetros das rotas e transfiro da forma correta
//      ao Service, para que faça as validações antes de chamar o Repository que mexerá no BD.
// Aqui não uso return, mas sim res.status(000).json({...}), e todas as funções recebem req, res 
//      como parâmetro, mesmo que nem sempre utilizem o req

import { ClienteService } from "../services/index.js"


class ClienteController {
    // Listar todos os clientes
    async listarClientes(req, res) {
        try {
            const clientes = await ClienteService.listarClientes();
            res.status(200).json(clientes);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({
                error: "Erro ao listar clientes"
            });
        }
    }

    async buscarPorId(req, res) {
        console.log(req.params);
        try {
            const { id } = req.params;
            const cliente = await ClienteService.encontrarPorId(id);
            res.status(200).json(cliente);
        } catch (erro) {
            console.error(erro);
            res.status(404).json({ error: erro.message })
        }
    }

    // Criar um novo cliente
    async criarCliente(req, res) {
        try {
            const dados = req.body;

            // Cria o cliente via Service
            const cliente = await ClienteService.criarCliente(dados);
            res.status(201).json(cliente);

        } catch (erro) {
            console.error(erro);
            res.status(400).json({ error: erro.message });
        }
    }

    // Atualizar cliente existente
    async atualizarCliente(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body;

            const clienteAtualizado = await ClienteService.atualizarCliente(id, dados);
            res.status(201).json({ message: "Cliente atualizado com sucesso", clienteAtualizado });

        } catch (erro) {
            console.error(erro);
            res.status(400).json({ error: erro.message });
        }
    }

    // Deletar cliente existente
    async deletarCliente(req, res) {
        try {
            const { id } = req.params;
            await ClienteService.deletarCliente(id);
            res.status(200).json({ message: "Cliente deletado com sucesso" });
        } catch (erro) {
            console.error(erro);
            res.status(404).json({ error: erro.message });
        }
    }

} // Fim da classe ClienteController


// Crio a instância na exportação, permitindo utilizar já como objeto, ao invés de criá-lo onde eu importar.
export default new ClienteController;