import express from 'express';
import { corsConfig } from './config/cors.config';
import taskRoutes from './routes/task.routes';

const app = express();

// Configuración de CORS
app.use(corsConfig);

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/tasks', taskRoutes);

export default app;