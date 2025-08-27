import { ContratacaoRepository, ClienteRepository, CartaoRepository } from "../repositories/index.js";
class ContratacaoService {

    // Listar todas as contratações já feitas
    async listarContratacoes() {
        return await ContratacaoRepository.listarContratacoes();
    };

    // Encontra uma contratação através do seu id
    async encontrarPorId(id) {
        if (isNaN(id)) throw new Error("Id inválido");
 
        const contratacao = await ContratacaoRepository.encontrarPorId(id);
        if (!contratacao) throw new Error("Id da contratação inexistente.");

        return contratacao;
    };

    // Cliente faz contratação de um cartão: (CLIENTE_ID, CARTAO_ID, DATA_CONTRATACAO, STATUS)
    async fazerContratacao(dados) {
        // Ver se cliente existe
        const cliente = await ClienteRepository.encontrarPorId(dados.cliente_id);
        if (!cliente) throw new Error("Cliente não encontrado");

        // Ver se cartao existe
        const cartao = await CartaoRepository.encontrarPorId(dados.cartao_id);
        if (!cartao) throw new Error("Cartão não encontrado");
        if (!cartao.status) throw new Error("Contratação recusada: cartão não está mais ativo.")

        const contratacao = await ContratacaoRepository.fazerContratacao({
            cliente_id: dados.cliente_id,
            cartao_id: dados.cartao_id,
            data_contratacao: new Date(), // data atual
            status: true
        });
        return { contratacao, message: "Contratação realizada com sucesso!" };
    };

    // Cancela a contratação: muda o status de cartão contratado para false
    async cancelarContratacao(id) {

        const contratacaoCancelada = await ContratacaoRepository.cancelarContratacao(id);

        if (contratacaoCancelada[0] === 0) {
            throw new Error("Nenhuma contratação ativa para este id de contratação.")
        }

        return { message: "Contratação cancelada com sucesso!" }

    };

    // Lista todas as contratações que um cliente já fez
    async contratacoesCliente(cliente_id) {
        const contratacoesCliente = await ContratacaoRepository.contratacoesCliente(cliente_id);
        if (contratacoesCliente.length === 0) {
            throw new Error("Nenhuma contratação encontrada para este cliente.")
        }
        return contratacoesCliente;
    };

    // Lista todos os cartões ativos de um cliente
    async cartoesAtivosPorCliente(cliente_id) {
        // Ver se cliente existe
        const cliente = await ClienteRepository.encontrarPorId(cliente_id);
        if (!cliente) {
            throw new Error("Cliente não encontrado")
        };

        const cartoesAtivosPorCliente = await ContratacaoRepository.cartoesAtivosPorCliente(cliente_id);
        return cartoesAtivosPorCliente;
    };
}

export default new ContratacaoService;