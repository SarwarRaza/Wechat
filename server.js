import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = 5000;

app.use(express.static('public'));

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "english.html")); 
  });

  app.get("/korean.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "korean.html")); 
  });

  app.get("/chinese.html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "chinese.html")); 
  });


  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });