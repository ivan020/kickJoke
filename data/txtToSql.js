const fs = require("fs");
const path = require("path");
const Database = require("better-sqlite3");

const TXT_FILE = path.join(__dirname, "jokes_filtered.txt");
const DB_FILE = path.join(__dirname, "jokes.db");

const db = new Database(DB_FILE, {
  fileMustExist: false,
});

db.pragma("journal_mode = WAL");
db.pragma("synchronous = NORMAL");
db.prepare(`
  CREATE TABLE IF NOT EXISTS jokes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

const text = fs.readFileSync(TXT_FILE, "utf8");

const jokes = text
  .split(/\n\s*\n/)
  .map(j => j.trim())
  .filter(Boolean);

// Prepared insert
const insert = db.prepare(`
  INSERT INTO jokes (text) VALUES (?)
`);

// Transaction for max speed
const insertMany = db.transaction((jokes) => {
  for (const joke of jokes) {
    insert.run(joke);
  }
});

insertMany(jokes);

console.log(`Inserted ${jokes.length} jokes into SQLite database.`);
db.close();

