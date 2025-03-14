import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

module.exports = new Pool({
  host: "localhost",
  user: "postgres",
  database: "sensor_data",
  password: "postgres",
  port: process.env.DB_PORT
});

// // Use this for the AWS hosted database
// const { Pool } = require("pg");

// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });