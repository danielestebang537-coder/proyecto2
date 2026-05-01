import swaggerJsdoc from "swagger-jsdoc";

export const openApiSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API NARUTORG",
      version: "1.0.0",
      description: "API de peliculas",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Servidor local",
      },
      {
        url: "https://peliculasyseries.onrender.com/api/v1",
        description: "Servidor proc",
      },
    ],components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Ingresa el token JWT en formato Bearer",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/**/*.ts"],
});