export const clientePaths = {
    "/clientes": {
        get: {
            summary: "Lista todos os clientes",
            tags: ["Clientes"],
            responses: {
                200: {
                    description: "Consulta de clientes efetuada com sucesso.",
                    content: {
                        "application/json": {
                            schema: { type: "array", items: { $ref: "#/components/schemas/Cliente" } }
                        }
                    }
                },
                500: {
                    description: "Erro interno no servidor"
                }
            }
        }
    },

    "/clientes/{id}": {
        get: {
            summary: "Mostra o cliente selecionado",
            tags: ["Clientes"],
            parameters: [ // Parâmetros virão na URL
                {
                    name: "id",
                    in: "path",
                    required: true,
                    schema: { type: "integer" },
                    description: "ID do cliente"
                }
            ],
            responses: {
                200: {
                    description: "Consulta de cliente efetuada com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#components/schemas/Cliente" }
                        }
                    }
                },
                404: {
                    description: "Cliente não encontrado."
                }
            }
        },
    },

    "/clientes/criar_cliente": {
        post: {
            summary: "Criar um cliente",
            tags: ["Clientes"],
            requestBody: { // Parâmetros virão no body
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Cliente" }
                    }
                }
            },
            responses: {
                201: {
                    description: "Cliente criado com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#components/schemas/Cliente" }
                        }
                    }
                },
                400: {
                    description: "Dados inválidos"
                }
            }
        }
    },

    "/clientes/atualizar_cliente/{id}": {
        put: {
            summary: "Atualizar um cliente",
            tags: ["Clientes"],
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                schema: { type: "integer" },
                description: "Id do cliente"
            }],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: { $ref: "#/components/schemas/Cliente" }
                    }
                }
            },
            responses: {
                200: {
                    description: "Cliente atualizado com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#components/schemas/Cliente" }
                        }
                    }
                },
                400: {
                    description: "Dados inválidos"
                }
            }
        }
    },

    "/clientes/deletar_cliente/{id}": {
        delete: {
            summary: "Excluir cliente do BD",
            tags: ["Clientes"],
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                schema: { type: "integer" },
                description: "Id do cliente"
            }],
            responses: {
                200: {
                    description: "Cliente excluído da base com sucesso",
                    content: {
                        "application/json": {
                            schema: { $ref: "#components/schemas/Cliente" }
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