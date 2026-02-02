import dotenv from "dotenv";
import mysql from "mysql2/promise";

// dotenv.config({ path: "./db.config.env" });
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
});

(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("DB connected successfully ✅");
    conn.release();
  } catch (err) {
    console.log("Error connecting to DB ❌");
  }
})();

(async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
      )
        `);
    console.log("Table created....");
  } catch (err) {
    console.log("Error creating table", err);
  }
})();

export default pool;
