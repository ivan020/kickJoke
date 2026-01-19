import Database from "better-sqlite3";
import path from 'path';

const __dirname = path.resolve();
const dbPath = path.join(__dirname, "/data/jokes.db");

const db = new Database(dbPath, { readonly: true });
export default function getRandomJoke() {
    const row = db
    .prepare("SELECT text FROM jokes ORDER BY RANDOM() LIMIT 1")
    .get();

   return row ? row.text: "no more jokes";
}
