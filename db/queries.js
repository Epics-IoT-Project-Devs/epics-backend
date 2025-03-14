import pool from './pool.js';

export async function getAllData() {
  const { rows } = await pool.query("SELECT * FROM process_data");
  return rows;
}
