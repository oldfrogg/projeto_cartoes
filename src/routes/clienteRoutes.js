// Aqui crio todas as rotas relacionadas à tabela 'CLIENTES'

import { Router } from "express";
import { ClienteController } from "../controllers/index.js";

const router = Router();

// Listar todos os clientes
// Poderia ser:
// router.get("/", ClienteController.listaClientes);


// Listar todos os clientes
router.get("/", (req, res) => { ClienteController.listarClientes(req, res) });

// Buscar cliente por ID
router.get("/:id", (req, res) => ClienteController.buscarPorId(req, res));

// Criar novo cliente
router.post("/criar_cliente", (req, res) => ClienteController.criarCliente(req, res));

// Atualizar cliente existente
router.put("/atualizar_cliente/:id", (req, res) => ClienteController.atualizarCliente(req, res));

// Deletar cliente existente
router.delete("/deletar_cliente/:id", (req, res) => ClienteController.deletarCliente(req, res));






export default router;