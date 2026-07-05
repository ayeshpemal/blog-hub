const { Pool } = require("pg");

const dbConfig = {
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  password: process.env.POSTGRES_PASSWORD || "1234",
  port: 5432,
};

const pool = new Pool({ ...dbConfig, database: "blog_hub_db" });

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = { pool, dbConfig };
