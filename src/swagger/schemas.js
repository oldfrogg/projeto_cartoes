// Centralização dos meus schemas

const Cliente = {
  type: "object",
  properties: {
    id: { type: "integer", example: 1 },
    nome: { type: "string", example: "Jhonatta Tavares" },
    cpf: { type: "string", example: "12345678900"},
    email: { type: "string", example: "jhonatta@hotmail.com" },
    nascimento: { type: "string", format: "date", example: "1990-01-01" },
    limite: { type: "number", format: "float", example: 10000.0 }
  }
};

const Cartao = {
  type: "object",
  properties: {
    id: { type: "integer", example: 1 },
    nome: { type: "string", example: "Ourocard Facil Visa" },
    tipo: { type: "string", example: "credito" },
    anuidade: { type: "number", format: "float", example: 40.0 },
    bandeira: { type: "string", example: "visa" },
    segmento: { type: "string", example: "varejo_pf" },
    status: { type: "boolean", example: true }
  }
};

const Contratacao = {
  type: "object",
  properties: {
    id: { type: "integer", example: 1 },
    cliente_id: { type: "integer", example: 1 },
    cartao_id: { type: "integer", example: 1 },
    data_contratacao: { type: "string", format: "date", example: "2025-01-01" },
    status: { type: "boolean", example: true },
    data_cancelamento: { type: "string", format: "date", example: "2025-01-01" }
  }
};

export { Cliente, Cartao, Contratacao }