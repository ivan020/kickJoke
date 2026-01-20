import express from "express";
import getRandomJoke from "./randomJoke.js";

const app = express();

app.get("/api/joke", (req, res) => {
  res.json({ joke: getRandomJoke() });
});

app.listen(3001, () => {
  console.log("API running at http://localhost:3001");
});
