const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get('/question', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/question.html"));
});


app.get('/score', (req, res) => {
  let score = parseInt(req.query.score) || 0;  
  let imageUrl = `https://TestingWeb.onrender.com/images/score-${score}.jpg`; 
  let pageUrl = `https://TestingWeb.onrender.com/score?score=${score}`;

  res.render('score', { score, imageUrl, pageUrl });
});

app.get('/share', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/share.html"));
});

app.get('/shareFacebook', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/shareFacebook.html"));
});

app.get('/instruct', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/instruct.html"));
});

app.get('/contendEmail', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contendEmail.html"));
});

app.get('/shareEmail', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/shareEmail.html"));
});

app.get('/copyLink', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/copyLink.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
