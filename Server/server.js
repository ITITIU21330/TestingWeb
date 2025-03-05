const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/score', (req, res) => {
  let score = parseFloat(req.query.score) || 0;
  if (score % 0.5 !== 0) {
    score = Math.round(score * 2) / 2;
  }
  if (score > 10) score = 10;
  
  let imageUrl = `/images/score-${score}.jpg`;

  let pageUrl = `https://testingweb-iyxq.onrender.com/score?score=${score}`;
  
  res.render('score', { score, imageUrl, pageUrl });
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get('/question', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/question.html"));
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

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
