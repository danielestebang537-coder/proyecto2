import swaggerJsdoc from "swagger-jsdoc";

export const openApiSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de peliculas",
      version: "1.0.0",
      description: "API de peliculas",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/**/*.ts"],
});