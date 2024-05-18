import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API REST Documentation',
      version: '1.0.0',
      description: 'API documentation with Swagger',
    },
  },
  apis: ['./routes/productos.Routes.js'], // Ruta a tus archivos de rutas
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
