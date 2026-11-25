import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

config({ path: ['.env.local', '.env'], quiet: true });

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.on('error', (error) => console.error('Postgres pool error:', error.message));

export const db = drizzle(pool);