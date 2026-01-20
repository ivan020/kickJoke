import express from "express";
import getRandomJoke from "./randomJoke.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/joke", (req, res) => {
  res.json({ joke: getRandomJoke() });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
