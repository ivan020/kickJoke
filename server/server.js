import express from "express";
import cors from "cors";
import getRandomJoke from "./randomJoke.js";

const app = express();

app.use(cors());

app.get("/api/joke", (req, res) => {
  try {
    const joke = getRandomJoke();
    res.json({ joke });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get joke" });
  }
});

app.get("/", (req, res) => {
  res.send("KickJoke API is running...");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
