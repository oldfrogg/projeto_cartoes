export const contratacaoPaths = {
    "/contratacoes": {
        get: {
            summary: "Lista todas as contratações.",
            tags: ["Contratacoes"],
            responses: {
                200: {
                    description: "Consulta de contratações efetuada com sucesso.",
                    content: {
                        "/application/json": {
                            schema: {
                                type: "array", items: { $ref: "#/components/schemas/Contratacao" }
                            }
                        }
                    }
                },
                500: {
                    description: "Erro interno do servidor"
                }
            }
        }
    },

    "/contratacoes/{id}": {
        get: {
            summary: "Mostra a contratação requisitada",
            tags: ["Contratacoes"],
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                schema: { type: "integer" },
                description: "Id da contratação"
            }],
            responses: {
                200: {
                    description: "Consulta de contratação efetuada com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Contratacao" }
                        }
                    }
                },
                400: {
                    description: "Id da contratação não encontrada"
                }
            }
        }
    },

    "/contratacoes/fazer_contratacao": {
        post: {
            summary: "Fazer uma contratação",
            tags: ["Contratacoes"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Contratacao" }
                    }
                }
            },
            responses: {
                201: {
                    description: "Contratação efetuada com sucesso!",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Contratacao" }
                        }
                    }
                },
                400: {
                    description: "Dados inválidos"
                }
            }
        }
    },

    "/contratacoes/cancelar_contratacao/{id}": {
        put: {
            summary: "Cancelar a contratação de um cartão",
            tags: ["Contratacoes"],
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                schema: { type: "integer" },
                description: "Id da contratação"
            }],
            responses: {
                200: {
                    description: "Cancelamento efetuado com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Contratacao" }
                        }
                    }
                },
                400: {
                    description: "Dados inválidos"
                }
            }
        }
    },

    "/contratacoes/contratacoes_cliente/{cliente_id}": {
        get: {
            summary: "Mostra todas as contratações de um cliente",
            tags: ["Contratacoes"],
            parameters: [{
                name: "cliente_id",
                in: "path",
                required: true,
                schema: { type: "integer" },
                description: "Id do cliente consultado"
            }],
            responses: {
                200: {
                    description: "Consulta efetuada com sucesso",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: { $ref: "#/components/schemas/Contratacao" }
                            }
                        }
                    }
                },
                400: {
                    description: "Dados inválidos"
                }
            }
        }
    },


    "/contratacoes/cartoes_ativos_cliente/{cliente_id}": {
        get: {
            summary: "Mostra todas as contratações ativas de um cliente",
            tags: ["Contratacoes"],
            parameters: [{
                name: "cliente_id",
                in: "path",
                required: true,
                schema: { type: "integer" },
                description: "Id do cliente consultado"
            }],
            responses: {
                200: {
                    description: "Consulta efetuada com sucesso",
                    content: {
                        "application/json": {
                            schema: {
                                type: "array",
                                items: { $ref: "#/components/schemas/Contratacao" }
                            }
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

