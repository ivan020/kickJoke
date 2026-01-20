import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../data/jokes.db");
const db = new Database(dbPath, { readonly: true });

export default function getRandomJoke() {
  const row = db
    .prepare("SELECT text FROM jokes ORDER BY RANDOM() LIMIT 1")
    .get();

  return row ? row.text : "no more jokes";
}
