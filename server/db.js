import mongoose from 'mongoose';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

let mongo;

async function connectMemoryServer() {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  // Mongoose fails fast if the server isn't actually up, so give mongod a moment.
  const { MongoMemoryServer } = await import('mongodb-memory-server');
  mongo = await MongoMemoryServer.create({
    instance: {
      dbPath: path.join(__dirname, '..', '.data', 'db'),
      storageEngine: 'wiredTiger',
    },
  });
  await mongoose.connect(mongo.getUri());
  console.log('Mongo: in-memory (persistent .data/db)');
}

// Use MONGODB_URI (Atlas/local) when set; otherwise try an auto-mongod backed
// by a persistent .data/db, then a local mongod. mongodb-memory-server is
// imported lazily so the server starts even if that dev dep isn't installed
// (it needs a network fetch the first time) — it just won't be used.
export async function connectDB() {
  if (process.env.MONGODB_URI) {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Mongo: ' + process.env.MONGODB_URI);
    return;
  }
  try {
    await connectMemoryServer();
  } catch (e) {
    if (!/Cannot find package 'mongodb-memory-server'/.test(e.message)) throw e;
    console.log('mongodb-memory-server not installed — trying local mongod://localhost:27017');
    await mongoose.connect('mongodb://127.0.0.1:27017/jan-seva');
    console.log('Mongo: local mongod');
  }
}