import express from 'express';
import artistRoutes from './components/artists/artists.routes';
import { errorHandler } from './middlewares/errorHandler';
import bodyParser from 'body-parser';

export default function app() {
  const app = express();

  app.use(bodyParser.json());

  // Routes
  app.use('/api/artists', artistRoutes);

  // Global error handler (should be after routes)
  app.use(errorHandler);

  return app;
}
