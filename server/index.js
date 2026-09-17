import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
import { router } from './routes.js';
import { startSyncScheduler } from './jobs/syncScheduler.js';

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 4000;
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Jan Seva API on http://localhost:${PORT}`));
    // Start the civic-data sync cron unless explicitly disabled (ENABLE_SYNC_SCHEDULER=false).
    if (process.env.ENABLE_SYNC_SCHEDULER !== 'false') startSyncScheduler();
  })
  .catch((err) => {
    console.error('DB failed:', err.message);
    process.exit(1);
  });