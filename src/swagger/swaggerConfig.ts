import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Node TS con Swagger',
      version: '1.0.0',
      description: 'Ejemplo de API documentada con Swagger en TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Buscar comentarios JSDoc
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;