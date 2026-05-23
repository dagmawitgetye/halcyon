const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./app.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    is_verified INTEGER DEFAULT 0,
    verification_code TEXT,
    code_expires_at INTEGER,
    created_at INTEGER DEFAULT (strftime('%s','now'))
  )`);
});

module.exports = db;
