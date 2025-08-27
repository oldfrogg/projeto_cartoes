import { Router } from "express";
import CartaoController from "../controllers/cartaoController.js";

const router = Router();

router.get("/", (req, res) => { CartaoController.listarCartoes(req, res)});
router.get("/:id", (req, res) => { CartaoController.encontrarPorId(req, res) });
router.post("/criar_cartao", (req, res) => { CartaoController.criarCartao(req, res)});
router.put("/editar_cartao/:id", (req, res) => { CartaoController.editarCartao(req, res)}); 
router.put("/desativar_cartao/:id", (req, res) => { CartaoController.desativarCartao(req, res)});
router.delete("/deletar_cartao/:id", (req, res) => { CartaoController.deletarCartao(req, res)});

export default router;