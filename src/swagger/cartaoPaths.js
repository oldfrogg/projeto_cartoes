export const cartaoPaths = {
    "/cartoes": {
        get: {
            summary: "Lista todos os cartoes",
            tags: ["Cartoes"],
            responses: {
                200: {
                    description: "Consulta de cartões efetuada com sucesso",
                    content: {
                        "application/json": {
                            schema: { type: "array", items: { $ref: "#/components/schemas/Cartao" } }
                        }
                    }
                },
                500: {
                    description: "Erro interno no servidor"
                }
            }
        },
    },

    "/cartoes/{id}": {
        get: {
            summary: "Mostra o cartão selecionado",
            tags: ["Cartoes"],
            parameters: [ // Parâmetros virão na URL
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" },
                    description: "ID do cartão"
                }
            ],
            responses: {
                200: {
                    description: "Consulta de cartão efetuada com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#components/schemas/Cartao" }
                        }
                    }
                },
                404: {
                    description: "Cartão não encontrado."
                }
            }
        },
    },

    "/cartoes/criar_cartao": {
        post: {
            summary: "Criar um cartão",
            tags: ["Cartoes"],
            requestBody: { // Parâmetros virão no body
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Cartao" }
                    }
                }
            },
            responses: {
                201: {
                    description: "Cartão criado com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#components/schemas/Cartao" }
                        }
                    }
                },
                400: {
                    description: "Dados inválidos"
                }
            }
        }
    },

    "/cartoes/editar_cartao/{id}": {
        put: {
            summary: "Atualizar um cartão",
            tags: ["Cartoes"],
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                schema: { type: "integer" },
                description: "Id do cartão"
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Cartao" }
                    }
                }
            },
            responses: {
                200: {
                    description: "Cartão atualizado com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#components/schemas/Cartao" }
                        }
                    }
                },
                400: {
                    description: "Dados inválidos"
                }
            }
        }
    },

    "/cartoes/desativar_cartao/{id}": {
        put: {
            summary: "Desativar um cartão",
            tags: ["Cartoes"],
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                schema: { type: "integer" },
                description: "Id do cartão"
            }],
            responses: {
                200: {
                    description: "Cartão desativado com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#components/schemas/Cartao" }
                        }
                    }
                },
                400: {
                    description: "Dados inválidos"
                }
            }
        }
    },

    "/cartoes/deletar_cartao/{id}": {
        delete: {
            summary: "Excluir cartão do BD",
            tags: ["Cartoes"],
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                schema: { type: "integer" },
                description: "Id do cartão"
            }],
            responses: {
                200: {
                    description: "Cartão excluído da base com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#components/schemas/Cartao" }
                        }
                    }
                },
                400: {
                    description: "Dados inválidos"
                }
            }
        }

    }
};