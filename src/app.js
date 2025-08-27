import "dotenv/config"
import express from "express";
import { ClienteRouter, CartaoRouter, ContratacaoRouter } from "./routes/index.js";
import sequelize from "./config/db.js";

import { swaggerUi, swaggerSpec } from "./swagger.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Todas as rotas de cliente começam com /clientes
app.use("/clientes", ClienteRouter);
app.use("/cartoes", CartaoRouter);
app.use("/contratacoes", ContratacaoRouter);

sequelize.sync()
    .then(() => console.log("Tabelas sincronizads"))
    .catch((erro) => console.error("Erro ao sincroniezar", erro));


app.listen(PORT, () => {
    console.log("Servidor escutando...");
});


export default app;