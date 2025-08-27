import { Router } from "express";
import { ContratacaoController } from "../controllers/index.js";

const router = Router();

router.get("/", (req, res) => ContratacaoController.listarContratacoes(req, res));
router.get("/:id", (req, res) => ContratacaoController.encontrarPorId(req, res));
router.post("/fazer_contratacao", (req, res) => ContratacaoController.fazerContratacao(req, res));
router.put("/cancelar_contratacao/:id", (req, res) => ContratacaoController.cancelarContratacao(req, res));
router.get("/contratacoes_cliente/:cliente_id", (req, res) => ContratacaoController.contratacoesCliente(req, res));
router.get("/cartoes_ativos_cliente/:cliente_id", (req, res) => ContratacaoController.cartoesAtivosPorCliente(req, res));

export default router;