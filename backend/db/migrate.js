const { Client } = require("pg");
const { dbConfig } = require("./index");

// 1. Define your future-proof migration sequence here
const migrations = [
  {
    name: "001_create_posts_table",
    query: `
      CREATE TABLE IF NOT EXISTS posts (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        title VARCHAR(255) NOT NULL,
        content TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `,
  },
  {
    name: "002_seed_initial_posts",
    query: `
      INSERT INTO posts (title, content) 
      SELECT 'My First Blog Post', 'This is the content for my very first post on Blog Hub.'
      WHERE NOT EXISTS (SELECT 1 FROM posts LIMIT 1);
      
      INSERT INTO posts (title, content) 
      SELECT 'Understanding React Compiler', 'Detailed explanation of the new React 19 compiler features and benefits.'
      WHERE NOT EXISTS (SELECT 1 FROM posts WHERE title = 'Understanding React Compiler');
    `,
  },
  // Future migrations go here...
];

const runMigrations = async () => {
  // Step 1: Connect to default 'postgres' to create your database if missing [cite: 17]
  const systemClient = new Client({ ...dbConfig, database: "postgres" });

  try {
    await systemClient.connect();
    console.log('🔄 Checking if "blog_hub_db" exists...');

    const dbCheck = await systemClient.query(
      `SELECT 1 FROM pg_database WHERE datname = 'blog_hub_db'`,
    );
    if (dbCheck.rowCount === 0) {
      await systemClient.query(`CREATE DATABASE blog_hub_db`);
      console.log('✅ Database "blog_hub_db" created successfully.');
    } else {
      console.log("✅ Database already exists.");
    }
  } catch (err) {
    console.error("❌ Error during database creation:", err);
    return;
  } finally {
    await systemClient.end();
  }

  // Step 2: Connect to your database and run the migration sequence
  const dbClient = new Client({ ...dbConfig, database: "blog_hub_db" });
  try {
    await dbClient.connect();
    console.log("🔄 Running migrations...");

    for (const migration of migrations) {
      console.log(`Executing: ${migration.name}...`);
      await dbClient.query(migration.query);
    }

    console.log("✅ All migrations executed successfully.");
  } catch (err) {
    console.error("❌ Migration failed:", err);
  } finally {
    await dbClient.end();
  }
};

runMigrations();
