import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

export const query = (text, params) => pool.query(text, params);
