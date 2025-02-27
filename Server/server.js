const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files for CSS, images, and JS from the current directory
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'js')));

// Routes for HTML files (ensure the path to the files is correct)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));  // index.html is one level up
});

app.get('/question', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'question.html'));  // question.html is one level up
});

app.get('/share', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'share.html'));  // share.html is one level up
});

app.get('/shareFacebook', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'shareFacebook.html'));  // shareFacebook.html is one level up
});

app.get('/score', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'score.html'));  // score.html is one level up
});

app.get('/instruct', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'instruct.html'));  // instruct.html is one level up
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
