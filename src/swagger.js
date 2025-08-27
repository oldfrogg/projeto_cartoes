import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { Cliente, Cartao, Contratacao } from "./swagger/schemas.js";
import { clientePaths } from './swagger/clientePaths.js'
import { cartaoPaths } from './swagger/cartaoPaths.js'
import { contratacaoPaths } from './swagger/contratacaoPaths.js'

const swaggerDefinition = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Cartões",
            version: "1.0.0",
            description: "Gerenciamento de contratações de cartões por clientes."
        },
        servers: [
            {
                url: "http://localhost:3000"
            },
        ],
        components: {
            schemas: { Cliente, Cartao, Contratacao }
        }
    },
    tags: [
        { name: "Clientes", description: "Operações relacionadas a clientes" },
        { name: "Cartões", description: "Operações relacionadas a cartões" },
        { name: "Contratações", description: "Operações relacionadas a contratações"}
    ],
    paths: { },
    servers: [{ url: "http://localhost:3000" }],
    apis: ["./src/routes/*.js"]
}

const swaggerSpec = swaggerJSDoc(swaggerDefinition);
swaggerSpec.paths = {
    ...swaggerSpec.paths,
    ...clientePaths,
    ...cartaoPaths,
    ...contratacaoPaths
}

export { swaggerUi, swaggerSpec };