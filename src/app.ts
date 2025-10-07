import express from 'express';
import itemRoutes from './routes/artistRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

// Routes
app.use('/api/artists', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;
