import { Cartao, Cliente, Contratacao } from "../models/index.js";

class ContratacaoRepository {

    // Listar todas as contratações
    async listarContratacoes() {
        return await Contratacao.findAll();
    }

    // Encontrar contratacao por id 
    async encontrarPorId(id) {
        return await Contratacao.findByPk(id);
    }

    // Fazer uma contratação
    async fazerContratacao(dados) { // Vou passar todos os dados, pois estou criando uma contratação nova
        return await Contratacao.create(dados);
    }

    // Cancelar uma contatação existente
    // Pego apenas os dados necessários para saber qual cartão de qual cliente, e faço o update do status
    async cancelarContratacao(id) { // Ou já desestruturava em ({ cliente_id, cartao_id }), sem precisar acessar o objeto dados no where
        return await Contratacao.update(
            {
                status: false,
                data_cancelamento: new Date()
            },
            { where: { id: id }, status: true }
        );
    }

    // Listar Contratações de um cliente
    async contratacoesCliente(cliente_id) {
        return await Contratacao.findAll({
            where: { cliente_id: cliente_id },
            include: [{
                model: Cartao,
                attributes: ["nome", "tipo", "bandeira", "segmento"]
            },
            {
                model: Cliente,
                attributes: ["nome", "cpf", "limite"]
            }]
        });
    }

    // Listar os cartões que o cliente atualmente possui
    async cartoesAtivosPorCliente(cliente_id) {
        const contratacoesAtivas = await Contratacao.findAll({ // SELECT * FROM Contratacao WHERE cliente_id = cliente_id AND status = 1
            where: {
                cliente_id: cliente_id,
                status: true
            },
            include: [{ // JOIN com a tabela CARTAO
                model: Cartao,
                attributes: ["nome", "tipo", "bandeira", "segmento"]
            },
            {
                model: Cliente,
                attributes: ["nome", "cpf", "limite"]
            }]
        })
        // return contratacoesAtivas.map(contratacao => contratacao.Cartao) // Cartao é do model Cartao que incluí com o 'include'
        return contratacoesAtivas;
    }
}

export default new ContratacaoRepository;