import CartaoService from "../services/cartaoService.js";

class CartaoController {
    async listarCartoes(req, res) {
        try {
            const cartoes = await CartaoService.listarCartoes();
            res.status(200).json(cartoes);
        } catch (erro) {
            console.error(erro);
            res.status(500).json({
                error: "Erro ao listar cartões."
            })
        }
    }

    async encontrarPorId(req, res) {
        try {
            const { id } = req.params;
            const cartao = await CartaoService.encontrarPorId(id);
            res.status(200).json(cartao);
        } catch (erro) {
            console.error(erro);
            res.status(404).json({
                error: erro.message
            })
        }
    }

    async criarCartao(req, res) {
        try {
            const dados = req.body;
            const cartao = await CartaoService.criarCartao(dados);
            res.status(201).json(cartao);
        } catch (erro) {
            console.error(erro);
            res.status(400).json({
                error: erro.message
            })
        }
    }

    async editarCartao(req, res) {
        try {
            const {id} = req.params;
            const dados = req.body;

            const cartaoAtualizado = await CartaoService.editarCartao(id, dados);
            res.status(200).json(cartaoAtualizado)

        } catch (erro) {
            console.error(erro);
            res.status(400).json({
                error: erro.message
            })
        }
    }

    async desativarCartao(req, res) {
        try {
            const {id} = req.params;
            const cartaoDesativado = await CartaoService.desativarCartao(id);
            res.status(200).json(cartaoDesativado)
        } catch(erro) {
            console.error(erro);
            res.status(404).json({
                error: erro.message
            });
        }
    }

    async deletarCartao(req, res) {
        try {
            const { id } = req.params;

            const cartaoDeletado = await CartaoService.deletarCartao(id);
            res.status(201).json({
                message: "Cartão deletado com sucesso"
            })
        } catch (erro) {
            console.error(erro);
            res.status(400).json({
                error: erro.message
            })
        }
    }
}

export default new CartaoController;