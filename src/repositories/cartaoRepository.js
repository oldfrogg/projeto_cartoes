import { Cartao } from "../models/index.js";

class CartaoRepository {

    // Listar todos os cartões
    async listarCartoes() {
        return await Cartao.findAll();
    };

    // Buscar cartao por id
    async encontrarPorId(id) {
        return await Cartao.findByPk(id);
    };

    // Criar cartao novo
    async criarCartao(dados) {
        return await Cartao.create(dados);
    };

    // Editar cartao
    async editarCartao(id, dados) {
        return await Cartao.update(dados, { where: { id: id } } );
    };

    async desativarCartao(id) {
        return await Cartao.update({status: false}, {where: { id: id }})
    }

    async deletarCartao(id) {
        return await Cartao.destroy( { where: { id: id } });
    }
}


export default new CartaoRepository;