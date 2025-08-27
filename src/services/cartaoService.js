import { CartaoRepository } from "../repositories/index.js"

const TIPOS = ["credito", "debito", "multiplo", "pre_pago"];
const BANDEIRAS = ["visa", "mastercard", "elo"];
const SEGMENTOS = ["varejo_pf", "estilo", "private", "mei", "empresarial", "corporate"];


class CartaoService {

    _validardados(dados) {
        if (!dados.nome || dados.nome.trim() === "" || !(typeof dados.nome === "string")) {
            throw new Error("Nome é obrigatório, e deve ser string.");
        }

        if (!TIPOS.includes(dados.tipo)) {
            throw new Error(`Tipo do cartão é obrigatório e deve ser igual a ${TIPOS.join(", ")}`)
        }

        if (typeof dados.anuidade !== "number") {
            throw new Error("Valor da anuidade precisa ser um número, podendo ser decimal com 2 casas.")
        }

        if (!BANDEIRAS.includes(dados.bandeira)) {
            throw new Error(`Bandeira do cartão é obrigatória e deve ser igual ${BANDEIRAS.join(", ")}`)
        }

        if (!SEGMENTOS.includes(dados.segmento)) {
            throw new Error(`Segmento do cartão é obrigatório e deve ser igual a ${SEGMENTOS.join(", ")}`)
        }

        if (typeof dados.status !== "boolean") {
            throw new Error("Status do cartão deve ser um valor booleano, definindo se o cartão está sendo comercializado ou não.")
        }
    }

    // Listar todos os cartões
    async listarCartoes() {
        return await CartaoRepository.listarCartoes();
    };

    // Buscar cartao por id
    async encontrarPorId(id) {
        const cartao = await CartaoRepository.encontrarPorId(id);

        if (!cartao) {
            throw new Error("Cartão não encontrado");
        }
        return cartao;
    };

    // Criar cartao novo
    async criarCartao(dados) {

        this._validardados(dados);

        return await CartaoRepository.criarCartao(dados);
    };

    // Editar cartao
    async editarCartao(id, dados) {
        await this.encontrarPorId(id);
        this._validardados(dados);

        const [atualizados] = await CartaoRepository.editarCartao(id, dados);

        if (atualizados === 0) {
            throw new Error("Não foi possível atualizar o cartão.");
        }
        return await this.encontrarPorId(id)
    };

    async desativarCartao(id) {
        await this.encontrarPorId(id);
        const [desativados] = await CartaoRepository.desativarCartao(id);
        if (desativados === 0) {
            throw new Error("Cartão não encontrado ou já desativado.")
        }
        return {message: "Cartão desativado com sucesso!"};
    }

    async deletarCartao(id) {
        await this.encontrarPorId(id);
        const deletados = await CartaoRepository.deletarCartao(id);
        if (deletados === 0) {
            throw new Error("Não foi possível deletar o cartão.")
        }
        return {message: "Cartão deletado da base de dados."};
    }

}

export default new CartaoService;