import express from "express";
import fs from "fs";

const app = express();

// IMPORTANT FOR RENDER:
const PORT = process.env.PORT || 3000;

// Read quotes JSON
const quotes = JSON.parse(fs.readFileSync("./data/quotes.json", "utf-8"));

// Serve the public folder (your HTML frontend)
app.use(express.static("public"));


// =============================
//      API ENDPOINTS
// =============================

// Get ALL tweets
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

// Get RANDOM tweet
app.get("/random", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(random);
});


// =============================
//      START SERVER
// =============================
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
