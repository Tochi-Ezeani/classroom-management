import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

// neon link writes .env.local, or .env if that file exists
config({ path: ['.env.local', '.env'], quiet: true });

export default defineConfig({
  schema: './schema.mjs',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL_POOLED!,
  },
});