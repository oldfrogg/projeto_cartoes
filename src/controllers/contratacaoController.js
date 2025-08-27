import { ContratacaoService } from "../services/index.js";

class ContratacaoController {


    async listarContratacoes(req, res) {
        try {
            const contratacoes = await ContratacaoService.listarContratacoes();
            res.status(200).json(contratacoes);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({
                error: "Erro ao listar contratações"
            });
        }
    }

    async encontrarPorId(req, res) {
        try {
            const { id } = req.params;
            const contratacao = await ContratacaoService.encontrarPorId(id);
            res.status(200).json(contratacao)
        } catch (erro) {
            console.error(erro);
            res.status(500).json({ error: erro.message })
        }
    }

    async fazerContratacao(req, res) {
        try {
            const dados = req.body;
            const contratacaoRealizada = await ContratacaoService.fazerContratacao(dados);
            res.status(201).json(contratacaoRealizada)
        } catch (erro) {
            console.error(erro);
            res.status(400).json({ error: erro.message });
        }
    }

    async cancelarContratacao(req, res) {
        try {
            const {id} = req.params;
            const contratacaoCancelada = await ContratacaoService.cancelarContratacao(id);
            res.status(200).json({ contratacao: contratacaoCancelada, message: "Contratação cancelada com sucesso." })
        } catch (erro) {
            console.error(erro);
            res.status(400).json({ error: erro.message })
        }
    }

    async contratacoesCliente(req, res) {
        try {
            const cliente_id = Number(req.params.cliente_id);
            const contratacoes = await ContratacaoService.contratacoesCliente(cliente_id);
            res.status(200).json(contratacoes);
        } catch (erro) {
            console.error(erro);
            res.status(404).json({ error: erro.message });
        }
    }

    async cartoesAtivosPorCliente(req, res) {
        try {
            const cliente_id = req.params.cliente_id;
            const cartoesAtivos = await ContratacaoService.cartoesAtivosPorCliente(cliente_id);
            res.status(200).json(cartoesAtivos);
        } catch (erro) {
            console.error(erro);
            res.status(404).json({ error: erro.message });
        }
    }
}


export default new ContratacaoController;