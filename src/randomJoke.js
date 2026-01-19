import Database from "better-sqlite3";

const db = new Database("/home/ivane/work/kickJoke/data/jokes.db", { readonly: true });
export default function getRandomJoke() {
    const row = db
    .prepare("SELECT text FROM jokes ORDER BY RANDOM() LIMIT 1")
    .get();

   return row ? row.text: "no more jokes";
}
