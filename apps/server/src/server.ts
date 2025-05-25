import { serve } from '@hono/node-server';
import { app } from './app.js';
import { showRoutes } from 'hono/dev';

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  info => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);

showRoutes(app);
