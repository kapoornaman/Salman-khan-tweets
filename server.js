import express from "express";
import fs from "fs"


const app = express();
const PORT = 3000;

const quotes = JSON.parse(fs.readFileSync("./data/quotes2.json", "utf-8"));


app.use(express.static("public"));


//get all
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});



// Random quote
app.get("/random", (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(random);
});

//Filter by author
app.get("/api/quotes/author/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const result = quotes.filter(q => q.author.toLowerCase().includes(name));
  res.json(result);
});




// Filter by category (athlete/celebrity/etc)
app.get("/api/quotes/category/:category", (req, res) => {
  const category = req.params.category.toLowerCase();
  const result = quotes.filter(q => q.category.toLowerCase() === category);
  res.json(result);
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));