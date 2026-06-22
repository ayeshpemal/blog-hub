const express = require("express");
const router = express.Router();
const { pool } = require("../db");

// GET /api/posts
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error while fetching posts" });
  }
});

// Future routes like POST /, GET /:id, PUT /:id can easily go here

module.exports = router;
