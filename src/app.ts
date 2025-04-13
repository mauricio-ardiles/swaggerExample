import express from 'express';
import userRoutes from './routes/users';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swaggerConfig';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;