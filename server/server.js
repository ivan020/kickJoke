import express from "express";
import getRandomJoke from "./randomJoke.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/joke", (req, res) => {
  try {
    res.json({ joke: getRandomJoke() });
  } catch (err) {
    res.status(500).json({ error: "Failed to get joke" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
